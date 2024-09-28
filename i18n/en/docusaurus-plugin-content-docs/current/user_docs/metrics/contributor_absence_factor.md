# Bus Factor

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

The Bus Factor, also known as the Contributor Absence Factor, is an indicator defined by the [CHAOSS community](https://chaoss.community). For a detailed definition of this indicator, please refer to [CHAOSS Metrics - Bus Factor](https://chaoss.community/metric-bus-factor/).

The Bus Factor is a compelling metric because it visualizes the question "How many contributors can we lose before a project stalls?". It is the smallest number of people that make 50% of contributions to the project & indicates a measure of the project's resilience to losing key contributors (including maintainers).

> It helps identify how widely the work in a project is distributed across contributors as well as the key people in a project that are doing the majority of the work.


## Data

- **Link (base):** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/bus_factor.json`
- **Link (detail):** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/bus_factor_detail.json`


To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/bus_factor.json).

## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/54478a97911a24a33e69147a985115b084c24f3f/src/metrics/chaoss.ts#L672).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger — [X-lab] OpenRank/Activity/Bus Factor" src="https://codepen.io/frank-zsy/embed/bGjyqQj?type=bus_factor&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjyqQj">
  OpenDigger - [X-lab] OpenRank/Activity/Bus Factor</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
