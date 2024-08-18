import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import $ from "jquery";

import Leaderboard from "./Leaderboard";
import Details from "./Details";
import Graph from "./Graph";
import "./devLeaderboard.css";

const DevLeaderboard = () => {
  const [graph, setGraph] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const baseUrl = "https://oss.x-lab.info/open_digger/";
  const platform = "github"; // Replace with dynamic fetching if needed
  const repoName = "hypertrons/hypertrons-crx"; // Replace with dynamic fetching if needed
  const month = "202407"; // Replace with dynamic fetching if needed
  const typeMap = new Map([
    ["r", "repo"],
    ["i", "issue"],
    ["p", "pull"],
    ["u", "user"],
  ]);

  useEffect(() => {
    const loadData = async () => {
      const data = await $.getJSON(
        `${baseUrl}${platform}/${repoName}/community_openrank.json`
      );
      setGraph(data);
    };

    loadData();
  }, [platform, repoName]);

  const handleNodeDblClick = (id) => {
    setSelectedNodeId(id);
  };

  return (
    <div id="main" className="bordered">
      <Graph
        graph={graph}
        month={month}
        repoName={repoName}
        platform={platform}
        typeMap={typeMap}
        onNodeDblClick={handleNodeDblClick}
      />
      <div
        id="control"
        className="bordered"
      >
        <Leaderboard graph={graph} month={month} />
        <Details
          graph={graph}
          id={selectedNodeId}
          month={month}
          typeMap={typeMap}
          platform={platform}
        />
      </div>
    </div>
  );
};

export default DevLeaderboard;
