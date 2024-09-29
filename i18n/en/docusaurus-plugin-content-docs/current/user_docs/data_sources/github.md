# GitHub

## Data Source

OpenDigger uses [GHArchive](https://www.gharchive.org/) as its data source, collecting global event log data from GitHub and using [ClickHouse](https://github.com/ClickHouse/ClickHouse) cloud service as the underlying data infrastructure.

The code for data collection, cleaning, and database entry is not currently open sourced in the OpenDigger project and runs as a scheduled task every hour to import data into the database.

## Missing Data

Due to potential service outages from GHArchive, there is data loss in OpenDigger's GitHub data source. The following time periods currently show missing data:

- 2016-10-21-18
- 2018-10-21-23
- 2018-10-22-0 ~ 2018-10-22-1
- 2019-05-08-12 ~ 2019-05-08-13
- 2019-09-12-8 ~ 2019-09-13-5
- 2020-03-05-22
- 2020-06-10-12 ~ 2020-06-10-21
- 2020-08-21-9 ~ 2020-08-23-15
- 2020-10-30-17
- 2021-08-25-17 ~ 2021-08-27-22
- 2021-09-11-9
- 2021-10-22-5 ~ 2021-10-22-22
- 2021-10-23-2 ~ 2021-10-23-22
- 2021-10-24-3 ~ 2021-10-24-22
- 2021-10-25-1 ~ 2021-10-25-22
- 2021-10-26-0 ~ 2021-10-29-17
- 2023-05-14-19
