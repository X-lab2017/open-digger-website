# 问题响应时间(Issue Response Time)

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

问题响应时间是由[CHAOSS](https://chaoss.community)定义的一个指标，有关该指标的详细定义，请参阅[CHAOSS Metrics - Issue Response Time](https://chaoss.community/metric-issue-response-time/)。

问题响应时间是一个指标，显示从问题开启到来自其他贡献者的问题线程响应之间经过的时间。

> 问题响应时间有助于确定社区如何快速响应问题。这对于社区经理确定社区是否对问题做出响应和它们被解决的速度是很有用的。高问题响应时间可能表明社区不响应问题，而低问题响应时间可能表明社区响应问题，这可用于衡量社区的整体活动水平。


## 数据

**链接：** `https://oss.x-lab.info/open_digger/{platform}/{owner}/{repo}/issue_response_time.json`

要获取特定存储库的数据，请将`{platform}`，`{owner}`和`{repo}`替换为实际名称。这里有一个[示例](https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/issue_response_time.json)。


## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L413)。


## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Developer Status" src="https://codepen.io/frank-zsy/embed/RwBmpYZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/RwBmpYZ">
  OpenDigger - [CHAOSS] Developer Status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
