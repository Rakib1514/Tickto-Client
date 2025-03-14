import About_Executive_team from "./About_Executive_team";
import About_Join_us_sectioin from "./About_Join_us_section";
import AboutFromCustomer from "./AboutFromCustomer";
import AboutUs_first_section from "./AboutUs_first_section";
import OurTeam from "./OurTeam";

const AboutUs = () => {
  return (
    <div>
      <AboutUs_first_section />
      <AboutFromCustomer />
      <About_Join_us_sectioin />
      <About_Executive_team />
      <OurTeam />
    </div>
  );
};

export default AboutUs;