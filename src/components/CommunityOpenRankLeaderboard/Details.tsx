import { useEffect, useState } from 'react';
import { translate } from '@docusaurus/Translate';
import SimpleTable from '../SimpleTable';
import styles from './styles.module.css';

const Details = ({ graph, id, month, typeMap, platform }) => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    if (graph && id) {
      const keys = Object.keys(graph.data);
      if (!keys.includes(month)) {
        return;
      }
      if (id === -1) {
        setDetails([]);
        return;
      }
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
              name.substring(0, 20),
              parseFloat(((1 - graph.meta.retentionFactor) * link[2]).toFixed(3)),
              sourceValue[2],
              parseFloat(((1 - graph.meta.retentionFactor) * link[2] * sourceValue[2]).toFixed(3)),
            ];
          })
          .sort((a, b) => b[3] - a[3]);

        const repoNode = data.nodes.find((node) => node[0] === 0);
        otherDetails.push([
          graph.meta.repoName,
          parseFloat((1 / (data.nodes.length - 1)).toFixed(3)),
          repoNode[2],
          parseFloat(((1 / (data.nodes.length - 1)) * repoNode[2]).toFixed(3)),
        ]);

        setDetails([...detailsData, ...otherDetails]);
      }
    }
  }, [graph, id, month, typeMap, platform]);

  return (
    <div className={styles.rightBox}>
      <SimpleTable title={translate({ id: 'communityLeaderboard.details.title' })} data={details} options={
        [
          { name: translate({ id: 'communityLeaderboard.details.from' }), type: 'String', fields: [0], width: 120 },
          { name: translate({ id: 'communityLeaderboard.details.ratio' }), type: 'String', fields: [1], width: 60 },
          { name: translate({ id: 'communityLeaderboard.details.value' }), type: 'String', fields: [2], width: 60 },
          { name: 'OpenRank', type: 'String', fields: [3], width: 80 }
        ]
      } />
    </div>
  );
};

export default Details;
