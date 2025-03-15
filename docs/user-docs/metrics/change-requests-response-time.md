# 变更请求响应时间

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

变更请求响应时间（Change Request Response Time）是由 [CHAOSS](https://chaoss.community) 定义的一个指标，有关该指标的详细定义，请参阅 [CHAOSS Metrics - 变更请求响应时间](https://chaoss.community/zh-CN/kb/metric-issue-response-time/)。

该指标衡量从提交变更请求到收到其他贡献者的首次响应之间的时间。这对于理解开发社区的响应能力和审查过程的效率至关重要。

> 较短的响应时间通常表明一个更活跃和参与度更高的社区，这对项目的整体健康和进展有益。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/change_request_response_time.json`

要获取特定存储库的数据，请将 `{platform}`，`{owner}` 和 `{repo}` 替换为实际名称。这里有一个 [示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_response_time.json)。

## 代码

这里是 [**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L415)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Time Duration Related Metrics" src="https://codepen.io/frank-zsy/embed/VwBqwaP?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/VwBqwaP">
  OpenDigger - [CHAOSS] Time Duration Related Metrics</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
