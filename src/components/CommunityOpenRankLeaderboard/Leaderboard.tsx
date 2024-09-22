import React, { useEffect, useState } from 'react';
import { translate } from '@docusaurus/Translate';
import SimpleTable from '../SimpleTable';
import styles from './styles.module.css';

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
    <div className={styles.leftBox}>
      <SimpleTable
        title={translate({ id: 'communityLeaderboard.leaderboard.title' })}
        data={users}
        options={[
          { name: translate({ id: 'communityLeaderboard.leaderboard.login' }), type: 'String', fields: ['login'], width: 200 },
          { name: 'OpenRank', type: 'String', fields: ['value'], width: 100 },
        ]}
      />
    </div>
  );
};

export default Leaderboard;
