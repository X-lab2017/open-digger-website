# Change Requests

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Change Requests is a metric defined by [CHAOSS](https://chaoss.community), see [CHAOSS Metrics - Change Requests](https://chaoss.community/kb/metric-change-requests/) for a detailed definition of this metric.

This is a metric where changes are proposed for discussion as "*proposals for change to the source code*" rather than being directly submitted to the code base, with each change request intended to be reviewed by other developers (or maintainers) who may suggest improvements, leading to new versions until reviews are positive and the code is accepted, or the proposal is declined. Change requests are a proxy for the activity in a project. But it should be noted that this metric is not the only one that should be used to track volume of coding activity.

> In context to above, "change requests" correspond to "pull requests" in the case of GitHub, to "merge requests" in the case of GitLab, and to "code reviews" or in some contexts "changesets" in the case of Gerrit.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/change_requests.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L697).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Change Requests status" src="https://codepen.io/frank-zsy/embed/bGjPGxw?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjPGxw">
  OpenDigger - [CHAOSS] Change Requests status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
