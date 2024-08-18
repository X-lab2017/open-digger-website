import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import $ from "jquery";
import "./devLeaderboard.css";

const Leaderboard = ({ graph, month }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (graph) {
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
    <div className="bordered" id="list">
      <div id="title">
        <h2>Leaderboard</h2>
      </div>
      <div id="leaderboard_div" className="scrollit">
        <table id="leaderboard_table">
          <thead>
            <tr>
              <th>Login</th>
              <th>OpenRank</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.login}</td>
                <td>{user.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
