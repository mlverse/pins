---
id: too-big-to-pin
title: Too Big To Pin
---

An important factor in determining whether or not to use a pin is the size of the data or object in use. Pins, in their simplest form, are objects transmitted through web requests. One way to determine if an object is too big to be a pin is by considering how long a web request to retrieve the pin will take. For example, if an object is 100 MB and the internet connection speed is 25 MB/s, the *fastest* the `pin_get` code could return would be 4 seconds. In many cases, it may take longer to return this data. Creating the pin will also take substantially longer because most networks have a slower upload speed than download speed.

You can see an object's size in R using code like:

```r
format(object.size(data_frame), units = "MB")
```

*As a general rule of thumb, you should not use pins for objects that are larger than 500 MB*.

## Alternatives to pins for large objects

If your object is too big to pin there are a few options:

1. You could write your data back to a database. It is quite common for data science teams to create intermediate "feature stores" which are simply tables in a database containing processed data. The odbc package includes a `dbWriteTable` function to help in these cases.

2. If you are using Spark as a processing engine, you can write your processed data using the [sparklyr package](https://spark.rstudio.com/reference/) which has numerous `spark_write_` functions. These functions can write to a file system (`file://`), Hadoop (`hdfs://`), or Amazon S3 (`s3a://`). A benefit of using the `spark_write_` functions is that the write operation will typically happen in parallel. Some formats, such as parquet, support writing data by partition which can speed up subsequent analysis that begin by reading in the partitioned data.

3. If you are working with larger data but are not using Spark, an efficient and flexible read/write option is provided in the [arrow](https://arrow.apache.org/docs/r/index.html) package. This [vignette](https://arrow.apache.org/docs/r/articles/dataset.html) contains relevant details. The package supports parquet, csv, and other common data formats and enables portioned writing and dplyr-based querying.

Pins are incredibly flexible and convenient. They are easy to consume, often through a single URL, and pins typically have straightforward access controls. However, pins are not a substitute for a data engineering pipeline. It is a good idea to check your object size before using a pin.

