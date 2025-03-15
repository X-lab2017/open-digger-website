# 变更请求年龄

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

变更请求年龄（Change Request Age）是由 [CHAOSS](https://chaoss.community) 定义的一个指标，有关该指标的详细定义，请参阅 [CHAOSS Metrics - 变更请求年龄](https://chaoss.community/zh-CN/kb/metric-issue-age/)。

该指标衡量变更请求被保持开放的时间长度，提供了对审查和集成过程及时性的洞察。该指标对于理解开发团队的效率和响应能力至关重要。

> 变更请求年龄指标特别有助于识别瓶颈，并确保提出的修改能够及时得到处理。研究表明，变更请求平均年龄较低的项目往往具有更高的贡献者满意度和保留率。及时解决变更请求表明一个组织良好且高效的开发过程，这有助于吸引和留住有才华的贡献者。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/change_request_age.json`

要获取特定存储库的数据，请将 `{platform}`，`{owner}` 和 `{repo}` 替换为实际名称。这里有一个 [示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/change_request_age.json)。

## 代码

这里是 [**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L341)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Time Duration Related Metrics" src="https://codepen.io/frank-zsy/embed/VwBqwaP?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/VwBqwaP">
  OpenDigger - [CHAOSS] Time Duration Related Metrics</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
