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

    axios.get(`https://oss.open-digger.cn/leaderboards/${type}.json`).then(resp => {
      const data = resp.data;
      setTitle(i18n.currentLocale === 'zh' ? data.title_zh : data.title);
      setOptions(i18n.currentLocale === 'zh' ? data.options_zh : data.options);
      setData(data.data);
    }).catch(e => {
      console.log(e);
      setTitle(translate({ id: 'leaderboards.data_not_found' }, { type }));
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
