# 技术的 叉子 Technical Fork 

![Type](https://img.shields.io/badge/类型-公制-blue) ![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/为了-项目-blue)

## 定义

Technical Fork是由[CHAOSS](https://chaoss.community)定义的一个指标，有关该指标的详细定义，请参阅[CHAOSS Metrics - Technical Fork](https://chaoss.community/kb/metric-technical-fork/)。

Technical Fork是项目的分布式版本控制副本。技术分叉的数量表示同一代码开发平台上项目的副本数量。

> 来自同一开发人员的分叉将被重复计算。例如，如果开发人员已经删除了分叉的存储库，然后再次分叉，则后者也将计入总数。

## 数据

**链接：** `https://oss.x-lab.info/open_digger/github/{owner}/{repo}/technical_fork.json`

要获取特定存储库的数据，请将`{owner}`和`{repo}`替换为实际名称。这里有一个[示例](https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/technical_fork.json)。

## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/465d2e3ddb57c0da7fab18435f711d4fa0a63f22/src/metrics/chaoss.ts#L12)。


## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [X-lab] Attention/Stars/Technical Fork/Bus Factor" src="https://codepen.io/frank-zsy/embed/MWBdpNg?type=technical_fork&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/MWBdpNg?type=technical_fork">
  OpenDigger - [X-lab] Attention/Stars/Technical Fork/Bus Factor</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
