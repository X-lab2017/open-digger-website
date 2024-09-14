---
sidebar_position: 1
title: Introduction
---

# OpenDigger

[![apache2](https://img.shields.io/badge/license-Apache%202-blue)](https://github.com/X-lab2017/open-digger/blob/master/LICENSE) [![](https://img.shields.io/badge/Data-OpenDigger-2097FF)](https://github.com/X-lab2017/open-digger) [![Node.js CI](https://github.com/X-lab2017/open-digger/actions/workflows/node_ci.yml/badge.svg?branch=master)](https://github.com/X-lab2017/open-digger/actions/workflows/node_ci.yml)

OpenDigger is an open source analysis platform for all open source data initiated by [X-lab](https://x-lab.info), this project aims to combine the wisdom of global developers to jointly analyze and insight into open source related data to help everyone better understand and participate in open source.

## Metrics or Indices Usage

All implemented metrics are open for anyone to use, you can find the data with following URLs, The root URL of OpenDigger static data is `https://oss.x-lab.info/open_digger/{platform}/{org/login}/{repo}`, you can use `github` or `gitee` for platform, then just replace the `org/repo` or user `login` to get your data.

Feel free to use the data to construct your own data application and you can refer OpenDigger as your data source and welcome to use the following badge in your project to show the data source.

[![](https://img.shields.io/badge/Data-OpenDigger-2097FF)](https://github.com/X-lab2017/open-digger)

### For repos

<!-- OPENRANK -->
<details id="elevatedbtnEN">
  <summary>OpenRank</summary>
  <table>
    <thead>
      <tr>
        <th width="10%">Type</th>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell">Index</td>
        <td class="centered-cell">OpenRank</td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_2/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/openrank.json">openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L21">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=openrank">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Network</td>
        <td class="centered-cell">Project OpenRank</td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/project_openrank_detail/2022-12.json">project_openrank_detail/2022-12.json</a></td>
        <td class="centered-cell">ㅤ</td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/abjMXBV">Demo</a></td>
      </tr>
    </tbody>
  </table>
</details>


<!-- ACTIVITY -->
<details id="elevatedbtnEN">
  <summary>Activity</summary>
  <table>
    <thead>
      <tr>
        <th width="10%">Type</th>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowSpan="1">Index</td>
        <td class="centered-cell"><a href="/en/docs/user_docs/metrics/activity"><b>Activity</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_1/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/activity.json">activity.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L109">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=activity">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowSpan="1">Metric</td>
        <td class="centered-cell">Activity Details</td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/issues/1186">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/activity_details.json">activity_details.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/0432ecbd9b9d75d36b249fb5eb2b101d16a414be/src/metrics/indices.ts#L112">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/tyn1998/pen/KKGxVrm">Demo</a></td>
      </tr>
    </tbody>
  </table>
</details>


<!-- ATTENTION -->
<details id="elevatedbtnEN">
  <summary>Attention</summary>
  <table>
    <thead>
      <tr>
        <th width="10%">Type</th>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell">Index</td>
        <td class="centered-cell">Attention</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/attention.json">attention.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L235">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/MWBdpNg?type=attention">Demo</a></td>
        </tr>
    </tbody>
  </table>
</details>


<!-- GENERAL -->
<details id="elevatedbtnEN">
  <summary>General</summary>
  <table>
    <thead>
      <tr>
        <th width="10%">Type</th>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowspan="2">Metric</td>
        <td class="centered-cell">Stars</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/stars.json">stars.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/metrics.ts#L15">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/MWBdpNg?type=stars">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="/en/docs/user_docs/metrics/technical_fork"><b>Technical Fork</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-technical-fork/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/technical_fork.json">technical_fork.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L12">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/MWBdpNg?type=technical_fork">Demo</a></td>
      </tr>
    </tbody>
  </table>
</details>


<!-- DEVELOPERS -->
<details id="elevatedbtnEN">
  <summary>Developers</summary>
  <table>
    <thead>
      <tr>
        <th width="10%">Type</th>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowSpan="5">Metric</td>
        <td class="centered-cell">Participants</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/participants.json">participants.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/metrics.ts#L89">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowSpan="2"><a href="/en/docs/user_docs/metrics/new_contributors"><b>New contributors</b></a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://chaoss.community/metric-new-contributors/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/new_contributors.json">new_contributors.json</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L862">Link</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/new_contributors_detail.json">new_contributors_detail.json</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="/en/docs/user_docs/metrics/inactive_contributors"><b>Inactive contributors</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-inactive-contributors/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/inactive_contributors.json">inactive_contributors.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L965">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="/en/docs/user_docs/metrics/activity_dates_and_times"><b>Activity dates and times</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-activity-dates-and-times/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/active_dates_and_times.json">active_dates_and_times.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L1050">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/jOpQdZZ">Demo</a></td>
      </tr>
    </tbody>
  </table>
</details>


<!-- CODE CHANGE LINES -->
<details id="elevatedbtnEN">
  <summary>Code Change Lines</summary>
  <table>
    <thead>
      <tr>
        <th width="10%">Type</th>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowSpan="3">Metric</td>
        <td class="centered-cell" rowSpan="3">Code Change Lines</td>
        <td class="centered-cell" rowspan="3"><a href="https://chaoss.community/metric-code-changes-lines/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/code_change_lines_add.json">code_change_lines_add.json</a></td>
        <td class="centered-cell" rowspan="3"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L94">Link</a></td>
        <td class="centered-cell" rowspan="3"><a href="https://codepen.io/frank-zsy/pen/dyjByKL">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/code_change_lines_remove.json">code_change_lines_remove.json</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/code_change_lines_sum.json">code_change_lines_sum.json</a></td>
      </tr>
    </tbody>
  </table>
</details>


<!-- BUS FACTOR -->
<details id="elevatedbtnEN">
  <summary>Bus Factor</summary>
  <table>
    <thead>
      <tr>
        <th width="10%">Type</th>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowSpan="2">Metric</td>
        <td class="centered-cell" rowSpan="2"><a href="/en/docs/user_docs/metrics/bus_factor"><b>Bus factor</b></a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://chaoss.community/metric-bus-factor/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/bus_factor.json">bus_factor.json</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L780">Link</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=bus_factor">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/bus_factor_detail.json">bus_factor_detail.json</a></td>
      </tr>
    </tbody>
  </table>
</details>


<!-- ISSUES -->
<details id="elevatedbtnEN">
  <summary>Issues</summary>
  <table>
    <thead>
      <tr>
        <th width="10%">Type</th>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowSpan="6">Metric</td>
        <td class="centered-cell">Issues new</td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issues-new/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/issues_new.json">issues_new.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L146">Link</a></td>
        <td class="centered-cell" rowSpan="3"><a href="https://codepen.io/frank-zsy/pen/mdjaZMw">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Issues closed</td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issues-closed/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/issues_closed.json">issues_closed.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L223">Link</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Issue comments</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/issue_comments.json">issue_comments.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/metrics.ts#L52">Link</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="/en/docs/user_docs/metrics/issue_response_time"><b>Issue response time</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-response-time/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/issue_response_time.json">issue_response_time.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L413">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_response_time">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="/en/docs/user_docs/metrics/issue_resolution_duration"><b>Issue resolution duration</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-resolution-duration/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/issue_resolution_duration.json">issue_resolution_duration.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L338">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_resolution_duration">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Issue age</td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-age/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/issue_age.json">issue_age.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L492">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_age">Demo</a></td>
      </tr>
    </tbody>
  </table>
</details>


<!-- CHANGE REQUESTS -->
<details id="elevatedbtnEN">
  <summary>Change Requests</summary>
  <table>
    <thead>
      <tr>
        <th width="10%">Type</th>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowSpan="6">Metric</td>
        <td class="centered-cell">Change requests (Open PR)</td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-change-requests/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/change_requests.json">change_requests.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L697">Link</a></td>
        <td class="centered-cell" rowSpan="3"><a href="https://codepen.io/frank-zsy/pen/bGjPGxw">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Change requests accepted (Merged PR)</td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-change-requests-accepted/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/change_requests_accepted.json">change_requests_accepted.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L497">Link</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Change request reviews</td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-change-request-reviews/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/change_requests_reviews.json">change_requests_reviews.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L734">Link</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Change request response time</td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-response-time/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/change_request_response_time.json">change_request_response_time.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L415">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_response_time">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Change request resolution duration</td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-resolution-duration/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/change_request_resolution_duration.json">change_request_resolution_duration.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L341">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_resolution_duration">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Change request age</td>
        <td class="centered-cell"><a href="https://chaoss.community/metric-issue-age/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/change_request_age.json">change_request_age.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L494">Link</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_age">Demo</a></td>
      </tr>
    </tbody>
  </table>
</details>


<!-- NETWORK -->
<details id="elevatedbtnEN">
  <summary>Network</summary>
  <table>
    <thead>
      <tr>
        <th width="10%">Type</th>
        <th width="30%">Name</th>
        <th width="10%">From</th>
        <th width="40%">Example</th>
        <th width="10%">Code</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowSpan="2">Network</td>
        <td class="centered-cell">Developer Network</td>
        <td class="centered-cell" rowSpan="2"><a href="https://blog.frankzhao.cn/github_activity_with_wpr/">X-Lab</a></td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/developer_network.json">developer_network.json</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/cron/tasks/network_export.ts#L126">Link</a></td>
        <td class="centered-cell" rowSpan="1"><a href="https://codepen.io/frank-zsy/pen/NWBVjpV?type=developer_network">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell">Repo Network</td>
        <td class="centered-cell"><a href="https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/repo_network.json">repo_network.json</a></td>
        <td class="centered-cell" rowSpan="1"><a href="https://codepen.io/frank-zsy/pen/NWBVjpV?type=repo_network">Demo</a></td>
      </tr>
    </tbody>
  </table>
</details>

### For users

<table>
  <thead>
    <tr>
      <th>Type</th><th>Name</th><th>From</th><th>Example</th><th>Code</th><th>CodePen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan="2">Index</td>
      <td>OpenRank</td>
      <td><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3">X-lab</a ></td>
      <td><a href="https://oss.x-lab.info/open_digger/github/frank-zsy/openrank.json">openrank.json</a></td>
      <td><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L59">Link</a></td>
      <td><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=openrank&name=frank-zsy">Demo</a></td>
    </tr>
    <tr>
      <td>Activity</td>
      <td><a href="https://blog.frankzhao.cn/how_to_measure_open_source_1">X-lab</a></td>
      <td><a href="https://oss.x-lab.info/open_digger/github/frank-zsy/activity.json">activity.json</a></td>
      <td><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L174">Link</a ></td>
      <td><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=activity&name=frank-zsy">Demo</a></td>
    </tr>
    <tr>
      <td rowSpan="2">Network</td>
      <td>Developer network</td>
      <td><a href="https://blog.frankzhao.cn/github_activity_with_wpr/">X-lab</a></td>
      <td><a href="https://oss.x-lab.info/open_digger/github/frank-zsy/developer_network.json">developer_network.json</a></td>
      <td><a href="https://github.com/X-lab2017/open-digger/blob/master/src/cron/tasks/network_export.ts#L63">Link</a></td>
      <td><a href="https://codepen.io/frank-zsy/pen/NWBVjpV?type=developer_network&name=frank-zsy">Demo</a></td>
    </tr>
    <tr>
      <td>Repo network</td>
      <td><a href="https://blog.frankzhao.cn/github_activity_with_wpr/">X-lab</a></td>
      <td><a href="https://oss.x-lab.info/open_digger/github/frank-zsy/repo_network.json">repo_network.json</a></td>
      <td><a href="https://github.com/X-lab2017/open-digger/blob/master/src/cron/tasks/network_export.ts#L63">Link</a></td>
      <td><a href="https://codepen.io/frank-zsy/pen/NWBVjpV?type=repo_network&name=frank-zsy">Demo</a></td>
    </tr>
  </tbody>
</table>

## Users

For above data, there are some users of OpenDigger right now.

### Applications

- [OpenLeaderboard](https://open-leaderboard.x-lab.info/): A leaderboard of GitHub world with labeled data.
- [HyperCRX](https://github.com/hypertrons/hypertrons-crx): A browser plugin helps to look into GitHub users and repos.
- [Mulan Dashboard](http://dataease.nzcer.cn/link/1VxPsUCX): A dashboard for [Mulan community](https://portal.mulanos.cn/).
- [Hacking Force China](https://opensource.win/): A ranking list of Chinese developers on GitHub cooperate with [SegmentFault](https://segmentfault.com/).

### Open source reports

- [China Open Source Report 2021](https://kaiyuanshe.cn/document/china-os-report-2021/): Most comprehensive open source report in China by [kaiyuanshe](https://kaiyuanshe.cn/).
- [China Open Source Blue Paper 2022](http://www.copu.org.cn/new/308): A blue paper of Chinese open source development by [COPU](http://www.copu.org.cn/).
- [Big Data Open Source Heat Report](https://github.com/X-lab2017/open-digger/blob/master/cooperations/big_data_open_source_heat_report/开源大数据热力报告2022.pdf): A heat report of open source projects in big data area.


## Events

OpenDigger community also open to inter-community cooperation events, like contests or hackathons.

- [OpenSODA 2023](https://competition.atomgit.com/competitionInfo?id=bc6603e0b8bf11ed804e6b78b4426d45)。
- [PaddlePaddle Hackathon 3rd](https://www.paddlepaddle.org.cn/PaddlePaddleHackathon-2022-6), the hackathon final reports are [here](https://github.com/X-lab2017/open-digger/tree/master/cooperations/paddle_hackathon_3rd).

## Data

### GitHub Event Log

We use [GHArchive](https://www.gharchive.org/) as our data source for GitHub event logs and the data service is provided by [clickhouse](https://clickhouse.tech/) cluster cloud service. For data details, please check the [data](/docs/user_docs/intro) docs.

### Labeled Data

We are collecting labeled data for more deeper analysis. You can view the corresponding data in the `labeled_data` folder. For more details, please check [labeled_data](/docs/user_docs/intro) docs.

### Sample Data Usage

OpenDigger provides ClickHouse sample data and Jupyter notebook image to run OpenDigger in local environment, please refer to [sample data doc](/docs/user_docs/intro).

## Communication

Welcome to join the WeChat group by scanning the QRCode and I will invite you into our WeChat group.

![qrcode](@site/static/img/wechat-qrcode.jpeg)

## License

We use [Apache-2.0 license](https://github.com/X-lab2017/open-digger/blob/master/LICENSE) for code part, please make sure abide by the licenses when using the project.
