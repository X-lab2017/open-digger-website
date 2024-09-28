# Issues New

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Issues New is a metric defined by the [CHAOSS community](https://chaoss.community). For a detailed definition of this metric, please refer to [CHAOSS Metrics - Issues New](https://chaoss.community/kb/metric-issues-new).

The Issues New metric tracks the number of new issues created during a certain period. Projects discuss how they are fixing bugs, or adding new features, in tickets in the issue tracking system. Each of these tickets (issues) is opened (submitted) by a certain person and is later commented and annotated by many others. Issues can also be, in some systems, associated with milestones, branches, epics, or stories. In some cases, some of these are also issues themselves. Reopening an issue might be considered as opening a new issue in certain scenarios.

> The Issues New metric provides insights into the volume of issues discussed in a project. Issues are a proxy for the activity in a project. By counting issues discussing code in the set of repositories corresponding to a project, one can have an idea of the overall activity in discussing issues in that project. Of course, this metric is not the only one that should be used to track volume of coding activity.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/issues_new.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. For more, refer to this [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/issues_new.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L128).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Issues Status" src="https://codepen.io/frank-zsy/embed/mdjaZMw?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/mdjaZMw">
  OpenDigger - [CHAOSS] Issues Status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
