# 活动详情(Activity Details)

![From](https://img.shields.io/badge/来自-x--Lab-blue) ![For](https://img.shields.io/badge/用于-仓库-blue)

## 定义

活动详情是由[X-Lab](https://github.com/X-lab2017)定义的一个指标。要全面理解这个指标，您可以参考相应的[GitHub issue](https://github.com/X-lab2017/open-digger/issues/1186)。

活动详情是跟踪存储库中每个用户的月度活动的有价值工具。这包括所有用户，包括维护者和普通用户。通过利用这个指标，可以识别存储库中每个用户的月度活动水平。

> 这个指标对于识别顶级开发人员和分数、显示最活跃贡献者的存储库历史等非常重要。


## 数据

- **链接：** `https://oss.x-lab.info/open_digger/{platform}/{owner}/{repo}/activity_details.json`

要获取特定存储库的数据，请将`{platform}`，`{owner}`和`{repo}`替换为实际名称。这里有一个[示例](https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/activity_details.json)。

## 代码

这里是[**实现代码**](https://github.com/X-lab2017/open-digger/blob/0432ecbd9b9d75d36b249fb5eb2b101d16a414be/src/metrics/indices.ts#L112)。


## CodePen 演示

<iframe height="600" scrolling="no" title="OpenDigger - [X-lab] Project Activity Details" src="https://codepen.io/tyn1998/embed/KKGxVrm?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tyn1998/pen/KKGxVrm">
  OpenDigger - [X-lab] Project Activity Details</a> by tyn1998 (<a href="https://codepen.io/tyn1998">@tyn1998</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
