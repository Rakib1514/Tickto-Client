import Banner from "./banner/Banner";
import IntroCard from "./IntroCard";
import RecentView from "./RecentView";
import Reviews from "./Reviews";
import DataSafe from "./DataSafe"
import PopularNow from "./PopularNow"

const Home = () => {
  return (
    <>
      <Banner />
      {/* <div className="h-screen">

      </div> */}

      <IntroCard/>
      
      <RecentView />
      {/* <Feature /> */}
      {/* <PopularNow /> */}
      <DataSafe />
      {/* <Events /> */}
      {/* <Travel /> */}
      {/* <Reviews /> */}
    </>
  );
};

export default Home;
