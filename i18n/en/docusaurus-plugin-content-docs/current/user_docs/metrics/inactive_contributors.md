# Inactive Contributors

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Inactive Contributors is a metric defined by [CHAOSS](https://chaoss.community), see [CHAOSS Metrics - Inactive Contributors](https://chaoss.community/kb/metric-inactive-contributors/) for the detailed definition of this metric.

Inactive Contributors is a metric that shows how many contributors have stopped contributing over a specific period of time. The period of time required for a contributor to be counted as inactive can be decided by a variable (default as 6 months) and this metric will display the number of contributors that have been labeled as inactive over a given time frame.

> Inactive Contributors helps determine how many people have stopped contributing actively. This could be useful for community managers to determine if key members are losing interest, or are taking a break.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/inactive_contributors.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/inactive_contributors.json).

## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L880).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Developer Status" src="https://codepen.io/frank-zsy/embed/RwBmpYZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">
  OpenDigger - [CHAOSS] Developer Status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
