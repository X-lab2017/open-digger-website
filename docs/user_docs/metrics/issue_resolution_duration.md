# 问题解决持续时间

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

问题解决持续时间 (Issue Resolution Duration)，也称为 Issue 解决时间 (Time to Issue Resolution)，是一个由 [CHAOSS](https://chaoss.community) 定义的指标，有关该指标的详细定义，请参阅 [CHAOSS 指标 - 问题解决持续时间](https://chaoss.community/zh-CN/kb/metric-issue-resolution-duration/)。

该指标有助于表明解决问题所需的时间，从问题开启到关闭的平均时间。这个指标可用于确定社区如何快速响应问题以及解决问题所需的时间。

> 对于那些被重新打开并再次关闭的问题，仅最后一个关闭事件与此指标有关联。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/issue_resolution_duration.json`

要获取特定存储库的数据，请将 `{platform}`，`{owner}` 和 `{repo}` 替换为实际名称。这里有一个[示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_resolution_duration.json)。

## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L292)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Time Duration Related Metrics" src="https://codepen.io/frank-zsy/embed/VwBqwaP?type=issue_resolution_duration&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/VwBqwaP">
  OpenDigger - [CHAOSS] Time Duration Related Metrics</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
