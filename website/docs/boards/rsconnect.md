---
id: rsconnect
title: Using RStudio Connect Boards
sidebar_label: RStudio Connect
---

## Registering

In order to use RStudio Connect as a [board](boards-understanding.html), you need to authenticate first. When using RStudio, you can authenticate launching **Tools** - **Global Options** - **Publishing** - **Connect**, and follow the instructions from that wizard:

Once an RStudio Connect account is registered in RStudio, you can simply run:

```r
board_register_rsconnect()
```

Notice that `board_register_rsconnect()` is just an alias with named parameters to `board_register()`; the previous code is equivalent to:

```r
board_register("rsconnect")
```

If you happen to have multiple RStudio Connect servers registered, you will have to specify the `server` parameter. Similarly, when multiple accounts are registered, you will need to specify the `account` parameter.

```r
# register when multiple servers are available
board_register_rsconnect(server = "https://rstudio-connect-server")

# register when multiple accounts are available
board_register_rsconnect(account = "account-name")
```

Once the RStudio Connect board is registered, you can pin and search using `pin()`, `pin_get()` and `pin_find()` as usual.

## Pinning

Like in other boards, you can create pins for `iris` and `mtcars` by setting `board` to the RStudio Connect board,

```r
pin(iris, description = "The iris data set", board = "rsconnect")
pin(mtcars, description = "The motor trend cars data set", board = "rsconnect")
```

After a pin is created, the pin also becomes available in RStudio Connect,

![](/images/docs/boards-rsconnect-datasets.png)

You can also retrieve pins back from RStudio Connect using the now familiar `pin_get()` function.

```r
pin_get("iris", board = "rsconnect")
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

## Discovering

You can then search pins in your RStudio Connect server using `pin_find()`, which by default search all boards but you can also explicitly request to use this particular RStudio Connect board:

```r
pin_find("mt", board = "rsconnect")
```
```
# A tibble: 1 x 4
  name             description                       type  board
  <chr>            <chr>                             <chr> <chr>
1 jluraschi/mtcars "The motor trend cars data set. " table rsconnect
```

RStudio Connect boards contain extended fields that go beyond the fields `pins` requires, to retrieve all the additional fields use `extended = TRUE`:

```r
pin_find(board = "rsconnect", extended = TRUE)
```
```
# A tibble: 2 x 38
     id guid  access_type connection_time… read_timeout init_timeout idle_timeout max_processes
  <int> <chr> <chr>       <lgl>            <lgl>        <lgl>        <lgl>        <lgl>
1  6446 1b9f… all         NA               NA           NA           NA           NA
2  6612 bf5d… acl         NA               NA           NA           NA           NA
# … with 30 more variables: min_processes <lgl>, max_conns_per_process <lgl>, load_factor <lgl>,
#   url <chr>, vanity_url <lgl>, name <chr>, title <lgl>, bundle_id <int>, app_mode <int>,
#   content_category <chr>, has_parameters <lgl>, created_time <chr>, last_deployed_time <chr>,
#   r_version <lgl>, py_version <lgl>, build_status <int>, run_as <lgl>,
#   run_as_current_user <lgl>, description <chr>, app_role <chr>, owner_first_name <chr>,
#   owner_last_name <chr>, owner_username <chr>, owner_guid <chr>, owner_email <lgl>,
#   owner_locked <lgl>, is_scheduled <lgl>, git <lgl>, board <chr>, type <chr>
```

Or `pin_info()` to retrieve all the information associated with a particular pin,

```r
pin_info("mtcars", board = "rsconnect")
```
```
# Source: rsconnect<jluraschi/mtcars> [table]
# Extended:
#   - id: 5639
#   - guid: 9b6ae382-ebec-45de-8546-ee779e33ed10
#   - access_type: acl
#   - url: https://beta.rstudioconnect.com/content/5639/
#   - vanity_url: FALSE
#   - bundle_id: 13400
#   - app_mode: 4
#   - content_category: pin
#   - has_parameters: FALSE
#   - created_time: 2019-08-21T02:22:56.546011Z
#   - last_deployed_time: 2019-08-23T15:55:25.435595Z
#   - build_status: 2
#   - run_as_current_user: FALSE
#   - owner_first_name: Javier
#   - owner_last_name: Luraschi
#   - owner_username: jluraschi
#   - owner_guid: ac498f34-174c-408f-8089-a9f10c630a37
#   - owner_locked: FALSE
#   - is_scheduled: FALSE
#   - rows: 14
#   - cols: 11
```

Notice that the given 'mt' search keyword is searched as a prefix in the pin name.

## Sharing

You can share pins with others in RStudio Connect, by changing the viewers of the document to specific groups or all users with access; or alternatively, to specific users. This is accomplished by opening the new published pin and then changing access under the settings tab.

![](/images/docs/boards-rsconnect-sharing.png)

Once you share this pin with specific users, they can follow the same steps to register their RStudio Connect board, to download this pin.

### Public

You can also choose to share a pin publicly and avoid having to register the RStudio Connect board to retrieve this pin.

To create a public pin, first publish a pin and navigate to RStudio Connect; then set the "Access" to "Anyone - no login required" -- The pin will become public and accessible to anyone using their content URL. The remote resource stored in RStudio Connect can then be cached locally with `pin()` as follows:

```r
pin("https://rstudio-connect-server/content/1234", name = "my-rsc-content")
```

To avoid having to manually change the "Access" manually, you can also set the `access_type` to `acl`, `loggend_in` or `all` when creating a pin:

```r
# create a publicly visible pin
pin("https://rstudio-connect-server/content/1234", name = "my-rsc-content", access_type = "all")
```

## Automation

One significant advantage from using RStudio Connect over other boards is its ability to schedule R Markdown reports to run automatically. This allows you to automate the creation of pins and also consume pins published manually from automated reports.

To support automation you need to use an [RStudio Connect API Key](https://docs.rstudio.com/connect/user/api-keys/) as your authentication method. Therefore, the first step is to create an API Key, once created, you will need to register the board as follows:

```r
board_register_rsconnect(key = "the-rstudio-connect-api-key",
                         server = "https://rstudio-connect-server")
```

However, since it's a best practice to not store secrets in plain text, `pins` will also read the key from the `CONNECT_API_KEY` environment variable, or you can retrieve explicitly as `Sys.getenv("CONNECT_API_KEY")` before assigning it to the key parameter.

Once authenticated, you can use `pins` as you would normally would. Let's take a look at an automated R Markdown report which retrieves the latest news from the BBC which we can then schedule to run daily to update the pin:

````markdown
---
title: "RStudio Connect -- World News"
---

`r ''````{r, setup, include = FALSE}
library(pins)
board_register_rsconnect(key = Sys.getenv("CONNECT_API_KEY"),
                         server = Sys.getenv("CONNECT_SERVER"))
```

Create the `world_news` data frame,

`r ''````{r  fig.align='center', warning=FALSE}
library(xml2)

world_news <- data.frame(title = xml_text(xml_find_all(
  read_xml("http://feeds.bbci.co.uk/news/rss.xml"), "///item/title/node()")))
```

Which you can then share as a pin,

`r ''````{r}
pin(world_news, "worldnews", board = "rsconnect")
```
````

## Customizing

A pin is displayed in RStudio Connect with an auto-generated page showcasing instructions for getting the pin and a preview of the dataset, this page can be customized as follows:

1) Locate the file with `system.file("views/data/index.html", package = "pins")`
1) Copy the file to a new location and make any changes to it.
1) Set the file path as an option using `Sys.setenv(RSCONNECT_HTML_PATH = <your index>)`.
1) Pin a dataset normally,

Please note that experimental support for `pins` was introduced in RStudio Connect 1.7.8.
