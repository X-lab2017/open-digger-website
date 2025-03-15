# 全域 OpenRank 影响力

![From](https://img.shields.io/badge/来自-X--lab-blue) ![For](https://img.shields.io/badge/用于-项目/开发者-blue)

## 定义

全域 OpenRank 影响力是一个由 X-lab 开放实验室提出的开源指标，该指标由赵生宇博士提出，关于全域 OpenRank 影响力的算法细节可以参考[这篇博客](https://blog.frankzhao.cn/how_to_measure_open_source_3)。

全域 OpenRank 影响力是[`活跃度`](./activity)指标的一个下游指标，借鉴了`活跃度`来构建 GitHub 全域项目与开发者之间的一个协作网络，其网络模型是：

<div style={{'text-align':'center'}}>
  <embed src="/img/global_openrank.svg?lang=zh" width="80%" alt="Global OpenRank" />
</div>

## 价值主张

全域 OpenRank 影响力使用所有全域开发者与仓库的协作关系构建协作网络，并使用 OpenRank 算法进行评价，其基本价值主张是：

- 影响力大的项目更容易吸引到更多更有影响力的开发者深度参与。
- 更多的深度参与影响力大的项目会让开发者更有影响力。
- 全域 OpenRank 的计算会部分继承历史数据，从而体现出对于长期主义的重视

## 指标特点

- 由于 OpenRank 是通过协作关系构建的网络指标，相较统计型指标有很强的鲁棒性。即便不做额外处理，如果出现相当比例的数据缺失，OpenRank 依然有很好的平滑性。
- 通过网络关系，可以很好的识别和过滤自动化行为带来的高活跃节点，使得这些节点无法因为高活跃而获得高排名（如 [pddemo](https://github.com/pddemo/demo)）。
- 由于重视长期价值，一些有大量初级开发者参与的学习型仓库并不会获得非常高的排名，因为参与的开发者主要是刚进入开源世界的开发者，而资深开发者则不会深度参与。（如 [first-contributions](https://github.com/firstcontributions/first-contributions)）。

## 代码

这里是 [**实现代码**](https://github.com/X-lab2017/open-digger/blob/master/src/cron/tasks/global_openrank.ts)。

其底层使用的用于计算通用 OpenRank 的 Neo4j [插件项目](https://github.com/X-lab2017/openrank-neo4j-gds)已经开源，欢迎大家使用。

## 参数

全域 OpenRank 的计算中包含的参数如下：

| 参数名 | 值 | 参数描述 | 注 |
| :------------- | :---- | :---------- | :--- |
| 仓库 OpenRank 默认值 | $0$ | 协作网络中新增仓库节点的默认值 | 该算法认为协作网络中的价值均应来自开发者的活跃，因此仓库节点默认不提供价值 |
| 开发者 OpenRank 默认值 | $0$ | 协作网络中新增开发者节点的默认值 | 该算法认为协作网络中的价值来自开发者活跃，因此开发者默认不提供价值 |
| 开发者 OpenRank 增值 | $\frac{1}{1+e^{0.1*(-x+44.08)}}$ | 每次计算时开发者节点的 OpenRank 增值 | 网络中所有价值均来自开发者当月活跃带来的 OpenRank 增值。其中 44.08 为全域开发者每月活跃度分布上四分位数的一半，这里使用 Sigmod 归一化减少低活跃开发者的影响 |
| 开发者继承比例 | $0.5$ | 开发者节点对于上个月 OpenRank 的依赖比例 | 该算法认为相较于仓库，开发者的价值更应体现出开源中的长期价值，因此开发者对于历史价值的依赖度较高 |
| 仓库继承比例 | $0.3$ | 仓库节点对于上个月 OpenRank 的依赖比例 | |
| OpenRank 衰减系数 | $0.85$ | 对于当月不活跃的开发者和仓库节点的 OpenRank 衰减比例 | 所有节点无论是否活跃，均会在当月有一定衰减，从而需要额外的开发者活跃来维持网络价值 |
| OpenRank 最小值 | $1$ | 当节点 OpenRank 衰减至该值以下时清空节点 OpenRank | |
