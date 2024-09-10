import React, { useEffect, useState, useRef } from "react";
import * as echarts from "echarts";
import $ from "jquery";
import { message } from "antd";

import Leaderboard from "./Leaderboard";
import Details from "./Details";
import Graph from "./Graph";
import Banner from "./Banner";
import "./devLeaderboard.css";

const DevLeaderboard = () => {
  const [graph, setGraph] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const [platform, setPlatform] = useState<string>("github");
  const [repoName, setRepoName] = useState<string>("umijs/umi");
  const [date, setDate] = useState<Date|null>(null);

  const baseUrl = "https://oss.x-lab.info/open_digger/";
  const month = "202407"; // Replace with dynamic fetching if needed
  const typeMap = new Map([
    ["r", "repo"],
    ["i", "issue"],
    ["p", "pull"],
    ["u", "user"],
  ]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await $.getJSON(
          `${baseUrl}${platform}/${repoName}/community_openrank.json`
        );
        if (!data || Object.keys(data).length === 0) {
          message.warning("未查询到相关信息");
        } else {
          setGraph(data);
        }
      } catch (error) {
        message.error("加载数据时出错");
      }
    };

    loadData();
  }, [platform, repoName]);

  const handleNodeDblClick = (id) => {
    setSelectedNodeId(id);
  };

  return (
    <>
      <Banner 
        setPlatform={setPlatform} 
        setRepo={setRepoName} 
        setDate={setDate}
      />
      <Graph
        graph={graph}
        month={month}
        repoName={repoName}
        platform={platform}
        typeMap={typeMap}
        onNodeDblClick={handleNodeDblClick}
      />
      <Leaderboard graph={graph} month={month} />
      <Details
        graph={graph}
        id={selectedNodeId}
        month={month}
        typeMap={typeMap}
        platform={platform}
      />
    </>
  );
};

export default DevLeaderboard;
