# 接受的变更请求

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

接受的变更请求（Change Request Accepted）是由 [CHAOSS](https://chaoss.community) 定义的一个指标，有关该指标的详细定义，请参阅 [CHAOSS Metrics - 接受的变更请求](https://chaoss.community/zh-CN/kb/metric-change-requests-accepted/)。

该指标是项目中编码活动量的一个有价值的指示器。通过跟踪已接受的变更请求数量，我们可以获得对开发团队整体生产力和参与度的洞察。该指标作为导致项目实际变化的活动水平的代理。

> 虽然该指标是评估编码活动的有用工具，但它不应是唯一的衡量标准。补充指标，如提交次数、代码审查和问题解决，提供了项目健康状况和进展的更全面视图，并识别需要改进或优化的领域。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/change_requests_accepted.json`

要获取特定存储库的数据，请将 `{platform}`，`{owner}` 和 `{repo}` 替换为实际名称。这里有一个 [示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests_accepted.json)。

## 代码

这里是 [**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L497)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Change Requests status" src="https://codepen.io/frank-zsy/embed/bGjPGxw?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjPGxw">
  OpenDigger - [CHAOSS] Change Requests status</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
