# Contributors

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Contributors is a metric defined by the [CHAOSS community](https://chaoss.community). For a detailed definition of this metric, please refer to [CHAOSS Metrics - Contributors](https://chaoss.community/kb/metric-contributors).

A contributor is defined as anyone who contributes to the project in any way. This metric ensures that all types of contributions are fully recognized in the project. 

> Contributors are a key metric for understanding the health of a project. They are the lifeblood of a project, and their contributions are what make the project successful.


## Data

- **Link (base):** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/contributors.json`
- **Link (detail):** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/contributors_detail.json`


To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. For the base variant, here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/contributors.json), and for the detailed variant, refer to this [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/contributors_detail.json).

## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L835).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Developer Status" src="https://codepen.io/frank-zsy/embed/RwBmpYZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">
  OpenDigger - [CHAOSS] Developer Status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
