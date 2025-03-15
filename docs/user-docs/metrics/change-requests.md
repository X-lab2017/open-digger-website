# 变更请求

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

变更请求（Change Requests）是由 [CHAOSS](https://chaoss.community) 定义的一个指标，有关该指标的详细定义，请参阅 [CHAOSS Metrics - 变更请求](https://chaoss.community/zh-CN/kb/metric-change-requests/)。

该指标是指提出的变更作为“对源代码的变更建议”进行讨论，而不是直接提交到代码库，每个变更请求都需要由其他开发人员（或维护人员）进行审查，他们可能会建议改进，从而产生新版本，直到审查为正面并接受代码，或者建议被拒绝。变更请求是项目活动的一个代理指标。但需要注意的是，这个指标不是唯一用于跟踪编码活动量的指标。

> 在上述情况下，“变更请求”对应于 GitHub 中的“拉取请求”，对应于 GitLab 中的“合并请求”，对应于 Gerrit 中的“代码审查”或在某些情况下的“变更集”。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/change_requests.json`

要获取特定存储库的数据，请将 `{platform}`，`{owner}` 和 `{repo}` 替换为实际名称。这里有一个 [示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests.json)。

## 代码

这里是 [**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L697)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Change Requests status" src="https://codepen.io/frank-zsy/embed/bGjPGxw?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjPGxw">
  OpenDigger - [CHAOSS] Change Requests status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
