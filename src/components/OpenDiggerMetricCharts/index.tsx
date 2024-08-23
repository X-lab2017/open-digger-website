import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactECharts from 'echarts-for-react';
import { translate } from '@docusaurus/Translate';
import SearchInput, { repoMetricOptionMap, userMetricOptionMap } from '../SearchInput';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default (): JSX.Element => {

  const echartsRef = useRef(null);

  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;

  const defaultRepoName: string = 'X-lab2017/open-digger';

  const optionGeneratorMap = new Map<string, (data: any) => object>();
  let repoName = '';

  ['OpenRank', 'Activity', 'Bus Factor'].forEach(m => optionGeneratorMap.set(m, data => ({
    xAxis: {
      type: "category",
      data: Object.keys(data[0]).filter(k => k.length === 7)
    },
    yAxis: { type: "value" },
    series: [
      {
        type: "bar",
        data: Object.keys(data[0]).filter(k => k.length === 7).map(k => data[0][k])
      }
    ],
  })));

  ['Stars', 'Forks', 'Attention', 'Contributors'].forEach(m => optionGeneratorMap.set(m, data => {
    data = data[0];
    const accValue = [];
    Object.keys(data).filter(k => k.length === 7).map(k => data[k]).reduce((p, c) => {
      accValue.push(p);
      return p + c;
    });
    return {
      xAxis: {
        type: 'category',
        data: Object.keys(data).filter(k => k.length === 7),
      },
      yAxis: [{ type: 'value' }, { type: 'value' }],
      series: [{
        type: 'bar',
        data: Object.keys(data).filter(k => k.length === 7).map(k => data[k]),
      }, {
        type: 'line',
        yAxisIndex: 1,
        data: accValue,
        smooth: true,
      }],
    };
  }));

  ['Issues'].forEach(m => optionGeneratorMap.set(m, data => {
    const [issuesNewData, issuesClosedData, issueCommentData] = data;
    const monthes = Object.keys(issuesNewData).filter(k => k.length === 7);
    const issuesNew = monthes.map(m => issuesNewData[m] ?? 0);
    const issuesClosed = monthes.map(m => issuesClosedData[m] ?? 0);
    const issueComment = monthes.map(m => issueCommentData[m] ?? 0);
    const issuesNewBase = [0];
    const issuesClosedBase = [];
    for (let i = 1; i < issuesNew.length; i++)
      issuesNewBase.push(issuesNew[i - 1] - issuesClosed[i - 1] + issuesNewBase[i - 1]);
    for (let i = 0; i < issuesNew.length; i++)
      issuesClosedBase.push(issuesNewBase[i] + issuesNew[i] - issuesClosed[i]);

    return {
      legend: {
        data: ['New', 'Close', 'Comment'],
        padding: 40,
      },
      xAxis: {
        type: 'category',
        data: monthes,
      },
      yAxis: [{ type: 'value', min: 0 }, { type: 'value' }],
      series: [
        {
          type: 'bar',
          stack: 'Total',
          silent: true,
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          },
          emphasis: {
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            }
          },
          data: issuesNewBase,
        },
        {
          type: 'bar',
          stack: 'CloseTotal',
          silent: true,
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          },
          emphasis: {
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            }
          },
          data: issuesClosedBase,
        },
        {
          name: 'New',
          type: 'bar',
          stack: 'Total',
          itemStyle: {
            color: 'green',
          },
          data: issuesNew,
          markPoint: repoName === defaultRepoName ? {
            data: [
              {
                value: 'Start CHAOSS impl',
                coord: ['2021-07', issuesNewData['2021-07'] + 55],
                symbol: 'rect', symbolSize: [120, 20]
              },
              {
                value: 'Add label data',
                coord: ['2022-03', issuesNewData['2022-03'] + 10],
                symbol: 'rect', symbolSize: [90, 20]
              }
            ]
          } : {},
        },
        {
          name: 'Close',
          type: 'bar',
          itemStyle: {
            color: 'red',
          },
          stack: 'CloseTotal',
          data: issuesClosed,
        },
        {
          name: 'Comment',
          type: 'line',
          data: issueComment,
          yAxisIndex: 1,
          markPoint: repoName === defaultRepoName ? {
            data: [
              {
                value: 'Disscussion for COSAR2020',
                coord: ['2020-12', issueCommentData['2020-12'] + 15],
                symbol: 'rect', symbolSize: [170, 20]
              },
              {
                value: 'Tricky CHAOSS metrics',
                coord: ['2022-12', issueCommentData['2022-12'] + 40],
                symbol: 'rect', symbolSize: [140, 20]
              }
            ]
          } : {},
        },
      ],
    };
  }));

  ['Change Requests'].forEach(m => optionGeneratorMap.set(m, data => {
    const [changeRequestsData, changeRequestsAcceptData, changeRequestReviewData] = data;
    const monthes = Object.keys(changeRequestsData).filter(k => k.length === 7);
    const crsNew = monthes.map(m => changeRequestsData[m] ?? 0);
    const crsAccepted = monthes.map(m => changeRequestsAcceptData[m] ?? 0);
    const crReviews = monthes.map(m => changeRequestReviewData[m] ?? 0);
    const crsNewBase = [0];
    const crxAcceptedBase = [];
    for (let i = 1; i < crsNew.length; i++) {
      const base = crsNew[i - 1] - crsAccepted[i - 1] + crsNewBase[i - 1];
      crsNewBase.push(base > 0 ? base : 0);
    }
    for (let i = 0; i < crsNew.length; i++) {
      const base = crsNewBase[i] + crsNew[i] - crsAccepted[i];
      crxAcceptedBase.push(base > 0 ? base : 0);
    }

    return {
      legend: {
        data: ['New', 'Accpeted', 'Reviews'],
        padding: 40,
      },
      xAxis: {
        type: 'category',
        data: monthes,
      },
      yAxis: [{ type: 'value' }, { type: 'value' }],
      series: [
        {
          type: 'bar',
          stack: 'Total',
          silent: true,
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          },
          emphasis: {
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            }
          },
          data: crsNewBase,
        },
        {
          type: 'bar',
          stack: 'CloseTotal',
          silent: true,
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent'
          },
          emphasis: {
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent'
            }
          },
          data: crxAcceptedBase,
        },
        {
          name: 'New',
          type: 'bar',
          stack: 'Total',
          itemStyle: {
            color: 'green',
          },
          data: crsNew,
        },
        {
          name: 'Accpeted',
          type: 'bar',
          itemStyle: {
            color: 'red',
          },
          stack: 'CloseTotal',
          data: crsAccepted,
        },
        {
          name: 'Reviews',
          type: 'line',
          data: crReviews,
          yAxisIndex: 1,
        }
      ]
    };
  }));

  ['Code Change Lines'].forEach(m => optionGeneratorMap.set(m, data => {
    const [addLines, removeLines] = data;
    const monthes = Object.keys(addLines).filter(k => k.length === 7);
    return {
      xAxis: {
        type: 'category',
        data: monthes,
      },
      yAxis: { type: 'value' },
      series: [{
        type: 'line',
        data: monthes.map(m => addLines[m]),
        symbol: 'none',
        areaStyle: { color: 'green' },
      }, {
        type: 'line',
        data: monthes.map(m => removeLines[m]).map(v => -v),
        symbol: 'none',
        areaStyle: { color: 'red' },
      }],
    };
  }));

  ['Issue Response Time', 'Issue Resolution Duration',
    'Change Request Response Time', 'Change Request Resolution Duration'
  ].forEach(m => optionGeneratorMap.set(m, data => {
    data = data[0]
    const monthes = Object.keys(data['avg']).filter(k => k.length === 7);
    const quantileData = monthes.map(m => [1, 3, 0, 4].map(q => data[`quantile_${q}`][m]));
    const avgData = monthes.map(m => data['avg'][m]);

    return {
      legend: {
        padding: 40,
      },
      xAxis: {
        data: monthes,
      },
      yAxis: {
        type: 'value',
        name: 'days',
      },
      series: [
        {
          type: 'candlestick',
          name: 'quantiles box plot',
          data: quantileData,
          itemStyle: {
            color: 'rgba(0, 0, 180, 0.4)',
            color0: 'rgba(0, 0, 180, 0.4)',
            borderColor: 'rgba(0, 0, 180, 0.4)',
            borderColor0: 'rgba(0, 0, 180, 0.4)',
          }
        }, {
          type: 'line',
          name: 'average',
          data: avgData,
          smooth: true,
          showSymbol: false,
        }
      ]
    };
  }));

  const [options, setOptions] = useState({});

  const fetchData = (platform: string, type: string, name: string, metric: string) => {
    if (!platform || !type || !name || !metric) {
      alert(translate({ id: 'metricCharts.invalidInput' }));
      return;
    }
    platform = platform.toLowerCase();
    repoName = name;
    let m = type === 'Repo' ? repoMetricOptionMap.get(metric) : userMetricOptionMap.get(metric);
    if (typeof m === 'string') m = [m];
    Promise.all(m.map(m => axios.get(`${customFields.ossBaseUrl}${platform}/${name}/${m}.json`))).then(res => {
      const data = res.map(r => r.data);
      const options = {
        title: { text: translate({ id: 'metricCharts.title' }, { metric, name }), left: "center" },
        ...optionGeneratorMap.get(metric)(data),
      };
      // clear data first to avoid old data left in the charts
      echartsRef.current.getEchartsInstance().clear();
      setOptions(options);
    }).catch(error => {
      console.error('Error fetching data', error);
      if (error.response.status === 404) {
        alert(translate({ id: 'metricCharts.dataNotFound' }));
      }
    });
  };

  useEffect(() => {
    fetchData('GitHub', 'Repo', defaultRepoName, 'Issues');
  }, [])

  return (
    <>
      <div className={styles.inputDiv}>
        <SearchInput onSubmit={v => fetchData(v.platform, v.type, v.name, v.metricDisplayName)} />
      </div>
      <ReactECharts className={styles.chart} ref={echartsRef} option={options} />
    </>
  );
};
