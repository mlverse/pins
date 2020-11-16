---
id: google-cloud
title: Using Google Cloud Boards
sidebar_label: Google Cloud
---

## Registering

In order to use Google Cloud Storage as a [board](boards-understanding.html), you need a Google Cloud Storage account, a Google Storage bucket, and an access token or the [Gogole Cloud SDK](https://cloud.google.com/sdk/) properly installed and configured. You can sign-up and create those from [console.cloud.google.com](https://console.cloud.google.com):

![](/images/docs/boards-gcloud-create-storage.png)

You can then use the Google Cloud Storage bucket and implicitly the Google Cloud SDK (or an explicit token) to authenticate:

```r
board_register_gcloud(bucket = "pinscontainer")
```

It is recommend to install the Google Cloud SDK to avoid managing access tokens; however, you can also retrieve an Access Token from [developers.google.com/oauthplayground](https://developers.google.com/oauthplayground). This approach requires you to authorize the "Google Storage API v1" scope.

Notice that `board_register_gcloud()` is just an alias with named parameters to `board_register()`; the previous code is equivalent to:

```r
board_register("gcloud", bucket = "pinscontainer")
```

Once the board is registered, you can pin and search using `pin()`, `pin_get()` and `pin_find()`.

## Pinning

Like in other boards, you can create pins for `iris` and `mtcars` by setting `board` to Google Cloud Storage bucket name,

```r
pin(iris, description = "The iris data set", board = "gcloud")
pin(mtcars, description = "The motor trend cars data set", board = "gcloud")
```

After a pin is created, the pin also becomes available in the Google Cloud Storage; by default, they are created as private datasets.

![](/images/docs/boards-gcloud-storage-pin.png)

You can also retrieve pins back from this repo using the now familiar `pin_get()` function.

```r
pin_get("iris", board = "gcloud")
```
```
# A tibble: 150 x 5
   Sepal.Length Sepal.Width Petal.Length Petal.Width Species
          <dbl>       <dbl>        <dbl>       <dbl> <fct>
 1          5.1         3.5          1.4         0.2 setosa
 2          4.9         3            1.4         0.2 setosa
 3          4.7         3.2          1.3         0.2 setosa
 4          4.6         3.1          1.5         0.2 setosa
 5          5           3.6          1.4         0.2 setosa
 6          5.4         3.9          1.7         0.4 setosa
 7          4.6         3.4          1.4         0.3 setosa
 8          5           3.4          1.5         0.2 setosa
 9          4.4         2.9          1.4         0.2 setosa
10          4.9         3.1          1.5         0.1 setosa
# … with 140 more rows
```

Notice you can also retrieve an arbitrary file using the path to the file or its full URL as well:

```r
pin_get("https://storage.googleapis.com/pinscontainer/iris/data.csv", board = "gcloud")
```
```r
pin_get("iris/data.csv", board = "gcloud")
```

## Discovering

You can then search pins in your Google Cloud board using `pin_find()`, which by default search all boards but you can also explicitly request to use this particular board:

```r
pin_find("data", board = "gcloud")
```
```
# A tibble: 2 x 4
  name   description                   type  board
  <chr>  <chr>                         <chr> <chr>
1 iris   The iris data set             table gcloud
2 mtcars The motor trend cars data set table gcloud
```

Notice that the given 'data' search keyword is searched in the name and description fields for the pins available in this repo.
