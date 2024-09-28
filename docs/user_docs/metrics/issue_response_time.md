# 问题响应时间

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

问题响应时间（Issue Response Time）是由 [CHAOSS](https://chaoss.community) 定义的一个指标，有关该指标的详细定义，请参阅 [CHAOSS 指标 - 问题响应时间](https://chaoss.community/zh-CN/kb/metric-issue-response-time/)。

问题响应时间是一个指标，显示从问题开启到来自其他贡献者在该问题上的响应之间经过的时间。

> Issue 响应时间有助于确定社区如何快速响应问题。这对于社区经理确定社区是否对问题做出响应和它们被解决的速度是很有用的。高问题响应时间可能表明社区不响应问题，而低问题响应时间可能表明社区会及时响应问题，这可用于衡量社区的整体活动水平。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/issue_response_time.json`

要获取特定存储库的数据，请将 `{platform}`，`{owner}` 和 `{repo}` 替换为实际名称。这里有一个[示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/issue_response_time.json)。

## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L298)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Time Duration Related Metrics" src="https://codepen.io/frank-zsy/embed/VwBqwaP?type=issue_response_time&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/VwBqwaP">
  OpenDigger - [CHAOSS] Time Duration Related Metrics</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
