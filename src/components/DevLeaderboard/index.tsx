import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { message } from 'antd';
import Leaderboard from './Leaderboard';
import Details from './Details';
import Graph from './Graph';
import Banner from './Banner';

const DevLeaderboard = () => {
  const [graph, setGraph] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const [platform, setPlatform] = useState<string>("github");
  const [date, setDate] = useState<string>("202407");
  const [dateKeys, setDateKeys] = useState<string[]>([]);
  const [datePlaceholder, setDatePlaceholder] = useState<string>("");

  const baseUrl = "https://oss.x-lab.info/open_digger/";
  const typeMap = new Map([
    ['r', 'repo'],
    ['i', 'issue'],
    ['p', 'pull'],
    ['u', 'user'],
  ]);

  const loadData = async (platform: string, repoName: string) => {
    const hide = message.loading("正在获取数据...", 0);
    try {
      console.time('fetchData')
      const data = await $.getJSON(
        `${baseUrl}${platform}/${repoName}/community_openrank.json`
      );
      if (!data || Object.keys(data).length === 0) {
        message.warning("未查询到相关信息");
      } else {
        const keys = Object.keys(data.data);
        const lastKey = keys[keys.length - 1];
        const formattedLastKey = `${lastKey.slice(0, 4)}-${lastKey.slice(4)}`;
        setGraph(data);
        setDate(lastKey);
        setDatePlaceholder(formattedLastKey);
        setDateKeys(keys);
        setPlatform(platform);
      }
      console.timeEnd('fetchData')
      hide();
    } catch (error) {
      message.error("获取数据时出错");
      console.error(error);
      hide();
    }
  };

  useEffect(() => {
    if (graph) {
      const keys = Object.keys(graph.data);
      if (!keys.includes(date)) {
        message.error("该月份无数据");
        return;
      }
      setSelectedNodeId(-1);
    }
  }, [date]);

  const handleNodeDblClick = (id) => {
    setSelectedNodeId(id);
  };

  const disabledDate = (current) => {
    const formattedDate = current.format("YYYYMM");
    return !dateKeys.includes(formattedDate);
  };

  const onRepoSubmit = (values: any) => {
    loadData(values.platform.toLowerCase(), values.name);
  };

  useEffect(() => {
    loadData('github', 'X-lab2017/open-digger');
  }, []);

  return (
    <>
      <Banner
        onSubmit={onRepoSubmit}
        setDate={setDate}
        datePlaceholder={datePlaceholder}
        disabledDate={disabledDate}
      />
      <Graph
        graph={graph}
        month={date}
        platform={platform}
        typeMap={typeMap}
        onNodeDblClick={handleNodeDblClick}
      />
      <Leaderboard graph={graph} month={date} />
      <Details
        graph={graph}
        id={selectedNodeId}
        month={date}
        typeMap={typeMap}
        platform={platform}
      />
    </>
  );
};

export default DevLeaderboard;
