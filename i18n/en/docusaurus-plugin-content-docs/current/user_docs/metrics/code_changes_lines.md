# Code Changes Lines

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Code Changes Lines is a metric defined by the [CHAOSS community](https://chaoss.community). For a detailed definition of this metric, please refer to [CHAOSS Metrics - Code Changes Lines](https://chaoss.community/kb/metric-code-changes-lines/).

The Code Changes Lines metric considers the aggregated number of lines touched by changes to the source code performed during a certain period. This means that if a certain line in a certain file is touched in three different changes, it will count as three lines. Since in most source code management systems it is difficult or impossible to tell accurately if a line was removed and then added, or just edited, we will consider editing a line as removing it and later adding it back with new content. Each of those (removing and adding) will be considered as "touching". Therefore, if a certain line in a certain file is edited three times, it will count as six different changes (three removals, and three additions).

> The Code Changes Lines metric provides insights into the volume of code changes, helping to understand the activity and effort involved in maintaining and developing the source code.


## Data

- **Link (add):** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/code_change_lines_add.json`
- **Link (remove):** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/code_change_lines_remove.json`
- **Link (sum):** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/code_change_lines_sum.json`


To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. For the *add* variant, here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/code_change_lines_add.json). Similarly, for the *remove* variant, refer to this [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/code_change_lines_remove.json) & for the *sum* variant, refer to this [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/code_change_lines_sum.json).

## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L94).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Code Change Lines" src="https://codepen.io/frank-zsy/embed/dyjByKL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/dyjByKL">
  OpenDigger - [CHAOSS] Code Change Lines</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
