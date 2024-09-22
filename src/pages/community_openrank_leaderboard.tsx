import Layout from '@theme/Layout';
import DevLeaderboard from '../components/DevLeaderboard';

export default (): JSX.Element => {
  return (
    <div className='no-footer'>
      <Layout>
        <DevLeaderboard />
      </Layout>
    </div>
  );
}
