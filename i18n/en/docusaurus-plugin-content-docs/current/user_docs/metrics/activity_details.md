# Activity Details

![From](https://img.shields.io/badge/From-x--Lab-blue) ![For](https://img.shields.io/badge/For-Repo-blue)

## Definition

Activity Details is a metric defined by [X-Lab](https://github.com/X-lab2017). To gain a comprehensive understanding of this metric, you can refer to the corresponding [GitHub issue](https://github.com/X-lab2017/open-digger/issues/1186).

Activity Details serve as a valuable tool for tracking the monthly activity of each user within a repository. This encompasses all users, including both maintainers and regular users. By utilizing this metric, one can identify the activity level of each user within the repository on a monthly basis.

> This can be essential to identify the top developer and scores, displaying the repo's history of most active contributors, and more.


## Data

- **Link:** `https://oss.x-lab.info/open_digger/{platform}/{owner}/{repo}/activity_details.json`

To get the data for a certain repository, replace `{platform}`, `{owner}` and `{repo}` with the actual name. Here is an [example](https://oss.x-lab.info/open_digger/github/X-lab2017/open-digger/activity_details.json).


## Code

Here's the [**implementation code**](https://github.com/X-lab2017/open-digger/blob/0432ecbd9b9d75d36b249fb5eb2b101d16a414be/src/metrics/indices.ts#L112).


## CodePen Demo

<iframe height="600" scrolling="no" title="OpenDigger - [X-lab] Project Activity Details" src="https://codepen.io/tyn1998/embed/KKGxVrm?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/tyn1998/pen/KKGxVrm">
  OpenDigger - [X-lab] Project Activity Details</a> by tyn1998 (<a href="https://codepen.io/tyn1998">@tyn1998</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
