# OpenDigger 简介

[![apache2](https://img.shields.io/badge/license-Apache%202-blue)](https://github.com/X-lab2017/open-digger/blob/master/LICENSE) [![](https://img.shields.io/badge/Data-OpenDigger-2097FF)](https://github.com/X-lab2017/open-digger) [![Node.js CI](https://github.com/X-lab2017/open-digger/actions/workflows/node_ci.yml/badge.svg?branch=master)](https://github.com/X-lab2017/open-digger/actions/workflows/node_ci.yml)

[OpenDigger](https://github.com/X-lab2017/open-digger) 是由 X-lab 发起的一个开源数据分析与指标生产开源项目，这个项目旨在凝聚全球开发者的智慧共同对开源相关数据进行分析统计，以使开发者可以更好的理解和参与开源。

## 指标使用

OpenDigger 实现的所有指标对所有人开放使用, OpenDigger 的静态数据根链接为 `https://oss.open-digger.cn/{platform}/{org/login}/{repo}/`，其中 `platform` 支持 `github` 和 `gitee`，只需要替换 `org/repo` 或用户 `login` 即可获取数据。

您可随意使用这些数据来构建自己的数据应用程序，您可以将 OpenDigger 作为您的数据源，并且欢迎在您的项目中使用以下徽章来展示数据源。

[![](https://img.shields.io/badge/Data-OpenDigger-2097FF)](https://github.com/X-lab2017/open-digger)

<!-- OPENRANK -->
<details id="elevatedbtn" open>
  <summary>OpenRank</summary>
  <table>
    <thead>
      <tr>
        <th width="30%">名称</th>
        <th width="10%">来源</th>
        <th width="40%">示例</th>
        <th width="10%">代码</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell"><a href="metrics/global_openrank"><b>仓库全域 OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_2/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/openrank.json">openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L25">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=openrank">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/global_openrank"><b>开发者全域 OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/frank-zsy/openrank.json">openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L57">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=openrank&name=frank-zsy">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/community_openrank"><b>仓库社区 OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/community_openrank.json">community_openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L94">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/abjMXBV">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/community_openrank"><b>开发者社区 OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3/">X-lab</a></td>
        <td class="centered-cell">-</td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L176">链接</a></td>
        <td class="centered-cell">-</td>
      </tr>
    </tbody>
  </table>
</details>

<!-- STATISTICS -->
<details id="elevatedbtn">
  <summary>统计指标</summary>
  <table>
    <thead>
      <tr>
        <th width="30%">名称</th>
        <th width="10%">来源</th>
        <th width="40%">示例</th>
        <th width="10%">代码</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowspan="2"><a href="metrics/activity"><b>仓库活跃度</b></a></td>
        <td class="centered-cell" rowspan="2"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_1/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/activity.json">activity.json</a></td>
        <td class="centered-cell" rowspan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L277">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=activity">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/activity_details.json">activity_details.json</a></td>
        <td class="centered-cell"><a href="https://codepen.io/tyn1998/pen/KKGxVrm">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowspan="2"><a href="metrics/activity"><b>开发者活跃度</b></a></td>
        <td class="centered-cell" rowspan="2"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_1/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/frank-zsy/activity.json">activity.json</a></td>
        <td class="centered-cell" rowspan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L338">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=activity">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/frank-zsy/activity_details.json">activity_details.json</a></td>
        <td class="centered-cell">-</td>
      </tr>
      <tr>
        <td class="centered-cell">星标数</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/stars.json">stars.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/metrics.ts#L18">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/MWBdpNg?type=stars">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/technical_fork"><b>技术分叉</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-technical-fork/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/technical_fork.json">technical_fork.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L12">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/MWBdpNg?type=technical_fork">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell">关注度</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/attention.json">attention.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L394">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/MWBdpNg?type=attention">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/activity_dates_and_times"><b>活跃日期和时间</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-activity-dates-and-times/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/active_dates_and_times.json">active_dates_and_times.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L960">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/jOpQdZZ">Demo</a></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- DEVELOPERS -->
<details id="elevatedbtn">
  <summary>开发者</summary>
  <table>
    <thead>
      <tr>
        <th width="30%">名称</th>
        <th width="10%">来源</th>
        <th width="40%">示例</th>
        <th width="10%">代码</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell" rowSpan="2"><a href="metrics/new_contributors"><b>新贡献者</b></a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://chaoss.community/zh-CN/metric-new-contributors/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/new_contributors.json">new_contributors.json</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L747">链接</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/new_contributors_detail.json">new_contributors_detail.json</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowSpan="2"><a href="metrics/contributors"><b>贡献者</b></a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://chaoss.community/zh-CN/metric-contributors/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/contributors.json">contributors.json</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L835">链接</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/contributors_detail.json">contributors_detail.json</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/inactive_contributors"><b>不活跃的贡献者</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-inactive-contributors/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/inactive_contributors.json">inactive_contributors.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L880">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell">参与者</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/participants.json">participants.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/metrics.ts#L80">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowSpan="2"><a href="metrics/contributor_absence_factor"><b>贡献者缺席因素</b></a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://chaoss.community/kb/metric-contributor-absence-factor/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/bus_factor.json">bus_factor.json</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L672">链接</a></td>
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
  <summary>问题</summary>
  <table>
    <thead>
      <tr>
        <th width="30%">名称</th>
        <th width="10%">来源</th>
        <th width="40%">示例</th>
        <th width="10%">代码</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell"><a href="metrics/issue_new"><b>新问题</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issues-new/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issues_new.json">issues_new.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L128">链接</a></td>
        <td class="centered-cell" rowSpan="3"><a href="https://codepen.io/frank-zsy/pen/mdjaZMw">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/issue_closed"><b>已关闭的问题</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issues-closed/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issues_closed.json">issues_closed.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L193">链接</a></td>
      </tr>
      <tr>
        <td class="centered-cell">问题评论</td>
        <td class="centered-cell">X-lab</td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_comments.json">issue_comments.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/metrics.ts#L49">链接</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/issue_response_time"><b>问题响应时间</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issue-response-time/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_response_time.json">issue_response_time.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L357">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_response_time">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/issue_resolution_duration"><b>问题解决持续时间</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issue-resolution-duration/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_resolution_duration.json">issue_resolution_duration.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L292">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_resolution_duration">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/issue_age"><b>问题年龄</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issue-age/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_age.json">issue_age.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L426">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_age">Demo</a></td>
      </tr>
    </tbody>
  </table>
</details>

<!-- CHANGE REQUESTS -->
<details id="elevatedbtn">
  <summary>变更请求</summary>
  <table>
    <thead>
      <tr>
        <th width="30%">名称</th>
        <th width="10%">来源</th>
        <th width="40%">示例</th>
        <th width="10%">代码</th>
        <th>CodePen</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests"><b>变更请求</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-change-requests/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests.json">change_requests.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L697">链接</a></td>
        <td class="centered-cell" rowSpan="3"><a href="https://codepen.io/frank-zsy/pen/bGjPGxw">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests_accepted"><b>接受的变更请求</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-change-requests-accepted/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests_accepted.json">change_requests_accepted.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L497">链接</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests_reviews"><b>变更请求审查</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-change-request-reviews/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests_reviews.json">change_requests_reviews.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L734">链接</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests_response_time"><b>变更请求响应时间</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issue-response-time/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_response_time.json">change_request_response_time.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L415">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_response_time">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests_resolution_duration"><b>变更请求解决持续时间</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issue-resolution-duration/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_resolution_duration.json">change_request_resolution_duration.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L341">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_resolution_duration">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="metrics/change_requests_age"><b>变更请求年龄</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issue-age/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_age.json">change_request_age.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L494">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_age">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowSpan="3"><a href="metrics/code_changes_lines"><b>代码更改行</b></a></td>
        <td class="centered-cell" rowspan="3"><a href="https://chaoss.community/zh-CN/metric-code-changes-lines/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/code_change_lines_add.json">code_change_lines_add.json</a></td>
        <td class="centered-cell" rowspan="3"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L94">链接</a></td>
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


## 用户案例

对于以上数据，OpenDigger 目前有一些用户与合作伙伴。

### 应用

- [OpenLeaderboard](https://open-leaderboard.x-lab.info/)：带有标签数据的开源项目、开发者、企业等排行榜
- [HyperCRX](https://github.com/hypertrons/hypertrons-crx)：对查看 GitHub 用户和仓库有帮助的浏览器插件，对应[论文](https://dl.acm.org/doi/10.1145/3643916.3644440)
- [OpenGalaxy](https://open-galaxy.x-lab.info/)：开源全景星系项目，对应[论文](https://dl.acm.org/doi/10.1145/3643916.3644441)
- [中国开源码力榜](https://opensource.win/)：与[思否](https://segmentfault.com/)合作发布的 GitHub 中国开发者排行榜
- [PolarDB 开源社区洞察大屏](https://polardbx.com/dataPanorama)：与 PolarDB 社区合作的开源洞察大屏
- [OSGraph](https://osgraph.com/)：与 [TuGraph](https://www.tugraph.tech/) 合作发布的开源行为图谱项目

### 开源报告

- 中国开源年度报告：由[开源社](https://kaiyuanshe.cn/)发布的中国开源年度报告
  - [2021 中国开源年度报告](https://kaiyuanshe.cn/document/china-os-report-2021/)
  - [2022 中国开源年度报告](https://kaiyuanshe.cn/article/2022-China-Open-Source-Annual-Report)
  - [2023 中国开源年度报告](https://kaiyuanshe.cn/article/Year-of-the-Dragon-Ceremony-2023-China-Open-Source-Annual-Report)
- 中国开源发展蓝皮书：由 [COPU](http://www.copu.org.cn/) 发布的中国开源年度报告
  - [2021 中国开源发展蓝皮书](http://www.cosspu.org.cn/download/showdownload.php?id=26)
  - [2022 中国开源发展蓝皮书](http://www.cosspu.org.cn/download/showdownload.php?id=27)
  - [2023 中国开源发展蓝皮书](http://www.cosspu.org.cn/download/showdownload.php?id=25)
- [开源大数据热力报告](https://github.com/X-lab2017/open-digger/blob/master/cooperations/big_data_open_source_heat_report/开源大数据热力报告2022.pdf)：大数据领域内开源项目热力报告

## 活动

OpenDigger 社区也主办或参加社区间的合作活动，如竞赛或黑客松。

- [开放原子开源大赛 OpenDigger 开源软件生态数据分析挖掘平台挑战赛](https://competition.atomgit.com/competitionInfo?id=bc6603e0b8bf11ed804e6b78b4426d45)。
- [第三届 PaddlePaddle 黑客松](https://www.paddlepaddle.org.cn/PaddlePaddleHackathon-2022-6)，黑客马拉松的最终报告在[这里](https://github.com/X-lab2017/open-digger/tree/master/cooperations/paddle_hackathon_3rd)。

## 贡献指南

在对项目贡献之前，请务必查阅我们的[贡献指南](https://github.com/X-lab2017/open-digger/blob/master/docs/CONTRIBUTING.md)。

## 沟通

如果想和我们取得联系，欢迎在 GitHub 提交 Issue 或 Discussion，也欢迎通过下面的微信群二维码加入微信群交流。

![qrcode](@site/static/img/wechat-qrcode.jpeg)

## 许可证

对于代码部分，我们使用了 [Apache-2.0 许可证](https://github.com/X-lab2017/open-digger/blob/master/LICENSE)。在使用项目输出内容前请确保使用符合许可证要求。
