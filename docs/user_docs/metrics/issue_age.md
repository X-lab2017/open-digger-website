# 问题年龄

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

问题年龄（Issue Age）是由 [CHAOSS 社区](https://chaoss.community) 定义的一个指标。有关此指标的详细定义，请参考 [CHAOSS 指标 - 问题年龄](https://chaoss.community/zh-CN/kb/metric-issue-age)。

此指标是指在所考虑的时间段内问题被保持开放的时间长度。如果一个问题在该时间段内被关闭但又重新打开，则将其视为自初次打开日期起一直保持开放。这有助于了解问题未解决的持续时间，提供了关于项目内问题解决过程效率的洞察。通过跟踪开放问题的年龄，项目维护者可以识别最老的开放问题，并了解它们为什么保持开放了很长时间。这有助于了解维护者如何解决问题以及问题解决的速度。

> 问题年龄指标提供了关于项目内问题解决过程效率的宝贵洞察。通过识别最老的开放问题，项目维护者可以更好地了解问题解决时间长的原因，并采取适当的行动来解决它们。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/issue_age.json`

要获取某个仓库的数据，请将 `{platform}`、`{owner}` 和 `{repo}` 替换为实际名称。更多信息请参考此 [示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_age.json)。

## 代码

这是 [**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L426)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Time Duration Related Metrics" src="https://codepen.io/frank-zsy/embed/VwBqwaP?type=issue_age&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/VwBqwaP?type=issue_age">
  OpenDigger - [CHAOSS] Time Duration Related Metrics</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
