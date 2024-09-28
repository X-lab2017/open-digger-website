# 变更请求审查

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

变更请求审查（Change Request Reviews）是由 [CHAOSS](https://chaoss.community) 定义的一个指标，有关该指标的详细定义，请参阅 [CHAOSS Metrics - 变更请求审查](https://chaoss.community/zh-CN/kb/metric-change-request-reviews/)。

该指标是软件开发过程中的一个关键组成部分，确保在集成之前对代码库的建议修改进行全面评估。这个过程包括评估变更的质量，并确保其符合项目指南。审查可以在合并之前建议改进或必要的更改，从而促进软件质量和最佳实践的遵循。

> 软件工程研究长期以来认识到代码审查对提高软件质量的重要性（Baker et al, 1997; Kemerer et al, 2009）。正式审查确保变更符合项目标准，并有助于整体代码健康。这实际上对于维护代码库的完整性和促进协作开发环境至关重要。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/change_requests_reviews.json`

要获取特定存储库的数据，请将 `{platform}`，`{owner}` 和 `{repo}` 替换为实际名称。这里有一个 [示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests_reviews.json)。

## 代码

这里是 [**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L734)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Change Requests Reviews" src="https://codepen.io/frank-zsy/embed/bGjPGxw?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjPGxw">
  OpenDigger - [CHAOSS] Change Requests Reviews</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
