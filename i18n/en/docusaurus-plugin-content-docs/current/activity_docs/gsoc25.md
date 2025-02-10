# Google Summer of Code 2025

This marks OpenDigger's inaugural year applying to become a mentoring organization for [Google Summer of Code](https://g.co/gsoc) (GSoC) 2025, helping to usher in a new generation of open-source contributors and enthusiasts. 

![gsoc-25](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Summer_of_Code_logo_%282021%29.svg/2560px-Google_Summer_of_Code_logo_%282021%29.svg.png)

For details and rules of Google Summer of Code 2025, please visit the [GSoC 2025 Official Website](https://summerofcode.withgoogle.com/). For timeline, see [Official Google Summer of Code 2025 Timeline](https://developers.google.com/open-source/gsoc/timeline) for more details.

---

## Before you apply 👀

Almost anyone in the world over 18 years of age who loves coding and wants to explore the incredible world of open source can join us as a GSoC 2025 contributor.

Read the [Contributor Guide](https://google.github.io/gsocguides/student/) written by the Google Summer of Code organizers. Moreover,

- Interested contributors are also encouraged to interact directly with our team and community on the `#opendigger` channel on [Slack](https://opendigger.slack.com).

- Make sure to reach out and interact with the mentors to discuss your solution and approach towards a project idea before starting to fill in the proposal.

- Share the first draft of your proposal as early as possible.
    - Your proposal should contain a clear understanding on how you're going to approach the project idea, along with a well-defined weekly schedule with clear milestones and deliverables around it.
    - If you plan to propose your own project idea, please include a project outline, goals (as done in Ideas List below) and a well-defined weekly schedule with clear milestones and deliverables around it.s

- Share the proposal link as text, markdown, Google Docs, or any other easily shareable format that does not require downloads. Feel free to include illustrations or images related to the context (if applicable).

- Final proposals should be submitted on the Google Summer of Code website before the deadline and after all the reviews have been done.





## Project Ideas 📂

Below, we’ve compiled a list of project ideas, offering developers the opportunity to explore and apply for proposals based on their interests.


### Idea 1: Migration of OpenLeaderboard (Recommended)

- 👥 **Mentor(s)**: [@Neilblaze](https://github.com/Neilblaze), [@Frank](https://github.com/frank-zsy), [@Xiaoya](https://github.com/xiaoya-yaya)
- 💪 **Languages & Skills**: [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), [Docusaurus](https://docusaurus.io/), [Node.js](https://nodejs.org/en/)
- ⌛ **Expected Development Time**: 350 hours (Large)
- 📈 **Difficulty**: Advanced / Hard
- 📎 **Related Issue**: https://github.com/X-lab2017/open-digger-website/issues/23
- 💬 **Idea Description**: OpenDigger's initial leaderboard data was showcased using [OpenLeaderboard](https://open-leaderboard.x-lab.info/), launched in joint collaboration with Alibaba and Ant Group OSPO at the 2022 OSPOCon North America. Over the past two years, it has served as a key platform for displaying OpenDigger data. However, OpenLeaderboard currently offers limited functionality, supporting only basic data displays such as global and Chinese open-source repositories, enterprise, and developer leaderboards. It lacks features like cross-period statistics (e.g., multiple months), multi-dimensional aggregation (e.g., contributions in different countries within a specific technology field), and detailed data display (specific [CHAOSS metrics](https://chaoss.community/kb-metrics-and-metrics-models/) within projects). Hence, its use cases are limited. 
- 🎯 **Goals/Deliverables**: This idea aims to invite developers to collaborate closely with the OpenDigger team to design and develop a new leaderboard system, which will be deployed on the OpenDigger website. The new leaderboard should support the following functionalities:
  - **Ranking Scope**: The new leaderboard should support diverse label categories for ranking scope selection, such as administrative divisions, technology fields, enterprises, universities, etc.. Users should be able to filter data based on specific labels for tailored insights.
  - **Indicator Data**: Expand the range of indicator data categories, enabling insights into various CHAOSS metrics beyond the current OpenRank leaderboard.
  - **Aggregation Methods**: Allow users to apply different aggregation methods within a selected data range, such as analyzing contributions from various enterprises in the database field.
  - **Aggregation Periods**: Enable users to choose different time periods (e.g., months or years) for data analysis and insights.


### Idea 2: Add Organization-Level Contributor Leaderboard to OpenDigger Website (Recommended)

- 👥 **Mentors**: [@Neilblaze](https://github.com/Neilblaze), [@Xiaoya](https://github.com/xiaoya-yaya), [@Frank](https://github.com/frank-zsy)
- 💪 **Languages & Skills**: [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), [Docusaurus](https://docusaurus.io/), [Node.js](https://nodejs.org/en/)
- ⌛ **Expected Development Time**: 175 hours (Medium)
- 📈 **Difficulty**: Intermediate / Hard
- 📎 **Related Issue**: https://github.com/X-lab2017/open-digger-website/issues/102
- 💬 **Idea Description**: The OpenRank contribution metric was introduced in 2022 and implemented within Alibaba Group. It was subsequently launched on the Alibaba Open Source official website as an [open source project contribution ranking](https://opensource.alibaba.com/contribution_leaderboard/details). Related papers were published at the top software engineering conference [ICSE 2024](https://dl.acm.org/doi/10.1145/3639477.3639734). With the maturity of OpenDigger's data infrastructure, OpenDigger can now generate contribution data for almost all open-source projects. 
- 🎯 **Goals/Deliverables**: This idea aims to have developers collaborate closely with the OpenDigger team to define a data protocol for contributor leaderboards and implement a contribution ranking page similar to the one on the Alibaba Open Source official website. This will enable all organizations and projects to view the contribution levels of developers within their projects. The successful implementation will provide organizations with valuable insights into developer contributions and help foster a more transparent and collaborative open-source ecosystem. The following are the expected outcomes:
  - A functional contributor leaderboard system integrated into the OpenDigger website.
  - Documentation for the data protocol and API specifications.
  - Consistent UI components for displaying and interacting with contribution data.
  - Integration with existing OpenDigger data infrastructure.


### Idea 3: Maintain More Label Data for OpenDigger

- 👥 **Mentors**: [@Frank](https://github.com/frank-zsy), [@Xiaoya](https://github.com/xiaoya-yaya), [@Zehua](https://github.com/birdflyi)
- 💪 **Languages & Skills**: [TypeScript](https://www.typescriptlang.org/), [Yaml](https://yaml.org/), [Node.js](https://nodejs.org/en/)
- ⌛ **Expected Development Time**: 175 hours (Medium)
- 📈 **Difficulty**: Intermediate / Medium
- 📎 **Related Issue**: https://github.com/X-lab2017/open-digger/issues/1678
- 💬 **Idea Description**: OpenDigger primarily produces CHAOSS and OpenRank metrics for open-source repositories. To gain better insights into open-source data, we need richer and multi-dimensional aggregation methods, such as obtaining indicators related to countries, enterprises, and technology fields. These metrics heavily depend on high-quality label data. 
- 🎯 **Goals/Deliverables**: This idea aims to have developers collect label data across different dimensions (primarily enterprises, technology fields, and project groups) and store this data according to OpenDigger's format specifications in the OpenDigger repository, enabling subsequent metric production and open-source insights.


### Idea 4: Optimize and Integrate OpenDigger Project Dashboard into OpenDigger Website

- 👥 **Mentors**: [@Jiaheng](https://github.com/Peng99999), [@Frank](https://github.com/frank-zsy), [@Xiaoya](https://github.com/xiaoya-yaya)
- 💪 **Languages & Skills**: [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), [Docusaurus](https://docusaurus.io/), [DataV](https://github.com/DataV-Team/DataV), [Node.js](https://nodejs.org/en/)
- ⌛ **Expected Development Time**: 90 hours (Small)
- 📈 **Difficulty**: Easy / Intermediate
- 📎 **Related Issue**: https://github.com/X-lab2017/open-digger-website/issues/103
- 💬 **Idea Description**: OpenDigger has already produced a variety of metric data and used DataV technology to create and deploy the OpenDashboard project dashboard, which can be used for comparing and gaining insights into multiple projects' metrics. 
- 🎯 **Goals/Deliverables**: This idea aims to have developers delve into OpenDigger's metric data and learn DataV dashboard visualization technology. They should optimize the project dashboard while integrating it into the OpenDigger website.


### Idea 5: Develop a Landscape Component for Observing Technology Ecosystem Projects on OpenDigger Website

- 👥 **Mentors**: [@Xiaoya](https://github.com/xiaoya-yaya), [@Jiaheng](https://github.com/Peng99999), [@Frank](https://github.com/frank-zsy)
- 💪 **Languages & Skills**: [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), [Docusaurus](https://docusaurus.io/), [Node.js](https://nodejs.org/en/)
- ⌛ **Expected Development Time**: 350 hours (Large)
- 📈 **Difficulty**: Advanced / Hard
- 📎 **Related Issue**: https://github.com/X-lab2017/open-digger-website/issues/104
- 💬 **Idea Description**: OpenDigger has already generated a vast amount of open-source project metric data and has a multi-level label system for some technology fields. Based on this, we can further aggregate and visualize different technology landscapes to help developers gain deeper insights into technology fields. 
- 🎯 **Goals/Deliverables**: This idea aims to have developers deeply study existing landscape development technologies (such as [CNCF Landscape](https://landscape.cncf.io/)) and integrate them with OpenDigger data. They should customize and enhance the visualization, ultimately forming an interactive, insightful open-source project landscape and integrating it into the OpenDigger website.
ㅤ
ㅤ
ㅤ

🔔 **NOTE**: "Recommended" is a synonym for "High Priority".

If you have ideas and proposals that are not on our idea list, or if a mentor is not available, shoot an email [here](mailto:syzhao1988@126.com). Else, please open a [new issue](https://github.com/X-lab2017/open-digger-website/issues/new?template=Blank+issue) and tag [@Frank](https://github.com/frank-zsy) and or [@Neilblaze](https://github.com/Neilblaze).
