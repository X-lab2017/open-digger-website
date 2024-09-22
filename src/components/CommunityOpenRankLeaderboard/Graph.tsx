import { useEffect } from "react";
import * as echarts from "echarts";
import { message } from "antd";
import styles from './styles.module.css';

export default ({
  graph,
  month,
  platform,
  typeMap,
  onNodeDblClick,
}): JSX.Element => {
  useEffect(() => {
    if (graph) {
      const container = document.getElementById("graph");
      const chart = echarts.init(container);

      try {
        const keys = Object.keys(graph.data);
        if (!keys.includes(month)) {
          return;
        }
        const nodes = graph.data[month].nodes
          .map(node => {
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
          legend: { data: categories, top: "90%", left: "50px" },
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
        chart.on("dblclick", (params: any) => onNodeDblClick(params.data.id));
      } catch (error) {
        message.error("图表加载失败");
      }
      return () => {
        chart.dispose();
      };
    }
  }, [graph, month, platform]);

  return (
    <>
      <div id="graph" className={styles.graphContainer} />
    </>
  );
};
