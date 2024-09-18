import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import $ from "jquery";
import "./devLeaderboard.css";
import SimpleTable from "../SimpleTable";

const Leaderboard = ({ graph, month }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (graph) {
      const keys = Object.keys(graph.data);
      if (!keys.includes(month)) {
        return;
      }
      const sortedUsers = graph.data[month].nodes
        .map((node) => ({
          id: graph.meta.nodes[node[0]][0],
          login: graph.meta.nodes[node[0]][1],
          value: node[2],
        }))
        .filter((user) => user.id[0] === "u")
        .sort((a, b) => b.value - a.value);

      setUsers(sortedUsers);
    }
  }, [graph, month]);

  return (
    <div className="left-box" id="list">
      <SimpleTable
        className="leaderboard-box scrollit"
        title={"Leaderboard"}
        data={users.slice(0, 6)}
        options={[
          { name: "Login", type: "String", fields: ["login"], width: 180 },
          { name: "OpenRank", type: "String", fields: ["value"], width: 100 },
        ]}
      />
    </div>
  );
};

export default Leaderboard;
