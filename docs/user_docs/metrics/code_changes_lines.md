# 代码更改行

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

代码变更行（Code Changes Lines）是由 [CHAOSS 社区](https://chaoss.community) 定义的一个指标。有关此指标的详细定义，请参考 [CHAOSS 指标 - 代码变更行](https://chaoss.community/zh-CN/kb/metric-code-changes-lines/)。

代码变更行指标考虑了在某个时期内对源代码进行的变更所触及的行数的总和。这意味着如果某个文件中的某一行在三次不同的变更中被触及，则会计为三行。由于在大多数源代码管理系统中很难或无法准确判断某一行是被删除后再添加，还是仅被编辑，我们将编辑一行视为删除它并稍后用新内容添加回来。每一项（删除和添加）都将被视为“触及”。因此，如果某个文件中的某一行被编辑三次，则会计为六次不同的变更（三次删除和三次添加）。

> 代码变更行指标提供了代码变更量的洞察，有助于了解维护和开发源代码所涉及的活动和工作量。

## 数据

- **链接 (添加)：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/code_change_lines_add.json`
- **链接 (删除)：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/code_change_lines_remove.json`
- **链接 (总和)：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/code_change_lines_sum.json`

要获取某个仓库的数据，请将 `{platform}`、`{owner}` 和 `{repo}` 替换为实际名称。对于`代码添加`，请参考此 [示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/code_change_lines_add.json)。类似地，对于`代码删除`，请参考此 [示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/code_change_lines_remove.json)，对于`代码变更总和`，请参考此 [示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/code_change_lines_sum.json)。

## 代码

这是 [**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L94)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Code Change Lines" src="https://codepen.io/frank-zsy/embed/dyjByKL?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/dyjByKL">
  OpenDigger - [CHAOSS] Code Change Lines</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
