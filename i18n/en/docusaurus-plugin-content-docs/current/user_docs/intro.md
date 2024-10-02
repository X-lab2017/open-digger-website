---
sidebar_position: 1
title: Introduction
---

# OpenDigger

[![apache2](https://img.shields.io/badge/license-Apache%202-blue)](https://github.com/X-lab2017/open-digger/blob/master/LICENSE) [![](https://img.shields.io/badge/Data-OpenDigger-2097FF)](https://github.com/X-lab2017/open-digger) [![Node.js CI](https://github.com/X-lab2017/open-digger/actions/workflows/node_ci.yml/badge.svg?branch=master)](https://github.com/X-lab2017/open-digger/actions/workflows/node_ci.yml)

OpenDigger is an open source analysis platform for all open source data initiated by [X-lab](https://x-lab.info), this project aims to combine the wisdom of global developers to jointly analyze and insight into open source related data to help everyone better understand and participate in open source.

## Metrics Usage

All implemented metrics are open for anyone to use, the root URL of OpenDigger static data is `https://oss.open-digger.cn/{platform}/{org/login}/{repo}`, you can use `github` or `gitee` for platform, then just replace the `org/repo` or user `login` to get your data.

Feel free to use the data to construct your own data application and you can refer OpenDigger as your data source and welcome to use the following badge in your project to show the data source.

[![](https://img.shields.io/badge/Data-OpenDigger-2097FF)](https://github.com/X-lab2017/open-digger)

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
        <td class="centered-cell"><a href="metrics/global_openrank"><b>Repo Global OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_2/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/openrank.json">openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L25">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=openrank">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/global_openrank"><b>Developer Global OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/frank-zsy/openrank.json">openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L57">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=openrank&name=frank-zsy">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/community_openrank"><b>Repo Community OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/community_openrank.json">community_openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L94">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/abjMXBV">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/community_openrank"><b>Developer Community OpenRank</b></a></td>
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

## Use cases

For above data, there are some users or partners of OpenDigger right now.

### Applications

- [OpenLeaderboard](https://open-leaderboard.x-lab.info/): An open source leaderboard of open source world with labeled data.
- [HyperCRX](https://github.com/hypertrons/hypertrons-crx): An open source browser extension helps to look into GitHub users and repos, corresponding [paper](https://dl.acm.org/doi/10.1145/3643916.3644440).
- [OpenGalaxy](https://open-galaxy.x-lab.info/): An open source galaxy application, corresponding [paper](https://dl.acm.org/doi/10.1145/3643916.3644441).
- [Hacking Force China](https://opensource.win/): A ranking list of Chinese developers on GitHub cooperate with [SegmentFault](https://segmentfault.com/).
- [PolarDB Open Source Data Dashboard](https://polardbx.com/dataPanorama): Community dashboard cooperate with PolarDB.
- [OSGraph](https://osgraph.com/): An open source graph application collaborate with [TuGraph](https://www.tugraph.tech/).

### Open source reports

- China Open Source Report by [kaiyuanshe](https://kaiyuanshe.cn/).
  - [China Open Source Report 2021](https://kaiyuanshe.cn/document/china-os-report-2021/).
  - [China Open Source Report 2022](https://kaiyuanshe.cn/article/2022-China-Open-Source-Annual-Report).
  - [China Open Source Report 2023](https://kaiyuanshe.cn/article/Year-of-the-Dragon-Ceremony-2023-China-Open-Source-Annual-Report).
- China Open Source Blue Paper by [COPU](http://www.copu.org.cn/).
  - [China Open Source Blue Paper 2021](http://www.cosspu.org.cn/download/showdownload.php?id=26).
  - [China Open Source Blue Paper 2022](http://www.cosspu.org.cn/download/showdownload.php?id=27).
  - [China Open Source Blue Paper 2023](http://www.cosspu.org.cn/download/showdownload.php?id=25).
- [Big Data Open Source Heat Report](https://github.com/X-lab2017/open-digger/blob/master/cooperations/big_data_open_source_heat_report/开源大数据热力报告2022.pdf): A heat report of open source projects in big data area.

## Events

OpenDigger community also open to inter-community cooperation events, like contests or hackathons.

- [OpenSODA 2023](https://competition.atomgit.com/competitionInfo?id=bc6603e0b8bf11ed804e6b78b4426d45).
- [PaddlePaddle Hackathon 3rd](https://www.paddlepaddle.org.cn/PaddlePaddleHackathon-2022-6), the hackathon final reports are [here](https://github.com/X-lab2017/open-digger/tree/master/cooperations/paddle_hackathon_3rd).

## Communication

Welcome to join the WeChat group by scanning the QRCode and I will invite you into our WeChat group.

![qrcode](@site/static/img/wechat-qrcode.jpeg)

## License

We use [Apache-2.0 license](https://github.com/X-lab2017/open-digger/blob/master/LICENSE) for code part, please make sure abide by the licenses when using the project.
