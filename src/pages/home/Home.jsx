import Banner from "./Banner";
import RecentView from "./RecentView";
import DataSafe from "./DataSafe";
import PopularNow from "./PopularNow";
import Feature from "./Feature";

import Reviews from "./Reviews";
import Flight from "./Flight";
import Events from "./Events";

const Home = () => {
  return (
    <>
      <Banner />
      <RecentView />
      <Feature />
      <DataSafe />
      <PopularNow />
      <Events />
      <Flight />
      <Reviews />
    </>
  );
};

export default Home;
