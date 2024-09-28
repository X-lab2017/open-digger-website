import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import Leaderboard from './Leaderboard';
import Details from './Details';
import Graph from './Graph';
import Banner from './Banner';
import { translate } from '@docusaurus/Translate';

const DevLeaderboard = () => {
  const [graph, setGraph] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const [platform, setPlatform] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [dateKeys, setDateKeys] = useState<string[]>([]);
  const [datePlaceholder, setDatePlaceholder] = useState<string>('');

  const baseUrl = "https://oss.open-digger.cn/";
  const typeMap = new Map([
    ['r', 'repo'],
    ['i', 'issue'],
    ['p', 'pull'],
    ['u', 'user'],
  ]);

  const loadData = async (platform: string, repoName: string) => {
    const hide = message.loading(translate({ id: 'communityLeaderboard.fetchingData' }), 0);
    try {
      const data = (await axios.get(`${baseUrl}${platform}/${repoName}/community_openrank.json`)).data;
      if (!data || Object.keys(data).length === 0) {
        throw ('No valid data found');
      }
      const keys = Object.keys(data.data);
      const lastKey = keys[keys.length - 1];
      const formattedLastKey = `${lastKey.slice(0, 4)}-${lastKey.slice(4)}`;
      setGraph(data);
      setDate(lastKey);
      setDatePlaceholder(formattedLastKey);
      setDateKeys(keys);
      setPlatform(platform);
    } catch (error) {
      message.error(translate({ id: 'communityLeaderboard.fetchDataError' }));
      console.error(error);
    } finally {
      hide();
    }
  };

  useEffect(() => {
    if (graph) {
      const keys = Object.keys(graph.data);
      if (!keys.includes(date)) {
        message.error(translate({ id: 'communityLeaderboard.noDataForMonth' }));
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
