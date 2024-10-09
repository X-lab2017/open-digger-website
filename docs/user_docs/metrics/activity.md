# 活跃度

![From](https://img.shields.io/badge/来自-X--lab-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

活跃度（Activity）是由 [X-lab 开放实验室](https://github.com/X-lab2017)定义的一个指标。要全面理解这个指标，您可以参考赵生宇博士发表的[文章](https://my.oschina.net/u/4489239/blog/5290970)。

活跃度是一个统计型指标，其计算方式为：特定开发者在特定仓库上当月的活跃度为该月中该开发者所有各类协作行为的加权和的平方根，即 $ A_u = \sqrt{\sum{w_ic_i}} $ 。而仓库的活跃度即为当月该仓库中所有开发者的活跃度总和，即 $ A_r = \sum{A_u} = \sum_u{\sqrt{\sum{w_ic_i}}} $。

其中 $ c_i $ 为某协作行为的总次数，$ w_i $ 为对应协作行为的权重。根据 [AHP](https://zh.wikipedia.org/zh-cn/%E5%B1%A4%E7%B4%9A%E5%88%86%E6%9E%90%E6%B3%95) 分析的结果，目前将各类行为的权重设置如下：

| 行为 | 提交 Issue | Issue 评论 | 提交 PR | PR Review 评论 | PR 被合入 |
| --- | --- | --- | --- | --- | --- |
| 权重 | 2.2235 | 0.5252 | 4.0679 | 0.7427 | 2.0339 |

> 活跃度指标仅考虑对仓库有实质贡献的协作行为，并不考虑如 Star、Fork 等行为，因此这个指标对于识别仓库的活跃程度以及显示最活跃贡献者的历史活跃情况等非常重要。

## 数据

- **链接（基础）：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/activity.json`

- **链接（详情）：** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/activity_details.json`

要获取特定仓库的数据，请将 `{platform}`，`{owner}` 和 `{repo}` 替换为实际名称。这里有一个[活跃度示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/activity.json)以及[活跃度详情示例](https://oss.open-digger.cn/github/X-lab2017/open-digger/activity_details.json)。

其中活跃度数据包含该仓库历史的活跃度统计情况，而活跃度详情数据则包含该仓库活跃度的组成情况，即每个开发者在仓库中的活跃度细节。

## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L277)。

## CodePen 演示

### 活跃度演示

<iframe height="600" scrolling="no" title="OpenDigger - [X-lab] OpenRank/Activity/Bus Factor" src="https://codepen.io/frank-zsy/embed/bGjyqQj?type=activity&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjyqQj">
  OpenDigger - [X-lab] OpenRank/Activity/Bus Factor</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<br/>

### 活跃度详情演示

以下示例已在 [HyperCRX](https://github.com/hypertrons/hypertrons-crx) 中实现，安装 HyperCRX 插件后可以在仓库页面的 Perceptor 标签页中看到该组件。

<iframe height="600" scrolling="no" title="OpenDigger - [X-lab] Project Activity Details" src="https://codepen.io/tyn1998/embed/KKGxVrm?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tyn1998/pen/KKGxVrm">
  OpenDigger - [X-lab] Project Activity Details</a> by tyn1998 (<a href="https://codepen.io/tyn1998">@tyn1998</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
