---
id: digital-ocean
title: Using DigitalOcean Boards
sidebar_label: Digital Ocean
---

## Registering

In order to use DigitalOcean Spaces as a [board](boards-understanding.html), you need an DigitalOcean space and a storage key. You can sign-up and create those from [digitalocean.com](https://www.digitalocean.com/).

![](/images/docs/boards-digitalocean-create-storage.png)

You can then use the DigitalOcean space, key, secret, and datacenter to authenticate:

```r
board_register_dospace(space = "pinstest",
                       key = "AAAAAAAAAAAAAAAAAAAA",
                       secret = "ABCABCABCABCABCABCABCABCABCABCABCABCABCA==",
                       datacenter = "sfo2")
```

Notice that `board_register_dospace()` is just an alias with named parameters to `board_register()`; the previous code is equivalent to:

```r
board_register("dospace", space = "pinstest",
                          key = "AAAAAAAAAAAAAAAAAAAA",
                          secret = "ABCABCABCABCABCABCABCABCABCABCABCABCABCA==",
                          datacenter = "sfo2")
```

Once the board is registered, you can pin and search using `pin()`, `pin_get()` and `pin_find()`.

## Pinning

Like in other boards, you can create pins for `iris` and `mtcars` by setting `board` to DigitalOcean space name,

```r
pin(iris, description = "The iris data set", board = "dospace")
pin(mtcars, description = "The motor trend cars data set", board = "dospace")
```

After a pin is created, the pin also becomes available in the DigitalOcean space; by default, they are created as private datasets.

![](/images/docs/boards-digitalocean-storage-pin.png)

You can also retrieve pins back from this repo using the now familiar `pin_get()` function.

```r
pin_get("iris", board = "dospace")
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

Notice you can also retrieve an arbitrary file using the path to the file or its URL as well:

```r
pin_get("https://pinstest.region.digitaloceanspaces.com/iris/data.csv", board = "dospace")
```
```r
pin_get("iris/data.csv", board = "dospace")
```

## Discovering

You can then search pins in your DigitalOcean board using `pin_find()`, which by default search all boards but you can also explicitly request to use this particular board:

```r
pin_find("data", board = "dospace")
```
```
# A tibble: 2 x 4
  name   description                   type  board
  <chr>  <chr>                         <chr> <chr>
1 iris   The iris data set             table dospace
2 mtcars The motor trend cars data set table dospace
```

Notice that the given 'data' search keyword is searched in the name and description fields for the pins available in this repo.
