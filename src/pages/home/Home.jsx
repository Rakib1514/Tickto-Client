import Banner from "./banner/Banner";
import IntroCard from "./IntroCard";
import RecentView from "./RecentView";
import Reviews from "./Reviews";
import DataSafe from "./DataSafe"

const Home = () => {
  return (
    <>
      <Banner />
      {/* <div className="h-screen">

      </div> */}

      <IntroCard/>
      
      {/* <RecentView /> */}
      {/* <Feature /> */}
      <DataSafe />
      {/* <PopularNow /> */}
      {/* <Events /> */}
      {/* <Travel /> */}
      {/* <Reviews /> */}
    </>
  );
};

export default Home;
