# Issue Resolution Duration

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Issue Resolution Duration, also known as Time to Issue Resolution, is a metric defined by [CHAOSS](https://chaoss.community), see [CHAOSS Metrics - Time to Issue Resolution](https://chaoss.community/kb/metric-issue-resolution-duration/) for the detailed definition of this metric.

The metric helps indicate the time it takes to resolve an issue, on average, from the time it was opened to the time it was closed. This metric can be used to determine how quickly the community responds to issues and how long it takes to resolve them.

> For issues that were reopened and closed again, only the last close event is relevant for this metric.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/issue_resolution_duration.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_resolution_duration.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L292).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Time Duration Related Metrics" src="https://codepen.io/frank-zsy/embed/VwBqwaP?type=issue_resolution_duration&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/VwBqwaP">
  OpenDigger - [CHAOSS] Time Duration Related Metrics</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
