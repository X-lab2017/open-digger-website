# Change Requests Response Time

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Change Requests Reviews is a metric defined by [CHAOSS](https://chaoss.community), see [CHAOSS Metrics - Change Request Response Time](https://chaoss.community/kb/metric-issue-response-time/) for a detailed definition of this metric.

This metric measures the duration between the submission of a change request and the first response from another contributor. This is crucial for understanding the responsiveness of the development community and the efficiency of the review process.

> A shorter response time generally indicates a more active and engaged community, which is beneficial for the project's overall health and progress.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/change_request_response_time.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_response_time.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L415).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Time Duration Related Metrics" src="https://codepen.io/frank-zsy/embed/VwBqwaP?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/VwBqwaP">
  OpenDigger - [CHAOSS] Time Duration Related Metrics</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
