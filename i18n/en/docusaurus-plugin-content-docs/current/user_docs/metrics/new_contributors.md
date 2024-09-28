# New Contributors

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

New Contributors is a metric defined by the [CHAOSS community](https://chaoss.community). For a detailed definition of this metric, please refer to [CHAOSS Metrics - New Contributors](https://chaoss.community/kb/metric-new-contributors/).

This metric helps identify how many contributors are making their first contribution to a given project and information about them. 

> An increase or decline in new contributors can be an early indicator of project health. Understanding the behavior and barriers of new community members requires knowing who they are, and a healthy project should have a steady stream of new contributors.


## Data

- **Link (base):** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/new_contributors.json`
- **Link (detail):** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/new_contributors_detail.json`


To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. For the base variant, here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/new_contributors.json), and for the detailed variant, refer to this [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/new_contributors_detail.json).

## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L862).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Developer Status" src="https://codepen.io/frank-zsy/embed/RwBmpYZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">
  OpenDigger - [CHAOSS] Developer Status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
