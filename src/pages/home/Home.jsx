import RecentView from "./RecentView";
import DataSafe from "./DataSafe";
import PopularNow from "./PopularNow";
import Feature from "./Feature";

import Reviews from "./Reviews";

import Events from "./Events";
import Travel from "./Travel";
import LgBanner from "./banner/LgBanner";
import SmMdBanner from "./banner/SmMdBanner";
import BusTicketSearch from "./bus-ticket-search/BusTicketSearch";

const Home = () => {
  return (
    <>
      <>
        <div className="hidden lg:block">
          <LgBanner />
        </div>
        <div className="lg:hidden">
          <SmMdBanner />
        </div>
      </>
      <BusTicketSearch/>
      <RecentView />
      <Feature />
      <DataSafe />
      <PopularNow />
      <Events />
      <Travel />
      <Reviews />
    </>
  );
};

export default Home;
