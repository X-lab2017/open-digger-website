import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { merge } from 'lodash';
import { useColorMode } from '@docusaurus/theme-common';
import 'echarts/map/js/world';

export default (props: any): JSX.Element => {
  const { option, divStyle } = props;
  const [usedOption, setUsedOptions] = useState<any>({});
  const { colorMode } = useColorMode();

  useEffect(() => {
    const updateOptions = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      const fontColor = rootStyles.getPropertyValue('--ifm-font-color-base').trim();

      const defaultOption: any = {
        title: {
          left: 'center',
          textStyle: { color: fontColor, fontSize: 12 },
        },
        legend: {
          left: 'center',
          textStyle: { color: fontColor },
        },
        series: [],
      };

      const axisStyle = () => ({ axisLabel: { color: fontColor }, nameTextStyle: { color: fontColor } });

      if (option && option.series) {
        const typeCountMap = new Map<string, number>();
        if (option.series.some(s => ['pie', 'bar', 'line'].includes(s.type))) {
          defaultOption.tooltip = {
            trigger: 'axis', axisPointer: { type: 'cross' }, formatter: function (params) {
              const filteredParams = params.filter(param => param.color !== 'transparent');
              let tooltipText = '';
              filteredParams.forEach(param => {
                tooltipText += `${param.marker} ${param.seriesName}: ${param.value}<br/>`;
              });
              return tooltipText;
            }
          };
        }
        for (let i = 0; i < option.series.length; i++) {
          const s = option.series[i];
          const count = typeCountMap.get(s.type) || 0;
          if (s.type === 'pie') {
            defaultOption.series.push({
              radius: ['40%', '60%'],
              center: ['50%', '60%'],
              avoidLabelOverlap: true,
              label: { position: 'outside', fontSize: 14, color: fontColor, formatter: '{b}: {c}' },
              labelLine: { length: 10, length2: 10 },
              emphasis: { label: { fontSize: 20, fontWeight: 'bold' } },
            });
          } else if (s.type === 'treemap') {
            defaultOption.series.push({
              bottom: '30px',
              label: { show: true, position: 'inside', formatter: '{b}: {c}' }
            });
          } else if (s.type === 'bar') {
            defaultOption.series.push({});

            if (Array.isArray(option.xAxis)) {
              defaultOption.xAxis = Array.from({ length: option.xAxis.length }, axisStyle);
            } else {
              defaultOption.xAxis = axisStyle();
            }
            if (Array.isArray(option.yAxis)) {
              defaultOption.yAxis = Array.from({ length: option.yAxis.length }, axisStyle);
            } else {
              defaultOption.yAxis = axisStyle();
            }
          } else if (s.type === 'line') {
            defaultOption.series.push({});

            if (Array.isArray(option.xAxis)) {
              defaultOption.xAxis = Array.from({ length: option.xAxis.length }, axisStyle);
            } else {
              defaultOption.xAxis = axisStyle();
            }
            if (Array.isArray(option.yAxis)) {
              defaultOption.yAxis = Array.from({ length: option.yAxis.length }, axisStyle);
            } else {
              defaultOption.yAxis = axisStyle();
            }
          } else {
            defaultOption.series.push({});
          }
          typeCountMap.set(s.type, count + 1);
        }
      }
      const mergedOption = merge(defaultOption, option);
      // console.log(JSON.stringify(mergedOption));
      setUsedOptions(mergedOption);
    };

    const timeoutId = setTimeout(updateOptions, 50);
    return () => clearTimeout(timeoutId);
  }, [option, colorMode]);

  return (
    <div style={divStyle}>
      <ReactECharts
        option={usedOption}
        style={{ height: '100%', width: '100%' }}
        notMerge={true}
        lazyUpdate={false}
      />
    </div>
  );
}
