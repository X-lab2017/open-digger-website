# Change Requests Reviews

![From](https://img.shields.io/badge/From-CHAOSS-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Change Requests Reviews is a metric defined by [CHAOSS](https://chaoss.community), see [CHAOSS Metrics - Change Request Reviews](https://chaoss.community/kb/metric-change-request-reviews/) for a detailed definition of this metric.

This metric is a critical component of the software development process, ensuring that proposed modifications to the codebase are thoroughly evaluated before integration. This process involves assessing the quality of the change and ensuring it aligns with project guidelines. Reviews can suggest improvements or necessary changes prior to merging, thereby promoting software quality and adherence to best practices.

> Software engineering research has long recognized the importance of code reviews for enhancing software quality (Baker et al, 1997; Kemerer et al, 2009). Formal reviews ensure that changes meet project standards and contribute to overall code health. This infact is crucial for maintaining the integrity of the codebase and fostering a collaborative development environment.


## Data

**Link:** `https://oss.open-digger.cn/{platform}/{owner}/{repo}/change_requests_reviews.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.open-digger.cn/github/X-lab2017/open-digger/change_requests_reviews.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/master/src/metrics/chaoss.ts#L734).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [CHAOSS] Change Requests Reviews" src="https://codepen.io/frank-zsy/embed/bGjPGxw?default-tab=js%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/frank-zsy/pen/bGjPGxw">
  OpenDigger - [CHAOSS] Change Requests Reviews</a> by Frank Zhao (<a href="https://codepen.io/frank-zsy">@frank-zsy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
