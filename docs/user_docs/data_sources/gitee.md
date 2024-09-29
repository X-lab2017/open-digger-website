# Gitee

## 数据来源

OpenDigger 与 [Gitee](https://gitee.com/) 进行官方合作，在内部长期维护 [GVP](https://gitee.com/gvp) 项目清单，并通过 [Gitee API](https://gitee.com/api/v5/swagger#/getV5ReposOwnerRepoEvents) 对所有 GVP 项目进行历史事件日志采集工作。

数据采集、清洗与入库的相关代码目前并未开源至 OpenDigger 项目，作为定时任务每天运行并导入数据到数据库。

所有 Gitee 仓库的数据均会导出指标数据，如果您发现您的项目不在[导出列表](../metrics/metrics_usage_guide#导出范围)，请在 OpenDigger 仓库中提交 Issue，我们会将您的仓库加入到采集列表，同时也支持直接加入一个组织。

## 注意

由于 Gitee 的 Issues 与 Pull Request 使用了不同的编号体系，为了兼容 GitHub 的纯数字编号体系，我们对 Gitee 的 Issues 编号做了额外的处理，将其看做是 36 进制数字并转换成 10 进制后进行存储，所以在使用时如果需要恢复 Issues 编号，请将其转换成 36 进制即可。

以下是 JavaScript 中进行 10 进制与 36 进制数转换的示例：

```JavaScript
const rawIssueNumber = 'I1R';

// 36 进制转换成 10 进制
const issueNumber = parseInt(rawIssueNumber, 36);
console.log(issueNumber);   // 23391

// 10 进制转换成 36 进制
console.log(issueNumber.toString(36).toUpperCase());  // I1R
```
