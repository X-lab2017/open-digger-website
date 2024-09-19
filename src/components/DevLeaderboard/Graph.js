import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import { message, Spin } from "antd";
import "./devLeaderboard.css";
import { set } from "lodash";

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
      const hideLoadingMessage = message.loading("Loading chart...", 5); // 显示加载提示
      hideLoadingMessage(); // 隐藏加载提示
      const keys = Object.keys(graph.data);
      if (!keys.includes(month)) {
        return;
      }
      const container = document.getElementById("graph");
      const chart = echarts.init(container);

      const nodes = graph.data[month].nodes
        .map((node) => {
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
        })
        .sort((a, b) => b.value - a.value)
        .slice(0, 300);

      const topNodeIds = new Set(nodes.map((node) => node.id));
      const links = graph.data[month].links
        .filter(
          (link) =>
            topNodeIds.has(graph.meta.nodes[link[0]][0]) &&
            topNodeIds.has(graph.meta.nodes[link[1]][0])
        )
        .map((link) => ({
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
            progressive: 400,
            progressiveThreshold: 2000,
          },
        ],
      };

      chart.setOption(option);
      chart.on("dblclick", (params) => onNodeDblClick(params.data.id));
      // message.destroy();
      return () => {
        chart.dispose();
      };
    }
  }, [graph, month, platform]);

  return (
    <>
      <div
        id="graph"
        className="graph-container"
      />
    </>
    
      
    
    
  );
};

export default Graph;
