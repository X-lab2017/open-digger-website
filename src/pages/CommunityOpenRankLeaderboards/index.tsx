import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function CommunityOpenRankLeaderboards({ location }): JSX.Element {
  const currentPath = location.pathname;
  const pathes = currentPath.split('/');
  const org = pathes[pathes.length - 1];
  let url = 'https://tyn1998.github.io/community-openrank-leaderboard/';
  if (org !== 'community-openrank-leaderboards') {
    url += `?organization=${org}`
  }
  return (
    <div className='no-footer'>
      <Layout>
        <iframe className={styles.mainRankingList} src={url}></iframe>
      </Layout>
    </div>
  );
}
