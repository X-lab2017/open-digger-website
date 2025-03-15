# Change Request Age

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Change Requests Reviews is a metric defined by [CHAOSS](https://chaoss.community), see [CHAOSS Metrics - Issue Age](https://chaoss.community/kb/metric-issue-age/) for a detailed definition of this metric.

This metric measures the duration for which change requests have been left open, providing insights into the timeliness of the review and integration process. This metric is crucial for understanding the efficiency and responsiveness of the development team.

> The Change Request Age metric is particularly useful for pinpointing bottlenecks and ensuring that proposed modifications are addressed in a timely manner. Research has shown that projects with a lower average change request age tend to have higher contributor satisfaction and retention rates. Timely resolution of change requests demonstrates a well-organized and efficient development process, which attracts and retains talented contributors.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/change_request_age.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_age.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L341).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Time Duration Related Metrics" src="https://codepen.io/frank-zsy/embed/VwBqwaP?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/VwBqwaP">
  OpenDigger - [CHAOSS] Time Duration Related Metrics</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
