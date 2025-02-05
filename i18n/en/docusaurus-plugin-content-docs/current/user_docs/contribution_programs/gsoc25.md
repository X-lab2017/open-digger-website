# GSoC 2025

This is OpenDigger's first year participating in the GSoC program. Below is an idea list provided by OpenDigger, from which developers can choose ideas they are interested in applying for.

### Idea 1: Migration of OpenLeaderboard (Recommended)

- **Mentors**: [@Neilblaze](https://github.com/Neilblaze), [@Frank](https://github.com/frank-zsy), [@Xiaoya](https://github.com/xiaoya-yaya)
- **Languages & Skills**: [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), [Docusaurus](https://docusaurus.io/)
- **Expected Development Time**: **350 hours**
- **Difficulty**: **Hard**
- **Related Issue**: https://github.com/X-lab2017/open-digger-website/issues/23
- **Idea Description**: OpenDigger's earliest leaderboard data was displayed using [OpenLeaderboard](https://open-leaderboard.x-lab.info/), which was jointly released with Alibaba and Ant Group OSPO at the 2022 OSPOCon in North America. Over the past two years, it has been an important channel for displaying OpenDigger data. However, OpenLeaderboard currently only supports simple data display, such as global and Chinese open-source repositories, enterprise, and developer leaderboards. It lacks features like cross-period statistics (e.g., multiple months), multi-dimensional aggregation (e.g., contributions in different countries within a specific technology field), and detailed data display (specific CHAOSS metrics within projects). Therefore, its use cases are limited. **This idea aims to have developers** collaborate closely with the OpenDigger team to design and develop a new leaderboard system and deploy it on the OpenDigger website. The new leaderboard should support the following functionalities:
  - **Ranking Scope**: The new leaderboard should support diverse label categories for ranking scope selection, such as administrative divisions, technology fields, enterprises, universities, etc. Users should be able to select specific label data for insights based on their needs.
  - **Indicator Data**: The new leaderboard should support more categories of indicator data, providing insight capabilities for various CHAOSS metrics beyond the current OpenRank leaderboard.
  - **Aggregation Methods**: Within the given ranking data range, the new leaderboard should support different aggregation methods for queries, such as contributions from different enterprises in the database field.
  - **Aggregation Periods**: The new leaderboard should allow users to choose different time periods for insights, such as across months or years.

### Idea 2: Add Organization-Level Contributor Leaderboard to OpenDigger Website (Recommended)

- **Mentors**: [@Neilblaze](https://github.com/Neilblaze), [@Xiaoya](https://github.com/xiaoya-yaya), [@Frank](https://github.com/frank-zsy)
- **Languages & Skills**: [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), [Docusaurus](https://docusaurus.io/)
- **Expected Development Time**: **175 hours**
- **Difficulty**: **Medium**
- **Related Issue**: https://github.com/X-lab2017/open-digger-website/issues/102
- **Idea Description**: The OpenRank contribution metric was introduced in 2022 and implemented within Alibaba Group. It was subsequently launched on the Alibaba Open Source official website as an open source project contribution ranking. Related papers were published at the top software engineering conference ICSE 2024. With the maturity of OpenDigger's data infrastructure, OpenDigger can now generate contribution data for almost all open-source projects. **This idea aims to have developers** collaborate closely with the OpenDigger team to define a data protocol for contributor leaderboards and implement a contribution ranking page similar to the one on the Alibaba Open Source official website. This will enable all organizations and projects to view the contribution levels of developers within their projects.

### Idea 3: Maintain More Label Data for OpenDigger

- **Mentors**: [@Frank](https://github.com/frank-zsy), [@Xiaoya](https://github.com/xiaoya-yaya), [@Zehua](https://github.com/birdflyi)
- **Languages & Skills**: [TypeScript](https://www.typescriptlang.org/), [Yaml](https://yaml.org/)
- **Expected Development Time**: **175 hours**
- **Difficulty**: **Medium**
- **Related Issue**: https://github.com/X-lab2017/open-digger/issues/1678
- **Idea Description**: OpenDigger primarily produces CHAOSS and OpenRank metrics for open-source repositories. To gain better insights into open-source data, we need richer and multi-dimensional aggregation methods, such as obtaining indicators related to countries, enterprises, and technology fields. These metrics heavily depend on high-quality label data. **This idea aims to have developers** collect label data across different dimensions (primarily enterprises, technology fields, and project groups) and store this data according to OpenDigger's format specifications in the OpenDigger repository, enabling subsequent metric production and open-source insights.

### Idea 4: Optimize and Integrate OpenDigger Project Dashboard into OpenDigger Website

- **Mentors**: [@Jiaheng](https://github.com/Peng99999), [@Frank](https://github.com/frank-zsy), [@Xiaoya](https://github.com/xiaoya-yaya)
- **Languages & Skills**: [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), [Docusaurus](https://docusaurus.io/), [DataV](https://github.com/DataV-Team/DataV)
- **Expected Development Time**: **90 hours**
- **Difficulty**: **Easy**
- **Related Issue**: https://github.com/X-lab2017/open-digger-website/issues/103
- **Idea Description**: OpenDigger has already produced a variety of metric data and used DataV technology to create and deploy the OpenDashboard project dashboard, which can be used for comparing and gaining insights into multiple projects' metrics. **This idea aims to have developers** delve into OpenDigger's metric data and learn DataV dashboard visualization technology. They should optimize the project dashboard while integrating it into the OpenDigger website.

### Idea 5: Develop a Landscape Component for Observing Technology Ecosystem Projects on OpenDigger Website

- **Mentors**: [@Xiaoya](https://github.com/xiaoya-yaya), [@Jiaheng](https://github.com/Peng99999), [@Frank](https://github.com/frank-zsy)
- **Languages & Skills**: [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), [Docusaurus](https://docusaurus.io/)
- **Expected Development Time**: **350 hours**
- **Difficulty**: **Hard**
- **Related Issue**: https://github.com/X-lab2017/open-digger-website/issues/104
- **Idea Description**: OpenDigger has already generated a vast amount of open-source project metric data and has a multi-level label system for some technology fields. Based on this, we can further aggregate and visualize different technology landscapes to help developers gain deeper insights into technology fields. **This idea aims to have developers** deeply study existing landscape development technologies (such as CNCF Landscape) and integrate them with OpenDigger data. They should customize and enhance the visualization, ultimately forming an interactive, insightful open-source project landscape and integrating it into the OpenDigger website.
