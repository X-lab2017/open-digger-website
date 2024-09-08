import React, { useEffect, useState } from "react";
import "./devLeaderboard.css";

const Details = ({ graph, id, month, typeMap, platform }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (graph && id) {
      const data = graph.data[month];
      const selfNode = data.nodes.find(
        (node) => graph.meta.nodes[node[0]][0] === id
      );
      const detailsData = [];

      if (selfNode) {
        detailsData.push([
          "Self",
          graph.meta.retentionFactor,
          selfNode[1],
          (graph.meta.retentionFactor * selfNode[1]).toFixed(3),
        ]);

        const otherDetails = data.links
          .filter((link) => graph.meta.nodes[link[1]][0] === id)
          .map((link) => {
            const sourceIndex = link[0];
            const sourceNode = graph.meta.nodes[sourceIndex];
            const sourceValue = data.nodes.find(
              (node) => node[0] === sourceIndex
            );
            const type = typeMap.get(sourceNode[0][0]);
            let name = sourceNode[1];
            if (type === "pull")
              name = "#" + sourceNode[0].slice(1) + " " + sourceNode[1];
            else if (type === "issue")
              name =
                "#" +
                (platform === "gitee"
                  ? parseInt(sourceNode[0].slice(1)).toString(36).toUpperCase()
                  : sourceNode[0].slice(1)) +
                " " +
                sourceNode[1];
            return [
              name,
              parseFloat((1 - graph.meta.retentionFactor) * link[2]).toFixed(3),
              sourceValue[2],
              parseFloat(
                (
                  (1 - graph.meta.retentionFactor) *
                  link[2] *
                  sourceValue[2]
                ).toFixed(3)
              ),
            ];
          })
          .sort((a, b) => b[3] - a[3]);

        const repoNode = data.nodes.find((node) => node[0] === 0);
        otherDetails.push([
          graph.meta.repoName,
          (1 / (data.nodes.length - 1)).toFixed(3),
          repoNode[2],
          ((1 / (data.nodes.length - 1)) * repoNode[2]).toFixed(3),
        ]);

        setDetails([...detailsData, ...otherDetails]);
      }
    }
  }, [graph, id, month, typeMap, platform]);

  return (
    <div className="bordered right-box" id="details">
      <div id="details_div" className="scrollit">
        <table id="details_table">
          <thead>
            <tr>
              <th>From</th>
              <th>Ratio</th>
              <th>Value</th>
              <th>OpenRank</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr key={index}>
                {detail.map((d, i) => (
                  <td key={i}>{d}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;