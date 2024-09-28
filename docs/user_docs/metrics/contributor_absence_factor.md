# 贡献者缺席因素

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

贡献者缺席因素（Contributor Absence Factor）是由 [CHAOSS 社区](https://chaoss.community) 定义的一个指标。有关该指标的详细定义，请参阅 [CHAOSS Metrics - 贡献者缺席因素](https://chaoss.community/zh-CN/kb/metric-contributor-absence-factor/)。

贡献者缺席因素是一个引人注目的指标，因为它形象的表达了一个问题，即：“在项目停滞之前，我们可以失去多少贡献者？”。贡献者缺席因素的计算是项目贡献量 50% 的最少人数，并表明了项目失去关键贡献者（包括维护者）后的韧性程度。

> 它有助于识别项目中的工作如何分布在贡献者之间，以及项目中做了大部分工作的关键人物。

## 数据

**链接（基础）：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/bus_factor.json`

**链接（详细）：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/bus_factor_detail.json`

要获取特定仓库的数据，请将`{platform}`、`{owner}` 和 `{repo}` 替换为实际名称。这里有一个[示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/bus_factor.json)。

## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/54478a97911a24a33e69147a985115b084c24f3f/src/metrics/chaoss.ts#L672)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger — [X-lab] OpenRank/Activity/Bus Factor" src="https://codepen.io/frank-zsy/embed/bGjyqQj?type=bus_factor&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjyqQj">
  OpenDigger - [X-lab] OpenRank/Activity/Bus Factor</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
