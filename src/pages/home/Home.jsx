import Banner from "./Banner";
import RecentView from "./RecentView";
import DataSafe from "./DataSafe";
import PopularNow from "./PopularNow";
import Feature from "./Feature";
import TheaterShow from "./TheaterShow";
import Reviews from "./Reviews";
import Flight from "./Flight";

const Home = () => {
  return (
    <>
      <Banner />
      <RecentView />
      <Feature />
      <DataSafe />
      <PopularNow />
      <TheaterShow />
      <Flight />
      <Reviews />
    </>
  );
};

export default Home;
