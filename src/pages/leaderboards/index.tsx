import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import { useLocation } from '@docusaurus/router';
import SimpleTable from '../../components/SimpleTable';
import styles from './styles.module.css';
import axios from 'axios';
import { translate } from '@docusaurus/Translate';

function OpenLeaderboard() {
  const location = useLocation();
  const leaderboardId = location.pathname.split('/').pop();

  const [title, setTitle] = useState('Ranking List Title');
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get(`https://oss.open-digger.cn/leaderboards/${leaderboardId}.json`).then(resp => {
      const data = resp.data;
      console.table(data);
      setTitle(translate({ id: 'leaderboards.projects.title' }));
      setData(data.data);
      switch (leaderboardId) {
        case 'projects':
          setOptions([
            { name: '#', type: 'String', fields: ['rank'], width: 80 },
            { name: translate({ id: 'leaderboards.projects.name' }), type: 'StringWithIcon', fields: ['name', 'logo'], width: 250 },
            { name: 'OpenRank', type: 'String', fields: ['openrank'], width: 150 },
            { name: translate({ id: 'leaderboards.projects.initiator' }), type: 'StringWithIcon', fields: ['initiator', 'initiatorLogo'], width: 250 },
            { name: translate({ id: 'leaderboards.projects.country' }), type: 'String', fields: ['country'], width: 250 },
          ]);
          break;
      }
    }).catch(e => {
      console.log(e);
    });
  }, []);

  return (
    <Layout>
      <div className={styles.mainRankingList} >
        <SimpleTable title={title} data={data} options={options}
        />
      </div>
    </Layout>
  );
}

export default OpenLeaderboard;
