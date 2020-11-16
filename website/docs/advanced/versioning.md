---
id: versioning
title: Versioning
---

In most cases, a remote resource does not change over time. For example, the following "retail sales example" dataset is unlikely to change and can be retrieved as follows:

```r
pin("https://raw.githubusercontent.com/facebook/prophet/master/examples/example_retail_sales.csv",
    name = "retail_sales")
```

To ensure this dataset does not change, we can retrieve a unique signature to identify this resource using `pin_info()` as follows:

```r
pin_info("retail_sales", signature = TRUE)
```
```
# Source: local<example_retail_sales> [files]
# Signature: 5f7e575b23e3bb4a802358864be2dbc665ef1ab8
# Properties:
#   - path: example_retail_sales
#   - extension: csv
```

This signature can then be used to ensure the dataset does not change. For instance, you can share the following code with others to ensure they get the exact same dataset:

```r
pin("https://raw.githubusercontent.com/facebook/prophet/master/examples/example_retail_sales.csv",
    signature = "5f7e575b23e3bb4a802358864be2dbc665ef1ab8")
```

You can also use `signature` with `pin_get()`. Notice that the operation will fail if the signatures don't match.

In contrast, other datasets are expected to change and require us to think which particular version we are retrieving or sharing in a given board.

## Versioning Boards

Currently, all boards support versioning; however, not all boards support versions by default. Boards like [GitHub](boards-github.html), [Kaggle](boards-kaggle.html) and [RStudio Connect](boards-rsconnect.html), support versioning by default and you can explore previous versions using `pin_versions()`.

For instance, let's take a look at previous versions of a Kaggle dataset:

```r
pin_versions("new-york-city/nypd-motor-vehicle-collisions", board = "kaggle")
```
```
# A tibble: 10 x 4
   version created                  author      message
   <chr>   <chr>                    <chr>       <chr>
 1 12      2019-12-02T08:47:02.517Z Kaggle Team Automated data update 20191202
 2 11      2019-11-26T14:13:33.05Z  Kaggle Team Automated data update 20191126
 3 10      2019-11-22T19:39:42.85Z  Kaggle Team Automated data update 20191122
 4 9       2019-11-12T15:11:14.477Z Kaggle Team Automated data update 20191112
 5 8       2019-11-04T00:14:16.933Z Kaggle Team Automated data update 20191104
 6 7       2019-10-29T23:24:22.33Z  Kaggle Team Automated data update 20191029
 7 6       2019-10-24T08:44:45.307Z Kaggle Team Automated data update 20191024
 8 5       2019-10-16T20:07:22.91Z  Kaggle Team Automated data update 20191016
 9 4       2019-10-12T06:37:25.1Z   Kaggle Team Automated data update 20191012
10 3       2019-10-07T13:46:46.657Z Kaggle Team Automated data update 20191007
```

You can then retrieve specific versions with the `version` parameter in `pin_get()`:

```r
pin_get("new-york-city/nypd-motor-vehicle-collisions", version = 3, board = "kaggle")
```
```
[1] "nypd-motor-vehicle-collisions/_versions/3/Collision_DataDictionary.xlsx"
[2] "nypd-motor-vehicle-collisions/_versions/3/nypd-motor-vehicle-collisions.csv"
[3] "nypd-motor-vehicle-collisions/_versions/3/socrata_metadata.json"
```

Other boards, like the default local board, [Azure](boards-azure.html), [Digital Ocean](boards-dospace.html), [Google Cloud](boards-gcloud.html), and [S3](boards-s3.html), do not support versions by default since additional storage cost is incurred. In such cases, one needs to opt-in to use versions when registering a board by setting the `versions` parameter to `TRUE`.

For instance, in your local computer you can register the local board with versioning as follows:

```r
board_register("local", versions = TRUE)
```

From now on, when `pin()` is used, multiple versions will be stored locally:

```r
# store iris as mtcars dataset
pin(iris, "mtcars", description = "the mtcars dataset")

# oops! we meant mtcars as mtcars
pin(mtcars, "mtcars", description = "the mtcars dataset")
```

Which you can then list with `pin_versions()`, notice that the most recent version is displayed first:

```r
pin_versions("mtcars", board = "local")
```
```
# A tibble: 2 x 1
  version
  <chr>
1 a5c5cb2
2 d93d422
```

You can then retrieve specific versions:

```r
pin_get("mtcars", version = "d93d422", board = "local")
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

A similar approach can be followed with `board_register_azure()`, `board_register_dospace()`, `board_register_gcloud()`, `board_register_s3()`, and `board_register_datatxt()`.
