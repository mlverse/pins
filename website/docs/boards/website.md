---
id: website
title: Using Website Boards
sidebar_label: Website
---

The [local](/), [GitHub](/), [Kaggle](/) and [RStudio Connect](/) boards provide support for many popular services; however, there are many cases where you would want to share resources in your own website. For instance, [data.gov](https://www.data.gov/), [data.uis.unesco.org](http://data.uis.unesco.org) and [data.nasa.gov](https://data.nasa.gov/) are all examples of websites that contain datasets; in those cases, it can be preferable to avoid moving resources somewhere else. To support `pins` with websites that want to make their data available as `pins`, you can make use of a `data.txt` file to describe them with ease. You can learn more about `data.txt` files at [datatxt.org](https://datatxt.org).

In a nutshell, a `data.txt` file is just a YAML file that you can read and write from R with ease using the `yaml` package. For instance, the following `data.txt` file can be found under [datatxt.org/data.txt](https://datatxt.org/data.txt) to describe the famous `iris` and `mtcars` datasets:

```yaml
- path: iris/data.csv
  name: iris
  rows: 150
  cols: 5
  description: This famous (Fisher's or Anderson's) iris data set gives the measurements
    in centimeters of the variables sepal length and width and petal length and width,
    respectively, for 50 flowers from each of 3 species of iris. The species are Iris
    setosa, versicolor, and virginica.
  type: table
- path: mtcars/data.csv
  name: mtcars
  rows: 32
  cols: 11
  description: The data was extracted from the 1974 Motor Trend US magazine, and comprises
    fuel consumption and 10 aspects of automobile design and performance for 32 automobiles
    (1973–74 models).
  type: table
```

## Registering

As a website owner, you can choose to create a similar file and place it in your website, you do not need to place it in the root of your domain, it can be any valid URL. Once defined, you can create a read-only board using the `datatxt` board. For this particular example, we will reuse [datatxt.org/data.txt](https://datatxt.org/data.txt), but you can replace that with your own domain name, website path, S3 bucket and so on.

```r
board_register_datatxt(name = "txtexample", url = "https://datatxt.org/data.txt")
```

As you would expect, `board_register_datatxt()` is also just a wrapper function to `board_register("datatxt")`.

## Discovering

Once this board is registered, you can use `pin_find()` to discover pins,

```r
pin_find(board = "txtexample")
```
```
# A tibble: 2 x 4
  name   description                                                 type  board
  <chr>  <chr>                                                       <chr> <chr>
1 iris   This famous (Fisher's or Anderson's) iris data set gives t… table txtexam…
2 mtcars The data was extracted from the 1974 Motor Trend US magazi… table txtexam…
```

Website boards contain extended fields that go beyond the fields `pins` requires, to retrieve all the additional fields use `extended = TRUE`:

```r
pin_find(board = "txtexample", extended = TRUE)
```
```
# A tibble: 2 x 8
  path      name    rows  cols description                              type  title        board
  <chr>     <chr>  <int> <int> <chr>                                    <chr> <chr>        <chr>
1 iris/dat… iris     150     5 This famous (Fisher's or Anderson's) ir… table NA           txtex…
2 mtcars/d… mtcars    32    11 The data was extracted from the 1974 Mo… table Motor Trend… txtex…
```

Or `pin_info()` to retrieve all the information associated with a particular pin,

```r
pin_info("mtcars", board = "txtexample")
```
```
# Source: txtexample<mtcars> [table]
# Description: The data was extracted from the 1974 Motor Trend US magazine, and comprises fuel consumption and 10 aspects of automobile design and performance for 32 automobiles (1973–74 models).
# Extended:
#   - path: mtcars/data.csv
#   - rows: 32
#   - cols: 11
#   - title: Motor Trend Car Road Tests
```

You can then use `pin_get()` to retrieve a pin,

```r
pin_get("mtcars", board = "txtexample")
```
```
# A tibble: 32 x 11
     mpg   cyl  disp    hp  drat    wt  qsec    vs    am  gear  carb
   <dbl> <dbl> <dbl> <dbl> <dbl> <dbl> <dbl> <dbl> <dbl> <dbl> <dbl>
 1  21       6  160    110  3.9   2.62  16.5     0     1     4     4
 2  21       6  160    110  3.9   2.88  17.0     0     1     4     4
 3  22.8     4  108     93  3.85  2.32  18.6     1     1     4     1
 4  21.4     6  258    110  3.08  3.22  19.4     1     0     3     1
 5  18.7     8  360    175  3.15  3.44  17.0     0     0     3     2
 6  18.1     6  225    105  2.76  3.46  20.2     1     0     3     1
 7  14.3     8  360    245  3.21  3.57  15.8     0     0     3     4
 8  24.4     4  147.    62  3.69  3.19  20       1     0     4     2
 9  22.8     4  141.    95  3.92  3.15  22.9     1     0     4     2
10  19.2     6  168.   123  3.92  3.44  18.3     1     0     4     4
# … with 22 more rows
```
