# Gitee

## Data Source

OpenDigger has an official partnership with [Gitee](https://gitee.com/) and maintains the [GVP](https://gitee.com/gvp) project list internally. OpenDigger collects event logs for all GVP repositories using the [Gitee API](https://gitee.com/api/v5/swagger#/getV5ReposOwnerRepoEvents).

The code for data collection, cleaning, and database entry is not currently open sourced in the OpenDigger project and runs as a scheduled task daily to import data into the database.

All data from Gitee repositories will be exported as metric data. If you find that your project is not in the [export list](../metrics/metrics_usage_guide#export-range), please submit an issue in the OpenDigger repository, and we will add your repository to the collection list, you can also directly add an organization.

## Note

Since Gitee’s Issues and Pull Requests use different numbering systems, we have made additional adjustments to Gitee’s Issue numbers to be compatible with GitHub's purely numerical system. We treat Gitee's Issue numbers as base-36 numbers and convert them to base-10 for storage. Therefore, if you need to retrieve the Issue numbers, you can convert them back to base-36.

Below is an example of converting between base-10 and base-36 numbers in JavaScript:

```JavaScript
const rawIssueNumber = 'I1R';

// Convert base-36 to base-10
const issueNumber = parseInt(rawIssueNumber, 36);
console.log(issueNumber);   // 23391

// Convert base-10 to base-36
console.log(issueNumber.toString(36).toUpperCase());  // I1R
```
