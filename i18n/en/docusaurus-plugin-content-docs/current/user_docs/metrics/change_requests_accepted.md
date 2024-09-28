# Change Requests Accepted

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Change Requests Accepted is a metric defined by [CHAOSS](https://chaoss.community), see [CHAOSS Metrics - Change Requests Accepted](https://chaoss.community/kb/metric-change-requests-accepted/) for a detailed definition of this metric.

This metric is a valuable indicator of the volume of coding activity within a project. By tracking the number of accepted change requests, we can gain insights into the overall productivity and engagement of the development team. This metric serves as a proxy for the level of activity that results in tangible changes to the project.

> While this metric is a useful tool for assessing coding activity, it should not be the sole measure. Complementary metrics, such as the number of commits, code reviews, and issue resolutions, provide a more comprehensive view of the project's health and progress, and identify areas for improvement or optimization.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/change_requests_accepted.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests_accepted.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L497).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Change Requests status" src="https://codepen.io/frank-zsy/embed/bGjPGxw?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjPGxw">
  OpenDigger - [CHAOSS] Change Requests status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
