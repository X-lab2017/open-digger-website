# 指标使用指南

## 基本使用

OpenDigger 实现的所有指标对所有人开放使用，OpenDigger 的静态数据根链接为：

`https://oss.open-digger.cn/{platform}/{org/login}/{repo}/`

其中 `platform` 目前支持 `github` 和 `gitee`，只需要替换 `org/repo` 或用户 `login` 即可获取数据。

以下是一份完整的指标数据清单，您可以前往 [Playground](playground) 页面试用数据，或对于具体数据，前往相应文档页面查看详情。

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
        <td class="centered-cell"><a href="global_openrank"><b>仓库全域 OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_2/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/openrank.json">openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L25">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=openrank">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="global_openrank"><b>开发者全域 OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/frank-zsy/openrank.json">openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L57">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/bGjyqQj?type=openrank&name=frank-zsy">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="community_openrank"><b>仓库社区 OpenRank</b></a></td>
        <td class="centered-cell"><a href="https://blog.frankzhao.cn/how_to_measure_open_source_3/">X-lab</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/community_openrank.json">community_openrank.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L94">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/abjMXBV">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="community_openrank"><b>开发者社区 OpenRank</b></a></td>
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
        <td class="centered-cell" rowspan="2"><a href="activity"><b>仓库活跃度</b></a></td>
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
        <td class="centered-cell" rowspan="2"><a href="activity"><b>开发者活跃度</b></a></td>
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
        <td class="centered-cell"><a href="technical_fork"><b>技术分叉</b></a></td>
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
        <td class="centered-cell"><a href="activity_dates_and_times"><b>活跃日期和时间</b></a></td>
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
        <td class="centered-cell" rowSpan="2"><a href="new_contributors"><b>新贡献者</b></a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://chaoss.community/zh-CN/metric-new-contributors/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/new_contributors.json">new_contributors.json</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L747">链接</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/new_contributors_detail.json">new_contributors_detail.json</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowSpan="2"><a href="contributors"><b>贡献者</b></a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://chaoss.community/zh-CN/metric-contributors/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/contributors.json">contributors.json</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L835">链接</a></td>
        <td class="centered-cell" rowSpan="2"><a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/contributors_detail.json">contributors_detail.json</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="inactive_contributors"><b>不活跃的贡献者</b></a></td>
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
        <td class="centered-cell" rowSpan="2"><a href="contributor_absence_factor"><b>贡献者缺席因素</b></a></td>
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
        <td class="centered-cell"><a href="issue_new"><b>新问题</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issues-new/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issues_new.json">issues_new.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L128">链接</a></td>
        <td class="centered-cell" rowSpan="3"><a href="https://codepen.io/frank-zsy/pen/mdjaZMw">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="issue_closed"><b>已关闭的问题</b></a></td>
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
        <td class="centered-cell"><a href="issue_response_time"><b>问题响应时间</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issue-response-time/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_response_time.json">issue_response_time.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L357">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_response_time">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="issue_resolution_duration"><b>问题解决持续时间</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issue-resolution-duration/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_resolution_duration.json">issue_resolution_duration.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L292">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_resolution_duration">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="issue_age"><b>问题年龄</b></a></td>
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
        <td class="centered-cell"><a href="change_requests"><b>变更请求</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-change-requests/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests.json">change_requests.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L697">链接</a></td>
        <td class="centered-cell" rowSpan="3"><a href="https://codepen.io/frank-zsy/pen/bGjPGxw">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="change_requests_accepted"><b>接受的变更请求</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-change-requests-accepted/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests_accepted.json">change_requests_accepted.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L497">链接</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="change_requests_reviews"><b>变更请求审查</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-change-request-reviews/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests_reviews.json">change_requests_reviews.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L734">链接</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="change_requests_response_time"><b>变更请求响应时间</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issue-response-time/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_response_time.json">change_request_response_time.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L415">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_response_time">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="change_requests_resolution_duration"><b>变更请求解决持续时间</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issue-resolution-duration/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_resolution_duration.json">change_request_resolution_duration.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L341">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_resolution_duration">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell"><a href="change_requests_age"><b>变更请求年龄</b></a></td>
        <td class="centered-cell"><a href="https://chaoss.community/zh-CN/metric-issue-age/">CHAOSS</a></td>
        <td class="centered-cell"><a href="https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_age.json">change_request_age.json</a></td>
        <td class="centered-cell"><a href="https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L494">链接</a></td>
        <td class="centered-cell"><a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=change_request_age">Demo</a></td>
      </tr>
      <tr>
        <td class="centered-cell" rowSpan="3"><a href="code_changes_lines"><b>代码更改行</b></a></td>
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

## 数据结构

对于所导出的指标文件，其基本数据结构为一个 JSON 对象，其键值为月度、季度、年度值，对应的数值为指标数据。

- 月度键值形式为 `YYYY-MM`。
- 季度键值形式为 `YYYYQX`，`X` 取值范围为 1 至 4，`Q1` 为当年 1 至 3 月，`Q2` 为当年 4 至 6 月，以此类推。
- 年度键值形式为 `YYYY`。

所有键值均在顶层结构中，按照年度、月度、季度的顺序排列，每类中按时间先后顺序排列。

例如，对于 [OpenDigger](https://github.com/X-lab2017/open-digger) 仓库，其全域 OpenRank 影响力数据为：

```json
{
  "2020":34.81,"2021":55.59,"2022":92.97,...        // 年度数据
  "2020-08":4.91,"2020-09":5.17,"2020-10":5.1,...   // 月度数据
  "2020Q3":10.08,"2020Q4":24.73,"2021Q1":22.18,...  // 季度数据
}
```

> 由于 OpenDigger 的 GitHub 数据源存在[时段数据缺失](../data_sources/github#数据缺失)的情况，因此若键值中存在 `2021-10-raw`，则该值为指标数据的原始值。为了使得指标数据具有时序上的连续性，对应的 `2021-10` 指标值为前后各两个月的插值结果，具体代码参见[这里](https://github.com/X-lab2017/open-digger/blob/master/src/cron/tasks/monthly_export.ts#L176)。

## 导出范围

OpenDigger 并未为全域所有仓库和用户均导出指标数据，具体导出的仓库和开发者列表可分别在 [`repo_list.csv`](https://oss.open-digger.cn/repo_list.csv) 和 [`user_list.csv`](https://oss.open-digger.cn/user_list.csv) 文件中查询，其中：

- `repo_list.csv` 的行结构为 `id,platform,repo_name`，即使用`,`分隔的仓库数据库 ID、平台名称和仓库全称。
- `user_list.csv` 的行结构为 `id,platform,login`，即使用`,`分隔的用户数据库 ID、平台名称和用户登录名。

其中数据库 ID 为对应平台中的唯一 ID，与各平台的数据一致，***平台名与数据库 ID 共同唯一标识一个仓库或开发者***。

关于 OpenDigger 的导出策略，请参考开发者文档中导出表的部分。

> OpenDigger 官网页面中各类仓库和开发者搜索组件使用这两个文件实现浏览器本地搜索。

## 元数据

对于导出的仓库和开发者，OpenDigger 会同时导出一份元数据，其地址为：

仓库：`https://oss.open-digger.cn/{platform}/{org/login}/meta.json`（[示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/meta.json)）

开发者：`https://oss.open-digger.cn/{platform}/{org/login}/{repo}/meta.json`（[示例](https://oss.open-digger.cn/github/frank-zsy/meta.json)）

元数据中包含如下字段：

- `updatedAt`：数据更新时间。
- `type`：仓库或开发者类型，值是 `repo` 或 `user`。
- `id`：仓库或开发者在平台数据库中的 ID。
- `labels`：仓库或开发者在 OpenDigger 中所属标签。关于该字段，请参考标签数据相关文档。

例如，对于 [OpenDigger](https://github.com/X-lab2017/open-digger) 仓库，其元数据为：

```json
{
  "updatedAt": 1725221391661,     // 更新时间时间戳
  "type": "repo",                 // 元数据类型
  "id": 288431943,                // 仓库在 GitHub 中的唯一 ID
  "labels": [                     // 仓库所属标签
    {
      "id": ":communities/mulan", // 木兰社区
      "name": "Mulan",
      "type": "Community"
    },
    {
      "id": ":communities/xlab",  // X-lab 社区
      "name": "X-lab",
      "type": "Community"
    },
    {
      "id": ":communities/xlab/open_digger",  // OpenDigger 项目
      "name": "OpenDigger",
      "type": "Project"
    },
    {
      "id": ":regions/CN",        // 中国项目
      "name": "China",
      "type": "Region"
    }
  ]
}
```

## FAQ

#### 问：OpenDigger 指标数据是否支持在其他应用中集成？

答：是的，OpenDigger 指标数据非常欢迎下游应用集成。OpenDigger 对于导出的静态数据，在响应头中加入了 `Access-Control-Allow-Origin: *`，从而保证数据可以被跨域使用。如果您的网站对于响应头中的域名有强要求，可能需要自己实现服务以进行数据转发。事实上 OpenDigger 数据已有大量下游应用，例如 HyperCRX、OpenLeaderboard、OSGraph 等。

#### 问：应用使用指标数据是否需要自己做缓存策略？

答：浏览器应用可以直接使用数据而不做缓存。OpenDigger 对于指标数据，在响应头中加入了 `Expires` 字段，每月更新后直到次月 2 日之前，浏览器可以通过该字段判断直接从浏览器磁盘缓存中获取数据，而无需重复获取远程数据。

#### 问：在访问某指标文件时不存在可能是什么问题导致的？

答：如果在访问某个数据指标文件不存在，可能是如下原因导致的：
- 该仓库或开发者不在导出范围内，可以通过访问元数据确定仓库或开发者是否在导出范围内，若元数据存在则数据已导出。
- 该仓库没有对应的事件类型。例如 Apache 某些项目不使用 GitHub Issues 功能（如 [Flink](https://github.com/apache/flink)），因此将不存在问题类相关的指标文件。

#### 问：指标文件中的键值为什么可能缺失某些特定的月份或季度？

答：若某仓库或开发者在某时段内不存在某类事件，则对应指标数据中的时段键值将不存在，而指标数据中不会出现 `0` 值，因此在指标数据中键值可能出现不连续的情况。
