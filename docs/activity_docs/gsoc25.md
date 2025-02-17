# Google Summer of Code 2025

这是 OpenDigger 首次申请成为 Google Summer of Code (GSoC) 2025 的指导组织，旨在迎接新一代开源贡献者和爱好者。

![gsoc-25](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Summer_of_Code_logo_%282021%29.svg/2560px-Google_Summer_of_Code_logo_%282021%29.svg.png)

有关 Google Summer of Code 2025 的详细规则，请访问 [GSoC 2025 官方网站](https://summerofcode.withgoogle.com/)。时间表详见[Google Summer of Code 2025 时间表](https://developers.google.com/open-source/gsoc/timeline)。

---

## 在您申请之前 👀

几乎任何年满 18 岁且热爱编程、希望探索开源世界的人都可以加入我们，成为 GSoC 2025 贡献者。

请仔细阅读由 Google Summer of Code 组织者编写的[贡献者指南](https://google.github.io/gsocguides/student/)。此外，感兴趣的贡献者还被鼓励直接在我们的 [Slack](https://opendigger.slack.com) #opendigger 频道与团队和社区互动。

- 在开始填写提案前，务必与导师联系，详细讨论您的解决方案和技术方案。

- 尽早分享您的提案初稿：
  - 提案应包含对项目想法的清晰理解，并附有详细的每周计划和明确的里程碑及可交付成果。
  - 如果您计划提出自己的任务想法，请包括任务描述和目标（如“任务列表”中所述）以及详细的每周计划和明确的里程碑及可交付成果。

- 以文本、Markdown、Google Docs 或其他无需下载的易于共享格式分享提案链接。欢迎包含相关插图或图片进行说明。

- 最终提案应在截止日期前提交到 Google Summer of Code 网站，并在完成所有审查后提交。

---

## 任务列表 📂

这是 OpenDigger 第一年参与 GSoC 项目，如下是 OpenDigger 提供的任务列表，开发者可以在这些任务列表中选择自己感兴趣的任务进行申请。

### 任务一：OpenLeaderboard 迁移（推荐）

- **导师**：[@Neilblaze](https://github.com/Neilblaze)、[@Frank](https://github.com/frank-zsy)、[@Xiaoya](https://github.com/xiaoya-yaya)
- **语言与技能**：[TypeScript](https://www.typescriptlang.org/)、[React](https://react.dev/)、[Docusaurus](https://docusaurus.io/)
- **预期开发时长**：**350 小时**
- **难度**：**困难**
- **相关 Issue**: https://github.com/X-lab2017/open-digger-website/issues/23
- **任务描述**：OpenDigger 最早的排行榜数据使用 [OpenLeaderboard](https://open-leaderboard.x-lab.info/) 做简单展示，该项目于 2022 OSPOCon 在北美与阿里巴巴和蚂蚁集团 OSPO 共同发布，过去两年多中是 OpenDigger 数据的重要展示渠道之一。但目前 OpenLeaderboard 只能做较简单的数据展示，包括全球与中国开源仓库、企业与开发者排行榜，并且不具备跨时段（如指定多个月）统计、多维聚合（如某技术领域中不同国家的贡献）、数据细节展示（项目内具体各项 [CHAOSS 指标](https://chaoss.community/kb-metrics-and-metrics-models/)）等，因此使用场景有限。
- **任务目标**：该任务希望开发者可以和 OpenDigger 团队紧密合作，设计和开发一个全新的排行榜榜单，并上线至 OpenDigger 官网。该榜单系统应支持如下功能：
  - **排行范围**：新版排行榜应支持多样的标签种类作为排行榜范围选择，例如行政区划、技术领域、企业、高校等各类别，在排行时可按照需求选择特定的标签数据进行洞察。
  - **指标数据**：新版排行榜应支持更多类别的指标数据，在 OpenRank 排行榜基础之上提供各类 CHAOSS 指标的洞察能力。
  - **聚合方式**：新版排行榜在给定的排行数据范围内，应支持不同的聚合方式进行查询，例如数据库领域中不同企业的贡献。
  - **聚合时段**：新版排行榜应可以选择不同的时段进行洞察，如跨月或跨年。

### 任务二：为 OpenDigger 官网添加组织级别的贡献者榜单

- **导师**：[@Neilblaze](https://github.com/Neilblaze)、[@Xiaoya](https://github.com/xiaoya-yaya)、[@Frank](https://github.com/frank-zsy)
- **语言与技能**：[TypeScript](https://www.typescriptlang.org/)、[React](https://react.dev/)、[Docusaurus](https://docusaurus.io/)
- **预期开发时长**：**175 小时**
- **难度**：**中等**
- **相关 Issue**: https://github.com/X-lab2017/open-digger-website/issues/102
- **任务描述**：OpenRank 贡献度指标在 2022 年被提出并在阿里巴巴集团落地，后续在阿里巴巴集团开源官网上线了[阿里巴巴开源项目贡献度排行榜](https://opensource.alibaba.com/contribution_leaderboard/details)，并且相关论文发表在软件工程学术顶会 [ICSE 2024](https://dl.acm.org/doi/10.1145/3639477.3639734)。随着 OpenDigger 数据基础设施的成熟，目前 OpenDigger 可以为几乎所有开源项目生成贡献度数据。
- **任务目标**：该任务希望开发者可以与 OpenDigger 团队紧密合作，定义贡献者榜单的数据协议，并实现类似于阿里巴巴开源官网中的贡献度排行榜页面。这将使所有组织和项目能够查看其内部开发者的贡献水平。该功能将为组织提供有价值的开发者贡献洞察，帮助构建更透明和高效协作的开源生态系统。预期成果包括：
  - 功能性的贡献者排行榜系统并集成到 OpenDigger 网站。
  - 数据协议和 API 规范的文档。
  - 显示和交互贡献数据的一致 UI 组件。
  - 与现有 OpenDigger 数据基础设施的集成。

### 任务三：为 OpenDigger 新增维护更多的标签数据

- **导师**：[@Frank](https://github.com/frank-zsy)、[@Xiaoya](https://github.com/xiaoya-yaya)、[@Zehua](https://github.com/birdflyi)
- **语言与技能**：[TypeScript](https://www.typescriptlang.org/)、[Yaml](https://yaml.org/)
- **预期开发时长**：**175 小时**
- **难度**：**中等**
- **相关 Issue**: https://github.com/X-lab2017/open-digger/issues/1678
- **任务描述**：OpenDigger 以生产开源仓库的 CHAOSS 与 OpenRank 指标数据为主，但想要获得更好的开源数据洞察，我们需要更加丰富和多维度的聚合方式，例如获取国家、企业、技术领域等相关的指标，这些指标的生产高度依赖高质量的标签数据。
- **任务目标**：该任务希望开发者可以收集不同维度（主要以企业、技术领域、项目群为主）的开源相关标签数据，并将这些标签数据依照 OpenDigger 的格式规范落库到 OpenDigger 仓库之中，以便于后续的指标生产和开源洞察。

### 任务四：优化 OpenDigger 项目看板并将其集成至 OpenDigger 官网

- **导师**：[@Jiaheng](https://github.com/Peng99999)、[@Frank](https://github.com/frank-zsy)、[@Xiaoya](https://github.com/xiaoya-yaya)
- **语言与技能**：[TypeScript](https://www.typescriptlang.org/)、[React](https://react.dev/)、[Docusaurus](https://docusaurus.io/)、[DataV](https://github.com/DataV-Team/DataV)
- **预期开发时长**：**90 小时**
- **难度**：**简单**
- **相关 Issue**: https://github.com/X-lab2017/open-digger-website/issues/103
- **任务描述**：OpenDigger 基于目前已经生产的指标数据，并利用 DataV 技术生产部署了项目看板 OpenDashboard，可用于多项目之间的指标对比与洞察。
- **任务目标**：该任务希望开发者可以深入理解 OpenDigger 指标数据，并学习 DataV 看板可视化看板技术，在优化项目看板的同时将其集成至 OpenDigger 官网。

### 任务五：为 OpenDigger 官网开发用于观察技术生态项目的 Landscape 组件

- **导师**：[@Xiaoya](https://github.com/xiaoya-yaya)、[@Jiaheng](https://github.com/Peng99999)、[@Frank](https://github.com/frank-zsy)
- **语言与技能**：[TypeScript](https://www.typescriptlang.org/)、[React](https://react.dev/)、[Docusaurus](https://docusaurus.io/)
- **预期开发时长**：**350 小时**
- **难度**：**困难**
- **相关 Issue**: https://github.com/X-lab2017/open-digger-website/issues/104
- **任务描述**：OpenDigger 已经生成了海量的开源项目指标数据，并具有一些技术领域的多级标签体系，在此基础之上我们可以进一步通过可视化聚合的方式来生成不同技术领域的 Landscape 并帮助开发者进行基于技术领域的深度洞察。
- **任务目标**：该任务希望开发者可以深入学习已有的 Landscape 开发技术（如 [CNCF Landscape](https://landscape.cncf.io/)），并将其与 OpenDigger 数据进行深度融合，配合 OpenDigger 数据进行可视化的定制与增强，最终形成可交互、具有洞察能力的开源项目 Landscape 并集成至 OpenDigger 官网。


🔔 **注意**: “推荐”是“高优先级”的同义词。

如果您有不在我们任务列表中的想法和提案，或者无法触达到导师，请发送邮件[这里](mailto:syzhao1988@126.com)。否则，请在 GitHub 仓库中[提交 Issue](https://github.com/X-lab2017/open-digger-website/issues/new?template=Blank+issue)，并提醒 [@Frank](https://github.com/frank-zsy) 或 [@Neilblaze](https://github.com/Neilblaze)。
