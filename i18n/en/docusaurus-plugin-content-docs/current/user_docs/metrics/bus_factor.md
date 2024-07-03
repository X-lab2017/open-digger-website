# Bus Factor

![Type](https://img.shields.io/badge/Type-Metric-blue) ![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Bus Factor, or modernly Contributor Absence Factor is a metric defined by [CHAOSS](https://chaoss.community), see [CHAOSS Metrics - Bus Factor](https://chaoss.community/metric-bus-factor/) for a detailed definition of this metric.

The Bus Factor is a compelling metric because it visualizes the question "How many contributors can we lose before a project stalls?". It is the smallest number of people that make 50% of contributions to the project & indicates a measure of the project's resilience to losing key contributors (including maintainers).

> It helps identify how widely the work in a project is distributed across contributors as well as the key people in a project that are doing the majority of the work.


## Data

- **Link (base):** `https://oss.x-lab.info/open_digger/github/{owner}/{repo}/bus_factor.json`
- **Link (detail):** `https://oss.x-lab.info/open_digger/github/{owner}/{repo}/bus_factor_detail.json`


To get the data for a certain repository, replace `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/bus_factor.json).

## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L780).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger — [X-lab] OpenRank/Activity/Bus Factor" src="https://codepen.io/frank-zsy/embed/bGjyqQj?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjyqQj">
  OpenDigger - [X-lab] OpenRank/Activity/Bus Factor</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
