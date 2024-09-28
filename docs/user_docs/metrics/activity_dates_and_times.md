# 活动日期和时间 

![From](https://img.shields.io/badge/来自-CHAOSS-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

活动日期和时间 (Activity Dates and Times) 是由 [CHAOSS](https://chaoss.community) 定义的指标，有关该指标的详细定义，请参阅 [CHAOSS Metrics - 活动日期和时间](https://chaoss.community/zh-CN/kb/metric-activity-dates-and-times/)。

该指标有助于确定存储库中单个活动发生的日期和时间戳。它还有助于确定存储库的活动情况以及存储库最活跃的时间。

> 这些数据可用于在时区不是 UTC 的情况下，概率性地估计贡献来自地球上的哪些地区。

## 数据

**链接：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/active_dates_and_times.json`

要获取特定存储库的数据，请将 `{platform}`，`{owner}` 和 `{repo}` 替换为实际名称。这里有一个[示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/active_dates_and_times.json)。

## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L960)。

## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS]Active dates and times" src="https://codepen.io/frank-zsy/embed/jOpQdZZ?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/jOpQdZZ">
  OpenDigger - [CHAOSS]Active dates and times</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
