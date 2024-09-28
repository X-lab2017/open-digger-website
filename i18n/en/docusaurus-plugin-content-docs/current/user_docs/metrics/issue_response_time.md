# Issue Response Time

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Issue Response Time is a metric defined by [CHAOSS](https://chaoss.community), see [CHAOSS Metrics - Issue Response Time](https://chaoss.community/metric-issue-response-time/) for the detailed definition of this metric.

Issue Response Time is a metric that shows how much time passes between the opening of an issue and a response in the issue thread from another contributor. 

> Issue Response Time helps determine how quickly the community responds to issues. This could be useful for community managers to determine if the community is responsive to issues and how quickly they are addressed. A high Issue Response Time could indicate that the community is not responsive to issues, while a low Issue Response Time could indicate that the community is responsive to issues, which can be used to measure the overall activity of the community.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/issue_response_time.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_response_time.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L413).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Time Duration Related Metrics" src="https://codepen.io/frank-zsy/embed/VwBqwaP?type=issue_response_time&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_response_time">
  OpenDigger - [CHAOSS] Time Duration Related Metrics</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
