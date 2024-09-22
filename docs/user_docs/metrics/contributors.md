# 贡献者

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

贡献者是由 [CHAOSS 社区](https://chaoss.community) 定义的一个指标。有关此指标的详细定义，请参考 [CHAOSS 指标 - 贡献者](https://chaoss.community/zh-CN/kb/metric-contributors)。

贡献者被定义为以任何方式为项目做出贡献的任何人。此指标确保项目中所有类型的贡献得到充分认可。

> 贡献者是理解项目健康状况的关键指标。他们是项目的生命线，他们的贡献使项目取得成功。

## 数据

- **链接 (基础)：** `https://oss.x-lab.info/open_digger/{platform}/{owner}/{repo}/contributors.json`
- **链接 (详细)：** `https://oss.x-lab.info/open_digger/{platform}/{owner}/{repo}/contributors_detail.json`

要获取某个仓库的数据，请将 `{platform}`、`{owner}` 和 `{repo}` 替换为实际名称。对于基础变体，请参考此 [示例](https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/contributors.json)，对于详细变体，请参考此 [示例](https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/contributors_detail.json)。

## 代码

这是 [**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L835)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Developer Status" src="https://codepen.io/frank-zsy/embed/RwBmpYZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">
  OpenDigger - [CHAOSS] Developer Status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
