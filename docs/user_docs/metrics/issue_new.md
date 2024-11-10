# 新问题

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

新问题（Issues New）是由 [CHAOSS 社区](https://chaoss.community) 定义的一个指标。有关此指标的详细定义，请参考 [CHAOSS 指标 - 新问题](https://chaoss.community/zh-CN/kb/metric-issues-new)。

新问题指标跟踪在某个时期内创建的新问题数量。项目在问题跟踪系统中讨论如何修复错误或添加新功能。每个问题都由某位开发者提交（打开），并由其他人进行评论和注释。问题还可以在某些系统中与里程碑、分支、其他问题、变更请求等相关联。在某些情况下，重新打开问题可能被视为打开新问题。

> 新问题指标提供了项目中讨论问题的数量的洞察。问题是项目活动的一种重要形式，通过计算讨论代码的问题数量，可以了解项目中讨论问题的总体活动情况。当然，这个指标不是唯一用于跟踪编码活动量的指标。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/issues_new.json`

要获取某个仓库的数据，请将 `{platform}`、`{owner}` 和 `{repo}` 替换为实际名称。更多信息请参考此 [示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/issues_new.json)。

## 代码

这是 [**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L128)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Issues Status" src="https://codepen.io/frank-zsy/embed/mdjaZMw?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/mdjaZMw">
  OpenDigger - [CHAOSS] Issues Status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
