import Banner from './Banner';
import RecentView from './RecentView';
import DataSafe from './DataSafe';
import PopularNow from './PopularNow';
import Feature from './Feature';

import Reviews from './Reviews';

import Events from './Events';
import Travel from './Travel';

const Home = () => {
  return (
    <div className=''>
      <Banner />
      <RecentView />
      <Feature />
      <DataSafe />
      <PopularNow />
      <Events />
      <Travel />
      <Reviews />
    </div>
  );
};

export default Home;
