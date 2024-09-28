# Activity Dates and Times

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Activity dates and times is a metric defined by [CHAOSS](https://chaoss.community), see [CHAOSS Metrics - Activity Dates and Times](https://chaoss.community/kb/metric-activity-dates-and-times/) for a detailed definition of this metric.

This metric helps to determine the dates and timestamps of when individual activities have occurred in a repository. It also helps to determine the activity of the repository and the time when the repository is most active.

> The data can be used to probabilistically estimate where on earth contributions come from in cases where the time zone is not UTC.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/active_dates_and_times.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/active_dates_and_times.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L960).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS]Active dates and times" src="https://codepen.io/frank-zsy/embed/jOpQdZZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/jOpQdZZ">
  OpenDigger - [CHAOSS]Active dates and times</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
