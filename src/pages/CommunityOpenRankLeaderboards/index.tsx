import Layout from '@theme/Layout';
import { useRouteMatch } from 'react-router';
import styles from './styles.module.css';

interface CommunityOpenRankLeaderboardsPageParams {
  organization: string;
}

export default function CommunityOpenRankLeaderboards({ location }): JSX.Element {
  const { params: { organization } } = useRouteMatch<CommunityOpenRankLeaderboardsPageParams>();
  let url = `https://tyn1998.github.io/community-openrank-leaderboard/?organization=${organization ?? 'xlab'}`
  return (
    <div className='no-footer'>
      <Layout>
        <iframe className={styles.mainRankingList} src={url}></iframe>
      </Layout>
    </div>
  );
}
