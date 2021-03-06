# OpenDigger

[![apache2](https://img.shields.io/badge/license-Apache%202-blue)](LICENSE) [![ccby4](https://img.shields.io/badge/license-CC%20BY%204.0-blue)](LICENSE-CC-BY) [![slack](https://img.shields.io/badge/slack-join%20chat-green)](https://join.slack.com/t/x-github-analysis/shared_invite/zt-sf7iypjm-ze6xm0vlLLwq9mwd6BWqzw)

Open digger is an open source analysis report project for all open source data initiated by [X-lab](https://x-lab.info), this project aims to combine the wisdom of global developers to jointly analyze and insight into open source related data to help everyone better understand and participate in open source.

## Report

We will generate reports into static web pages for viewing. Currently, we have following reports,

- [Global Study Report](http://opendigger-oss.x-lab.info/global-study.html)
- [Chinese Open Source Study Report](http://opendigger-oss.x-lab.info/case-study-Chinese.html)
- [Apache Software Foundation Study Report](http://opendigger-oss.x-lab.info/case-study-ASF.html)
- [Visual Studio Code Study Report](http://opendigger-oss.x-lab.info/case-study-vscode.html)

## Data

### GitHub Event Log

We use [GHArchive](https://www.gharchive.org/) as our data source for GitHub event logs and the data service is provided by [clickhouse](https://clickhouse.tech/) cluster cloud service. For data details, please check the [data](https://github.com/X-lab2017/open-digger/blob/master/docs/DATA.md) docs.

## Contributing guide

Please check the [contributing guide](https://www.x-lab.info/open-digger/#/CONTRIBUTING) first if you want to be part of the report.

## Architect & workflow

Please check the [architect](https://www.x-lab.info/open-digger/#/architecture) and [workflow](https://www.x-lab.info/open-digger/#/workflow) if you want to better understand the project.

## Community Meeting

Meeting Room: ([Tencent Meeting](https://meeting.tencent.com/) Room ID: 627 8609 7587) Every Thursday at 12:00 am GMT+8

Meeting Document: [OpenDigger Open Source Meeting](https://shimo.im/docs/THkd6GQYtTj6PT3t)

## License

We use [Apache-2.0 license](LICENSE) for code part and [CC-BY-4.0 license](LICENSE-CC-BY) for report part, please make sure abide by the licenses when using the project.
