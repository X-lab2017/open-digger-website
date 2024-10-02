# Metrics Usage Guide

## Basic Usage

All implemented metrics are open for anyone to use, the root URL of OpenDigger static data is

`https://oss.open-digger.cn/{platform}/{org/login}/{repo}`

You can use `github` or `gitee` for platform, then just replace the `org/repo` or user `login` to get your data.

Below is a complete list of metric data, and you can try the data on the [Playground](playground) page, or refer to the corresponding documentation page for specific data.

<!-- OPENRANK -->
<details id="elevatedbtn" open>
  <summary>OpenRank</summary>
  <table>
    <thead>
      <tr>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell"><a href="global_openrank"><b>Repo Global OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_2/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/openrank.json">openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L25">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=openrank">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="global_openrank"><b>Developer Global OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/frank-zsy/openrank.json">openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L57">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=openrank&name=frank-zsy">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="community_openrank"><b>Repo Community OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/community_openrank.json">community_openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L94">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/abjMXBV">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="community_openrank"><b>Developer Community OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3/">X-lab</a></td>
        <td class="centered-cell">-</td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L176">Link</a></td>
        <td class="centered-cell">-</td>
      </tr>
    </tbody>
  </table>
</details>

<!-- STATISTICS -->
<details id="elevatedbtn">
  <summary>Statistics</summary>
  <table>
    <thead>
      <tr>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowspan="2"><a href="metrics/activity"><b>Repo Activity</b></a></td>
        <td class="centered-cell" rowspan="2"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_1/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/activity.json">activity.json</a></td>
        <td class="centered-cell" rowspan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L277">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=activity">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/activity_details.json">activity_details.json</a></td>
        <td class="centered-cell"><a href="https://codepen.io/tyn1998/pen/KKGxVrm">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowspan="2"><a href="metrics/activity"><b>Developer Activity</b></a></td>
        <td class="centered-cell" rowspan="2"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_1/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/frank-zsy/activity.json">activity.json</a></td>
        <td class="centered-cell" rowspan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L338">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=activity">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/frank-zsy/activity_details.json">activity_details.json</a></td>
        <td class="centered-cell">-</td>
      </tr>
      <tr>
        <td class="centered-cell">Stars</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/stars.json">stars.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/metrics.ts#L18">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/MWBdpNg?type=stars">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/technical_fork"><b>Technical Fork</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-technical-fork/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/technical_fork.json">technical_fork.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L12">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/MWBdpNg?type=technical_fork">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Attention</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/attention.json">attention.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L394">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/MWBdpNg?type=attention">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/activity_dates_and_times"><b>Activity Dates and Times</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-activity-dates-and-times/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/active_dates_and_times.json">active_dates_and_times.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L960">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/jOpQdZZ">Demo</a></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- DEVELOPERS -->
<details id="elevatedbtn">
  <summary>Developers</summary>
  <table>
    <thead>
      <tr>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowSpan="2"><a href="metrics/new_contributors"><b>New Contributors</b></a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://chaoss.community/metric-new-contributors/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/new_contributors.json">new_contributors.json</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L747">Link</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/new_contributors_detail.json">new_contributors_detail.json</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowSpan="2"><a href="metrics/contributors"><b>Contributors</b></a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://chaoss.community/metric-contributors/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/contributors.json">contributors.json</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L835">Link</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/contributors_detail.json">contributors_detail.json</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/inactive_contributors"><b>Inactive Contributors</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-inactive-contributors/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/inactive_contributors.json">inactive_contributors.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L880">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Participants</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/participants.json">participants.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/metrics.ts#L80">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowSpan="2"><a href="metrics/contributor_absence_factor"><b>Contributor Absence Factor</b></a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://chaoss.community/kb/metric-contributor-absence-factor/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/bus_factor.json">bus_factor.json</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L672">Link</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=bus_factor">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/bus_factor_detail.json">bus_factor_detail.json</a></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- ISSUES -->
<details id="elevatedbtn">
  <summary>Issues</summary>
  <table>
    <thead>
      <tr>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell"><a href="metrics/issue_new"><b>Issues new</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issues-new/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issues_new.json">issues_new.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L128">Link</a></td>
        <td class="centered-cell" rowSpan="3"><a href="https://codepen.io/frank-zsy/pen/mdjaZMw">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/issue_closed"><b>Issues Closed</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issues-closed/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issues_closed.json">issues_closed.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L193">Link</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Issue Comments</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_comments.json">issue_comments.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/metrics.ts#L49">Link</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/issue_response_time"><b>Issue Response Time</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-response-time/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_response_time.json">issue_response_time.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L357">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_response_time">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/issue_resolution_duration"><b>Issue Resolution Duration</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-resolution-duration/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_resolution_duration.json">issue_resolution_duration.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L292">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_resolution_duration">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/issue_age"><b>Issue Age</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-age/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_age.json">issue_age.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L426">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_age">Demo</a></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- CHANGE REQUESTS -->
<details id="elevatedbtn">
  <summary>Change Requests</summary>
  <table>
    <thead>
      <tr>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests"><b>Change Requests</b></a></td>
        <td class="centered-cell"><a href="链接https://chaoss.community/metric-change-requests/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests.json">change_requests.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L697">Link</a></td>
        <td class="centered-cell" rowSpan="3"><a href="https://codepen.io/frank-zsy/pen/bGjPGxw">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests_accepted"><b>Change Requests Accepted</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-change-requests-accepted/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests_accepted.json">change_requests_accepted.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L497">Link</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests_reviews"><b>Change Requests Reviews</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-change-request-reviews/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests_reviews.json">change_requests_reviews.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L734">Link</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests_response_time"><b>Change Request Response Time</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-response-time/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_response_time.json">change_request_response_time.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L415">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_response_time">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests_resolution_duration"><b>Change Request Resolution Duration</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-resolution-duration/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_resolution_duration.json">change_request_resolution_duration.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L341">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_resolution_duration">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests_age"><b>Change Request Age</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-age/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_age.json">change_request_age.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L494">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_age">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowSpan="3"><a href="metrics/code_changes_lines"><b>Code Change Lines</b></a></td>
        <td class="centered-cell" rowspan="3"><a href="https://chaoss.community/metric-code-changes-lines/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/code_change_lines_add.json">code_change_lines_add.json</a></td>
        <td class="centered-cell" rowspan="3"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L94">Link</a></td>
        <td class="centered-cell" rowspan="3"><a href="https://codepen.io/frank-zsy/pen/dyjByKL">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/code_change_lines_remove.json">code_change_lines_remove.json</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/code_change_lines_sum.json">code_change_lines_sum.json</a></td>
      </tr>
    </tbody>
  </table>
</details>

## Data Structure

The exported metrics file has a basic data structure as a JSON object, with keys representing monthly, quarterly, and yearly values corresponding to the metric data.

- Monthly keys are in the format `YYYY-MM`.
- Quarterly keys are in the format `YYYYQX`, where `X` ranges from 1 to 4, with `Q1` covering January to March of that year, `Q2` April to June, and so on.
- Yearly keys are in the format `YYYY`.

All keys are at the top-level structure, arranged in the order of year, month, and quarter, with each type sorted chronologically.

For example, for the [OpenDigger](https://github.com/X-lab2017/open-digger) repository, its global OpenRank data is:

```json
{
  "2020":34.81,"2021":55.59,"2022":92.97,...        // Yearly data
  "2020-08":4.91,"2020-09":5.17,"2020-10":5.1,...   // Monthly data
  "2020Q3":10.08,"2020Q4":24.73,"2021Q1":22.18,...  // Quarterly data
}
```

> Due to the existence of [missing data](../data_sources/github#missing-data) in OpenDigger's GitHub data source, if the key `2021-10-raw` exists, it represents the raw value of the metric data. To ensure temporal continuity in the metric data, the corresponding `2021-10` metric value is calculated as an interpolation result based on the values from two months before and after. For specific code, please refer to [here](https://github.com/X-lab2017/open-digger/blob/master/src/cron/tasks/monthly_export.ts#L176).

## Export Range

OpenDigger does not export metrics data for all repositories and users. The specific exported repositories and user lists can be found in [`repo_list.csv`](https://oss.open-digger.cn/repo_list.csv) and [`user_list.csv`](https://oss.open-digger.cn/user_list.csv), where:

- The structure of `repo_list.csv` rows is `id,platform,repo_name`, meaning database ID, platform name, and full repository name separated by a comma.
- The structure of `user_list.csv` rows is `id,platform,login`, meaning database ID, platform name, and user login name separated by a comma.

The database ID is a unique ID on the corresponding platform, consistent with the data of each platform; ***the platform name and database ID uniquely identify a repository or user***.

For OpenDigger's export strategy, please refer to the export table section in the developer documentation.

> The search components for various repositories and users on the OpenDigger official webpage use these two files for local browsing.

## Metadata

For the exported repositories and users, OpenDigger also exports a metadata file available at:

Repository: `https://oss.open-digger.cn/{platform}/{org/login}/meta.json` (example: [OpenDigger metadata](https://oss.open-digger.cn/github/X-lab2017/open-digger/meta.json))

User: `https://oss.open-digger.cn/{platform}/{org/login}/{repo}/meta.json` (example: [User metadata](https://oss.open-digger.cn/github/frank-zsy/meta.json))

The metadata includes the following fields:

- `updatedAt`: Data update timestamp.
- `type`: Repository or user type, values are `repo` or `user`.
- `id`: Unique ID of the repository or user in the platform's database.
- `labels`: Tags associated with the repository or user in OpenDigger. For details, please refer to the relevant documentation on tag data.

For example, for the [OpenDigger](https://github.com/X-lab2017/open-digger) repository, its metadata is:

```json
{
  "updatedAt": 1725221391661,     // Update timestamp
  "type": "repo",                 // Metadata type
  "id": 288431943,                // Unique ID of the repository on GitHub
  "labels": [                     // Tags associated with the repository
    {
      "id": ":communities/mulan", // Mulan Community
      "name": "Mulan",
      "type": "Community"
    },
    {
      "id": ":communities/xlab",  // X-lab Community
      "name": "X-lab",
      "type": "Community"
    },
    {
      "id": ":communities/xlab/open_digger",  // OpenDigger Project
      "name": "OpenDigger",
      "type": "Project"
    },
    {
      "id": ":regions/CN",        // China Project
      "name": "China",
      "type": "Region"
    }
  ]
}
```

## FAQ

#### Q: Does OpenDigger's metric data support integration into other applications?

A: Yes, OpenDigger's metric data is open for downstream application integration. OpenDigger adds `Access-Control-Allow-Origin: *` to the response header of exported static data, ensuring cross-origin usage. If your website has strict domain requirements for response headers, you may need to implement a service for data forwarding. In fact, OpenDigger data is already used in many downstream applications such as HyperCRX, OpenLeaderboard, OSGraph, etc.

#### Q: Do applications need to implement their own caching strategy for metric data?

A: Browser applications can directly use the data without caching. OpenDigger includes the `Expires` field in the response header for metric data, allowing browsers to determine that they can retrieve data directly from disk cache until the 2nd of the next month after a monthly update, avoiding redundant remote data requests.

#### Q: What might cause a metric file to be unavailable when accessed?

A: If a metric file is unavailable, it may be due to the following reasons:
- The repository or user is not within the export range. You can check metadata to determine if they are included in the export range; if metadata exists, then the data has been exported.
- The repository does not have corresponding events. For example, some Apache projects do not use GitHub Issues (e.g., [Flink](https://github.com/apache/flink)), and thus relevant metric files may not exist.

#### Q: Why might some specific months or quarters be missing keys in the metric file?

A: If a repository or user does not have certain types of events during a specific period, the corresponding keys in the metrics data will be absent. The metrics data will not contain `0` values, leading to potential discontinuities in the keys.
