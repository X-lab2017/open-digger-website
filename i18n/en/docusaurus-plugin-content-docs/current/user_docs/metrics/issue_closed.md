# Issue Closed

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Issue Closed is a metric defined by the [CHAOSS community](https://chaoss.community). For a detailed definition of this metric, please refer to [CHAOSS Metrics - Issues Closed](https://chaoss.community/kb/metric-issues-closed).

This metric tracks the number of issues that were closed during a certain period. Issues closed are those that changed to the state "closed" during a certain period. In some cases or some projects, there are other states or tags that could be considered as "closed". For example, in some projects, they use the state or the tag "fixed" to indicate that the issue is closed, even when it needs some action for formally closing it.

In some cases, some of these are also issues themselves. Reopening an issue might be considered as opening a new issue in certain scenarios.

> The Issues Closed metric provides insights into the volume of issues that are dealt with in a project. Closed issues are a proxy for the activity in a project. By counting closed issues related to code in the set of repositories corresponding to a project, you can have an idea of the overall activity in finishing work with issues in that project. Of course, this metric is not the only one that should be used to track the volume of coding activity.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/issues_closed.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. For more, refer to this [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/issues_closed.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L193).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Issues Status" src="https://codepen.io/frank-zsy/embed/mdjaZMw?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/mdjaZMw">
  OpenDigger - [CHAOSS] Issues Status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
