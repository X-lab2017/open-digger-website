# 技术分叉

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

技术分叉（Technical Fork）是由 [CHAOSS 社区](https://chaoss.community)定义的一个指标，有关该指标的详细定义，请参阅 [CHAOSS Metrics - 技术分叉](https://chaoss.community/zh-CN/kb/metric-technical-fork/)。

技术分叉是仓库的分布式版本控制的副本。技术分叉的数量表示同一代码开发平台上仓库的副本数量。

> 来自同一开发人员的分叉将被重复计算。例如，如果开发人员已经删除了分叉的仓库，然后再次分叉，则后者也将计入总数。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/technical_fork.json`

要获取特定存储库的数据，请将`{platform}`、`{owner}`和`{repo}`替换为实际名称。这里有一个[示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/technical_fork.json)。

## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/465d2e3ddb57c0da7fab18435f711d4fa0a63f22/src/metrics/chaoss.ts#L12)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [X-lab] Attention/Stars/Technical Fork/Bus Factor" src="https://codepen.io/frank-zsy/embed/MWBdpNg?type=technical_fork&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/MWBdpNg?type=technical_fork">
  OpenDigger - [X-lab] Attention/Stars/Technical Fork/Bus Factor</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
