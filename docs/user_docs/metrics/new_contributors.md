# 新贡献者

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

新贡献者 (New Contributors) 是由 [CHAOSS社区](https://chaoss.community) 定义的一个指标。有关该指标的详细定义，请参阅 [CHAOSS指标 - 新贡献者](https://chaoss.community/zh-CN/kb/metric-new-contributors/)。

该指标有助于识别有多少贡献者首次为给定项目做出贡献以及有关他们的信息。

> 新贡献者的增加或下降可能是项目健康状况的指示器。了解新社区成员的行为和障碍需要知道他们是谁，健康的项目应该有一个稳定的新贡献者流。

## 数据

- **链接（基础）：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/new_contributors.json`
- **链接（详细）：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/new_contributors_detail.json`

要获取特定存储库的数据，请将`{platform}`，`{owner}`和`{repo}`替换为实际名称。对于基本变体，这里有一个[示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/new_contributors.json)，对于详细变体，请参考此[示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/new_contributors_detail.json)。

## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L862)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Developer Status" src="https://codepen.io/frank-zsy/embed/RwBmpYZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">
  OpenDigger - [CHAOSS] Developer Status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
