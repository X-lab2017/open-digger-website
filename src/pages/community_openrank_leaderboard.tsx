import Layout from '@theme/Layout';
import CommunityOpenRankLeaderboard from '../components/CommunityOpenRankLeaderboard';

export default (): JSX.Element => {
  return (
    <div className='no-footer'>
      <Layout>
        <CommunityOpenRankLeaderboard />
      </Layout>
    </div>
  );
}
