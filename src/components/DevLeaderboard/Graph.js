import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import "./devLeaderboard.css";

const Graph = ({
  graph,
  month,
  repoName,
  platform,
  typeMap,
  onNodeDblClick,
}) => {
  useEffect(() => {
    if (graph) {
      const container = document.getElementById("graph");
      const chart = echarts.init(container);

      const nodes = graph.data[month].nodes.map((node) => {
        const id = graph.meta.nodes[node[0]][0];
        const type = typeMap.get(id[0]);
        let name = graph.meta.nodes[node[0]][1];
        if (type === "pull") name = "#" + id.slice(1);
        else if (type === "issue")
          name =
            "#" +
            (platform === "gitee"
              ? parseInt(id.slice(1)).toString(36).toUpperCase()
              : id.slice(1));
        return {
          id,
          initialValue: node[1],
          value: node[2],
          name,
          symbolSize: Math.log(node[2] + 1) * 10,
          category: type,
        };
      });

      const links = graph.data[month].links.map((link) => ({
        source: graph.meta.nodes[link[0]][0],
        target: graph.meta.nodes[link[1]][0],
        value: link[2],
      }));

      nodes.forEach((node) => {
        if (node.category === "issue" || node.category === "pull") {
          links.push({
            source: graph.meta.nodes[0][0],
            target: node.id,
            value: 0.05,
          });
        }
      });

      const categories = Array.from(typeMap.values());

      const option = {
        legend: { data: categories, top: "500px", left: "30px" },
        tooltip: { trigger: "item" },
        series: [
          {
            name: "Collaborative graph",
            type: "graph",
            layout: "force",
            nodes,
            links,
            categories: categories.map((c) => ({ name: c })),
            roam: true,
            label: {
              position: "right",
              show: true,
            },
            force: {
              layoutAnimation: false,
              repulsion: 300,
            },
          },
        ],
      };

      chart.setOption(option);
      chart.on("dblclick", (params) => onNodeDblClick(params.data.id));

      return () => {
        chart.dispose();
      };
    }
  }, [graph, month, repoName, platform, typeMap, onNodeDblClick]);

  return (
    <div
      id="graph"
      className="graph-container"
    />
  );
};

export default Graph;
