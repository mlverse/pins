---
id: understanding-boards
title: Understanding Boards
---

Whenever you run `pin(resource)`, the resource is stored; by default, this means storing it locally on your computer for the purposes of caching it to avoid re-downloads, recomputing, etc. We can explore this local storage by creating a pin and then enumerating the board's storage folder:

```r
library(pins)
pin(mtcars)
tibble::tibble(paths = dir(board_local_storage(), full.names = TRUE))
```
```
# A tibble: 2 x 1
   paths
   <chr>
 1 /Users/username/Library/Caches/pins/local/data.txt
 2 /Users/username/Library/Caches/pins/local/mtcars
```

As you can see, each pin is stored inside the `rappdirs::user_cache_dir()` folder and a list of resources is tracked on a `data.txt` file. The function `pin()` and `pin_get()` store and retrieve data from this well-known location, while `pin_find()` makes use of the index file to search for resources and track other properties like cache expiration information. We can make explicit use of the default "local" board as follows:

```r
pin(mtcars, name = "mtcars", board = "local")
pin_get("mtcars", board = "local")
```

A local board is quite useful for all the reasons mentioned in the [Getting Started](/) article; however, to take full advantage of pins, you can also consider storing pins in shared locations that others can access, for instance:

Azure
: [Azure](https://azure.microsoft.com) is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers. Azure provides storage services for storing and accessing data on the cloud. You can learn more about using `pins` with Azure in the [Azure Board](/) article.

DigitalOcean
: [DigitalOcean](https://www.digitalocean.com/) is an American cloud infrastructure provider with data centers worldwide. DigitalOcean Spaces is an S3-compatible object storage service that lets you store and serve large amounts of data.  You can learn more aboaut using `pins` with DigitalOcean in the [DigitalOcean Board](/) article.

GitHub
: [GitHub](https://github.com) is an American company that provides hosting for software development version control using Git and a subsidiary of Microsoft. GitHub offers plans for free, professional, and enterprise accounts; but free accounts are commonly used to host open source projects. While GitHub is mostly known to be used as a code repository, it is a common practice to also use GitHub to store datasets. However, GitHub works best with datasets under [25MB](https://help.github.com/en/articles/adding-a-file-to-a-repository) before workarounds like [Git LFS](https://git-lfs.github.com/) and [release files](https://help.github.com/en/articles/distributing-large-binaries) to support up to 2GB resources. You can learn more about using `pins` with GitHub in the [GitHub Board](/) article.

Google Cloud
: [Google Cloud](https://cloud.google.com/) Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube. Google Cloud provides object storage with integrated edge caching to store unstructured data. You can learn more about using `pins` with Google Cloud in the [Google Cloud Board](/) article.

Kaggle
: [Kaggle](https://www.kaggle.com) is an online community of data scientists and machine learners, owned by Google LLC. Kaggle allows users to find and publish data sets, explore and build models in a web-based data-science environment, work with other data scientists and machine learning engineers, and enter competitions to solve data science challenges. Kaggle supports storing datasets [up to 10GB](https://www.kaggle.com/product-feedback/43505#post246047) in size and is free of charge for public datasets. You can learn more about using `pins` with GitHub in the [Kaggle Board](/) article.

RStudio Connect
: [RStudio Connect](https://rstudio.com/products/connect/) is a publishing platform for the work your teams create in R and Python. You can share Shiny applications, R Markdown reports, Plumber APIs, dashboards, plots, Jupyter Notebooks, and more in one convenient place. RStudio Connect can be used to store private datasets and is only limited by the physical storage capacity configured in your server, learn to configure RStudio Connect in the [RStudio Connect Board](/) article.

S3
: [Amazon Web Services](https://aws.amazon.com/) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. Amazon Simple Storage Service (S3) is a service offered by Amazon Web Services that provides object storage through a web service interface. Amazon S3 uses the same scalable storage infrastructure that Amazon.com uses to run its global e-commerce network. You can learn more about using `pins` with Amazon S3 in the [S3 Board](/) article.

However, since there are many more storage locations to consider (see for instance [Where should scientists store their data](https://github.com/swcarpentry/DEPRECATED-site/issues/797)), `pins` also supports web-accessible locations through [Website Boards](/) and even custom boards to fully-support reading, writing, authentication and so on. You can learn how to create extensions at [Extending Boards](/).

For instance, there are various ongoing projects to implement additional boards:

Databases
: A [database](https://en.wikipedia.org/wiki/Database) is an organized collection of data, generally stored and accessed electronically from a computer system. Where databases are more complex they are often developed using formal design and modeling techniques. In R, packages like [DBI](https://CRAN.R-project.org/package=DBI) and [odbc](https://CRAN.R-project.org/package=odbc) allow you to connect to many different databases. The [connections](https://rstudio.github.io/connections/) package integrates DBI-compliant packages with the RStudio IDE’s Connection Pane and **experimental** support for pins.

Nextcloud
: [Nextcloud](https://nextcloud.com/) is a suite of client-server software for creating and using file hosting services. Nextcloud application functionally is similar to Dropbox. Unlike Dropbox, Nextcloud does not offer off-premises file storage hosting. Nextcloud is free and open-source, which means that anyone is allowed to install and operate it on their own private server devices. The [nextcloudr](https://gitlab.com/gwmngilfen/nextcloudr) package provides an interface to Nextcloud and **experimental** support for pins.

Please be mindful when using boards, you should **only register boards you trust**. As a general good practice, when using GitHub, it is not advisable to clone and build R packages from GitHub repos you don't trust. In a similar way, you should not register GitHub boards, nor Kaggle, nor RStudio Connect, nor Website boards that you don't trust.
