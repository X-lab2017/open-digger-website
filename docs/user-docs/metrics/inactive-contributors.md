# 不活跃的贡献者

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

不活跃的贡献者（Inactive Contributors）是由 [CHAOSS](https://chaoss.community) 定义的一个指标，有关该指标的详细定义，请参阅 [CHAOSS Metrics - 不活跃的贡献者](https://chaoss.community/zh-CN/kb/metric-inactive-contributors/)。

非活跃贡献者是一个指标，显示在特定时间段内已经停止贡献的贡献者数量。决定贡献者被认为非活跃所需的时间段可以由变量决定（默认为 6 个月），并且该指标将显示在给定时间范围内被标记为非活跃的贡献者数量。

> 非活跃贡献者有助于确定有多少人已经停止活跃的贡献。这对于社区经理确定关键成员是否失去兴趣或正在休息是很有用的。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/inactive_contributors.json`

要获取特定存储库的数据，请将 `{platform}`，`{owner}` 和 `{repo}` 替换为实际名称。这里有一个[示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/inactive_contributors.json)。

## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L880)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Developer Status" src="https://codepen.io/frank-zsy/embed/RwBmpYZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">
  OpenDigger - [CHAOSS] Developer Status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
