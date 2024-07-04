# 公共汽车 因素 Bus Factor

![Type](https://img.shields.io/badge/类型-公制-blue) ![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/为了-项目-blue)

## 定义

公共汽车 因素 (Bus Factor)，或现代称为 Contributor Absence Factor，是由[CHAOSS](https://chaoss.community)定义的一个指标。有关该指标的详细定义，请参阅[CHAOSS Metrics - Bus Factor](https://chaoss.community/metric-bus-factor/)。

Bus Factor是一个引人注目的指标，因为它可视化了问题“我们能够失去多少贡献者才会导致项目停滞？”。它是使项目贡献的50%的最少人数，并指示项目失去关键贡献者（包括维护者）的灵活性。

> 它有助于识别项目中的工作如何分布在贡献者之间，以及项目中做了大部分工作的关键人物。

## 数据

- **链接（基础）：** `https://oss.x-lab.info/open_digger/github/{owner}/{repo}/bus_factor.json`
- **链接（详细的）：** `https://oss.x-lab.info/open_digger/github/{owner}/{repo}/bus_factor_detail.json`

要获取特定存储库的数据，请将`{owner}`和`{repo}`替换为实际名称。这里有一个[示例](https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/bus_factor.json)。

## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L780)。


## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger — [X-lab] OpenRank/Activity/Bus Factor" src="https://codepen.io/frank-zsy/embed/bGjyqQj?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjyqQj">
  OpenDigger - [X-lab] OpenRank/Activity/Bus Factor</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
