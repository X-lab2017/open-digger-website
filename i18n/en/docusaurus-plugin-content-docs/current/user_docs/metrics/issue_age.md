# Issue Age

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Issue Age is a metric defined by the [CHAOSS community](https://chaoss.community). For a detailed definition of this metric, please refer to [CHAOSS Metrics - Issue Age](https://chaoss.community/kb/metric-issue-age).

This metric is an indication of how long issues have been left open in the considered time period. If an issue has been closed but re-opened again within that period, it will be considered as having remained open since its initial opening date. This helps in understanding the duration for which issues have remained unresolved, providing insights into the efficiency of issue resolution processes within a project. By tracking the age of open issues, project maintainers can identify the oldest open issues and gain insights into why they have been open for an extended period of time. This can help in understanding how well maintainers are resolving issues and how quickly issues are resolved.

> The Issue Age metric provides valuable insights into the efficiency of issue resolution processes within a project. By identifying the oldest open issues, project maintainers can better understand the reasons behind prolonged issue resolution times and take appropriate actions to address them.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/issue_age.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. For more, refer to this [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_age.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L426).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Time Duration Related Metrics" src="https://codepen.io/frank-zsy/embed/VwBqwaP?type=issue_age&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_age">
  OpenDigger - [CHAOSS] Time Duration Related Metrics</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
