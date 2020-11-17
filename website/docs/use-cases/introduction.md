---
id: introduction
title: Introduction
---

There are many interesting use cases available for `pins`, from easily caching remote resources to creating complex data pipelines, and many more use cases which we can't possible describe exhaustively. Therefore, the purpose of this section is to mention a few use cases that can help you get inspired on how to use `pins`.

For instance, after cleaning up your data, you can consider letting others [reuse your tidy datasets](use-cases/reusing-tidy-datasets.html). Once your data is in a shared location, you might want to consider [automating dataset updates](use-cases/automate-dataset-updates.html). You can then attempt to pipe multiple datasets to [create data pipelines](use-cases/create-data-pipelines.html) or partially [update plumber and shiny apps](use-cases/update-plumber-and-shiny-apps.html) using pins.

The use cases are presented using [RStudio Connect](https://rstudio.com/products/connect/); however, similar workflows can be built in GitHub or Kaggle by making use of [Travis](https://travis-ci.org), [AppVeyor](http://appveyor.com) or [GitHub Actions](https://github.com/features/actions).

```r
pins_site_gallery(list(
  list(image       = "images/use-cases-reuse-tidy-datasets.png",
       title       = "Reuse Tidy Datasets",
       href        = "use-cases/reuse-tidy-datasets.html",
       description = "Doing data analysis usually requires tidying your dataset first, this can take quite some time so it's worth considering sharing the tidy dataset with others or your future self. You can easily incorporate pins in your data analysis workflows by sharing your tidy dataset with others in any of the supported boards (GitHub, Kaggle, RStudio Connect, etc).",
       app         = "https://beta.rstudioconnect.com/connect/#/apps/6522/access"),
   list(image      = "images/use-cases-automate-dataset-updates.png",
       title       = "Automate Dataset Updates",
       href        = "use-cases/automate-dataset-updates.html",
       description = "Once a dataset is shared as a pin, it is natural to consider automating the process of updating it. This is especially relevant for datasets that change frequently. You can use automated tools like Travis, AppVeyor, GitHub Actions or RStudio Connect in combination with R and the pins package to keep your datasets up to date.",
       app         = "https://beta.rstudioconnect.com/connect/#/apps/7532/access"),
   list(image      = "images/use-cases-create-data-pipelines.png",
       title       = "Create Data Pipelines",
       href        = "use-cases/create-data-pipelines.html",
       description = "You can then reuse the automatically generated pin with subsequent reports to create additional datasets, visualizations or even models based on one or many pins previously generated pins. This can be useful to avoid recomputing similar reports multiple times and encouraging others to reuse your workflows.",
       app         = "https://beta.rstudioconnect.com/connect/#/apps/6565/access"),
   list(image       = "images/use-cases-update-shiny-apps.png",
       title       = "Update Plumber and Shiny Apps",
       href        = "use-cases/update-plumber-and-shiny-apps.html",
       description = "Last but not least, you can use pins with Plumber and Shiny apps to update them with ease by reusing datasets, models or visualizations generated with pins. For instance, we can create a web application that makes use of a data pipeline by converting the results into a reactive pin.",
       app         = "https://beta.rstudioconnect.com/connect/#/apps/6578/access")
))
```
