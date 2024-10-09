# Activity

![From](https://img.shields.io/badge/From-x--Lab-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Activity is a metric defined by [X-lab Open Laboratory](https://github.com/X-lab2017). To fully understand this metric, you can refer to [the article](https://my.oschina.net/u/4489239/blog/5290970) published by Dr. Zhao Shengyu.

Activity is a statistical indicator, which is calculated as follows: the activity of a specific developer in a specific repository for a month is the square root of the weighted sum of all collaborative behaviors of that developer in that month, i.e., $ A_u = \sqrt{\sum{w_ic_i}} $. The activity of the repository is the sum of the activity of all developers in the repository for that month, i.e., $ A_r = \sum{A_u} = \sum_u{\sqrt{\sum{w_ic_i}}} $.

Where $c_i$ is the total number of a certain collaborative behavior, and $w_i$ is the weight of the corresponding collaborative behavior. According to the results of the [AHP](https://zh.wikipedia.org/zh-cn/%E5%B1%A4%E7%B4%9A%E5%88%86%E6%9E%90%E6%B3%95) analysis, the weights of various behaviors are currently set as follows:

| Behavior | Submit Issue | Issue Comment | Submit PR | PR Review Comment | PR Merged |
| --- | --- | --- | --- | --- | --- |
| Weight | 2.2235 | 0.5252 | 4.0679 | 0.7427 | 2.0339 |

> The activity indicator only considers collaborative behaviors that have substantial contributions to the repository and does not consider behaviors such as Star, Fork, etc. Therefore, this indicator is very important for identifying the activity level of the repository and displaying the historical activity situation of the most active contributors.


## Data

- **Link (Basic):** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/activity.json`

- **Link (Details):** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/activity_details.json`

To obtain data for a specific repository, please replace `{platform}`, `{owner}`, and `{repo}` with the actual names. Here is an [activity example](https://oss.open-digger.cn/github/X-lab2017/open-digger/activity.json) and an [activity details example](https://oss.open-digger.cn/github/X-lab2017/open-digger/activity_details.json).

The activity data contains the historical activity statistics of the repository, while the activity details data contains the composition of the repository's activity, i.e., the activity details of each developer in the repository.


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/indices.ts#L277).


## CodePen Demo

### Activity Demo

<iframe height="600" scrolling="no" title="OpenDigger - [X-lab] OpenRank/Activity/Bus Factor" src="https://codepen.io/frank-zsy/embed/bGjyqQj?type=activity&default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjyqQj">
  OpenDigger - [X-lab] OpenRank/Activity/Bus Factor</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<br/>

### Activity Details Demo

The following example has been implemented in [HyperCRX](https://github.com/hypertrons/hypertrons-crx), which can be seen in the Perceptor tab of the repository page after installing the HyperCRX plugin.

<iframe height="600" scrolling="no" title="OpenDigger - [X-lab] Project Activity Details" src="https://codepen.io/tyn1998/embed/KKGxVrm?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tyn1998/pen/KKGxVrm">
  OpenDigger - [X-lab] Project Activity Details</a> by tyn1998 (<a href="https://codepen.io/tyn1998">@tyn1998</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
