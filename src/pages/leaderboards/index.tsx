import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import SimpleTable from '../../components/SimpleTable';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import axios from 'axios';
import styles from './styles.module.css';

function OpenLeaderboard() {

  const [title, setTitle] = useState('Ranking List Title');
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const { i18n } = useDocusaurusContext();

  useEffect(() => {
    const search = new URLSearchParams(window.location.search);
    let type = search.get('type');
    if (!type) {
      type = 'projects';
    }
    if (type === 'projects') {
      axios.get(`https://oss.open-digger.cn/leaderboards/${type}.json`).then(resp => {
        const data = resp.data;
        setTitle(translate({ id: 'leaderboards.projects.title' }));
        setData(data.data);
        setOptions([
          { name: '#', type: 'String', fields: ['rank'], width: 80 },
          { name: translate({ id: 'leaderboards.projects.name' }), type: 'StringWithIcon', fields: ['name', 'logo'], width: 200 },
          { name: 'OpenRank', type: 'String', fields: ['openrank'], width: 180 },
          { name: translate({ id: 'leaderboards.projects.developers' }), type: 'String', fields: ['developerCount'], width: 180 },
          { name: translate({ id: 'leaderboards.projects.initiator' }), type: 'StringWithIcon', fields: ['initiator', 'initiatorLogo'], width: 250 },
          { name: translate({ id: 'leaderboards.projects.country' }), type: 'String', fields: ['country'], width: 150 },
        ]);
      }).catch(e => {
        console.log(e);
      });
    } else if (type === 'companies') {
      axios.get(`https://oss.open-digger.cn/leaderboards/${type}.json`).then(resp => {
        const data = resp.data;
        setTitle(translate({ id: 'leaderboards.companies.title' }));
        setData(data.data);
        setOptions([
          { name: '#', type: 'String', fields: ['rank'], width: 80 },
          { name: translate({ id: 'leaderboards.companies.name' }), type: 'StringWithIcon', fields: ['name', 'logo'], width: 300 },
          { name: 'OpenRank', type: 'String', fields: ['openrank'], width: 200 },
          { name: translate({ id: 'leaderboards.companies.repos' }), type: 'String', fields: ['repoCount'], width: 200 },
          { name: translate({ id: 'leaderboards.companies.developers' }), type: 'String', fields: ['developerCount'], width: 200 },
          { name: translate({ id: 'leaderboards.companies.country' }), type: 'String', fields: [i18n.currentLocale === 'zh' ? 'country_zh' : 'country'], width: 200 },
        ]);
      }).catch(e => {
        console.log(e);
      });
    } else if (type === 'divisions') {
      axios.get(`https://oss.open-digger.cn/leaderboards/${type}.json`).then(resp => {
        const data = resp.data;
        setTitle(translate({ id: 'leaderboards.provinces.title' }));
        setData(data.data);
        setOptions([
          { name: '#', type: 'String', fields: ['rank'], width: 80 },
          { name: translate({ id: 'leaderboards.provinces.name' }), type: 'String', fields: [i18n.currentLocale === 'zh' ? 'province_zh' : 'province'], width: 300 },
          { name: 'OpenRank', type: 'String', fields: ['openrank'], width: 300 },
          { name: translate({ id: 'leaderboards.provinces.developers' }), type: 'String', fields: ['developerCount'], width: 300 },
          { name: translate({ id: 'leaderboards.provinces.country' }), type: 'String', fields: [i18n.currentLocale === 'zh' ? 'country_zh' : 'country'], width: 300 },
        ]);
      }).catch(e => {
        console.log(e);
      });
    } else {
      alert(`Leaderboard type ${type} is not supported.`);
    }

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
