import * as fileSystem from './host/file-system';
import * as requests from './host/requests';
import { tryCatch } from './utils/errors';
import { pinLog } from './log';
import { pinFileCacheMaxAge } from './pin-file';
import {
  pinStoragePath,
  pinRegistryRetrieveMaybe,
  pinRegistryUpdate,
} from './pin-registry';

export async function pinDownloadOne(
  path,
  {
    name,
    component,
    extract,
    customEtag = '',
    removeQuery,
    config,
    headers,
    canFail,
    cache = true,
    contentLength = 0,
    subpath,
    details = {},
    download = true,
  }
) {
  if (!subpath) subpath = name;

  const fetch = requests.fetch();
  const mustDownload = !cache;

  // clean up name in case it's a full url
  name = name.replace('^https?://', '');

  const localPath = pinStoragePath(component, subpath);

  if (!download) {
    return localPath;
  }

  // use a temp path to rollback if something fails
  const tempfile = fileSystem.tempfile();
  fileSystem.dir.create(tempfile);

  const oldPin = (await pinRegistryRetrieveMaybe(name, component)) || {};

  let oldCache = oldPin.cache;
  let oldCacheMissing = true;
  let cacheIndex = 0;

  if (!oldCache) {
    oldPin.cache = {};
    oldCache = {};
    cacheIndex = 1;
  } else {
    const cacheUrls = Object.keys(oldCache).map((k) => oldCache[k].url);

    cacheIndex = cacheUrls.findIndex((u) => u === path);
    if (cacheIndex === -1) {
      oldCache = {};
      cacheIndex = cacheUrls.length + 1;
    } else {
      oldCache = oldCache[cacheIndex];
      oldCacheMissing = false;
    }
  }

  let reportError = (e) => {
    if (oldCacheMissing) {
      throw new Error(e);
    } else {
      pinLog(e);
    }
  };
  const catchLog = (func) =>
    tryCatch(func, (e) => {
      pinLog(e.message);
    });
  const catchError = oldCacheMissing
    ? (func) => func
    : (func) =>
        tryCatch(func, (e) => {
          reportError(e.message);
        });

  if (canFail) {
    reportError = (e) => {
      details.error = e;
    };
  }

  cache = {};
  cache.etag = oldCache.etag || '';
  cache.maxAge = oldCache.maxAge || 0;
  cache.changeAge = oldCache.changeAge || new Date().getTime() - cache.maxAge;
  cache.url = path;

  let error = null;
  let extractType = null;

  pinLog(
    `Checking 'changeAge' header (time, change age, max age): ${new Date()}, ${
      cache.changeAge
    }, ${cache.maxAge}`
  );

  details.somethingChanged = false;

  // skip downloading if maxAge still valid
  if (new Date().getTime() >= cache.changeAge + cache.maxAge || mustDownload) {
    const skipDownload = false;

    if (customEtag && customEtag.length) {
      pinLog(`Using custom 'etag' (old, new): ${oldCache.etag}, ${customEtag}`);
      cache.etag = customEtag;
    } else {
      // TODO: use config parameter
      let headResult = fetch(path, { method: 'HEAD', headers });

      if (headResult.then) {
        headResult = await headResult;
      }

      if (headResult) {
        cache.etag = headResult.headers.etag || '';
        cache.changeAge = new Date().getTime();
        cache.maxAge =
          pinFileCacheMaxAge(headResult.headers['cache-control']) ||
          cache.changeAge * 2;
        contentLength = headResult.headers['content-length'];
        pinLog(`Checking 'etag' (old, new):  ${oldCache.etag}, ${cache.etag}`);
      }
    }

    const etagChanged = cache.etag || oldCache.etag !== cache.etag;

    // skip downloading if etag has not changed
    if (oldCacheMissing || etagChanged || mustDownload) {
      let downloadName = fileSystem.basename(path);

      if (removeQuery) {
        downloadName = downloadName.split('/')[0];
      }

      const destinationPath = fileSystem.path(tempfile, downloadName);

      pinLog(`Downloading ${path} to ${destinationPath}`);
      details.somethingChanged = true;

      let result = fetch(path, { method: 'GET', headers });

      if (result.then) {
        result = await result;
      }

      if (!result.ok) {
        pinLog(`Failed to download remote file: ${path}`);
      } else {
        const contentType = result.headers['content-type'];
        let text =
          typeof result.text === 'function' ? result.text() : result.text;

        if (text.then) text = await text;

        fileSystem.write(text, destinationPath);

        if (contentType) {
          extractType = contentType.replace(/application\/(x-)?/, '');
          if (
            ['application/octet-stream', 'application/zip'].includes(
              contentType
            )
          ) {
            /* TODO:
            if (fileSystem.fileSize(destinationPath) > 4 &&
              readBin(destinationPath, raw(), 4) === as.raw(c(0x50, 0x4b, 0x03, 0x04)))
              extractType = 'zip'
            */
          }
        }
      }
    }
  }

  if (error) return;

  const newCache = oldPin.cache;
  newCache[cacheIndex] = cache;

  // allow to override extraction method, useful in pin() from URLs
  if (extract) {
    extractType = extract;
    extract = true;
  }

  const files = fileSystem.dir.list(tempfile, { fullNames: true });

  if (extractType && extract) {
    /* TODO
    pinExtract(
      structure(files, { class: extractType }),
      tempPath
    )
    */
  }

  files.forEach((file) => {
    fileSystem.copy(file, localPath, { overwrite: true, recursive: true });
  });

  // use relative paths to match remote service downloads and allow moving pins folder, potentially
  const relativePath = localPath.replace(pinStoragePath(component, ''), '');

  await pinRegistryUpdate(name, component, {
    path: oldPin.path || relativePath,
    cache: newCache,
  });

  return localPath;
}

export async function pinDownload(path, args) {
  if (typeof path === 'string') {
    return await pinDownloadOne(path, args);
  } else {
    const result = [];

    for (let idx = 0; idx < path.length; idx++) {
      result.push(await pinDownloadOne(path[idx], args));
    }

    return result;
  }
}
