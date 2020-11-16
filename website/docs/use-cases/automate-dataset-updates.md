---
id: automate-dataset-updates
title: Automate Dataset Updates
---

After datasets are shared (as showcased in the [Reuse Tidy Datasets](reuse-tidy-datasets.htm) use case), it is often useful to also consider automating this process. This is especially interesting for datasets that tend to get out-of-date constantly.

For example, if we were interested in updating a pin to track daily news from the [BBC World News RSS](http://feeds.bbci.co.uk/news/world/rss.xml), we could create the following [R Markdown](https://rmarkdown.rstudio.com/) report to download the RSS feed, tidy the news, and publish a pin with the up-to-date news:

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

While you can run manually this report each time you need the `worldnews` pin updated, using automated techniques makes so much sense.

The `pins` package does not provide support to automate execution of R code; however, many tools and services can be used in combination with `pins` to update datasets with ease. For instance, when using GitHub, Travis can be used in combination with a `GITHUB_PAT` environment variable to knit this daily news report and update pins in GitHub. Similarly, using RStudio Connect, we can easily publish this report and configure RStudio Connect to run this report daily -- the pin will then be kept up-to-date, every-day, automatically!

You can preview the `worldnews` dataset at [beta.rstudioconnect.com/connect/#/apps/7532/access](https://beta.rstudioconnect.com/connect/#/apps/7532/access):

[![](/images/docs/schedule-updates-rsconnect.png)](https://beta.rstudioconnect.com/connect/#/apps/7532/access)
