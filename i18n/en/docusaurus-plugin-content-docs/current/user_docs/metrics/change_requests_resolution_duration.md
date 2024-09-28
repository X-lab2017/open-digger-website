# Change Requests Resolution Duration

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)


## Definition

Change Requests Resolution Duration is a metric defined by [CHAOSS](https://chaoss.community), see [CHAOSS Metrics - Change Requests Resolution Duration](https://chaoss.community/metric-issue-resolution-duration/) for a detailed definition of this metric.

This metric measures the average time it takes for a change request to be closed, providing insights into the efficiency and timeliness of the review and integration process. This metric is crucial for understanding the overall responsiveness and effectiveness of the development team.

> A shorter resolution duration generally indicates a more efficient and responsive development process, which is beneficial for the project's overall health and progress.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/change_request_resolution_duration.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_resolution_duration.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L341).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Time Duration Related Metrics" src="https://codepen.io/frank-zsy/embed/VwBqwaP?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/VwBqwaP">
  OpenDigger - [CHAOSS] Time Duration Related Metrics</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
