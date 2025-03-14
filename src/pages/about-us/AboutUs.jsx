import About_Executive_team from "./About_Executive_team";
import Lottie from "lottie-react";
import aboutUsLottie from "../../assets/lotties/aboutUs.json";
import { motion } from "framer-motion";
import AboutUsSection from "./AboutUsSection";
import StatsSection from "./StatsSection";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div>
      <section>
        <div>
          {/* Section Title */}
          <div className="bg-[#317371] h-[250px] flex flex-col justify-center items-center px-4">
            <motion.h2
              className="text-[30px] md:text-4xl lg:text-5xl font-bold text-center text-gray-200"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              About Project Name
            </motion.h2>
            <motion.p
              className="text-gray-300 font-medium text-[18px] md:text-[20px] text-center mt-4"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Online Ticketing System – Fast, secure, hassle-free ticket
              booking.
            </motion.p>
          </div>

          {/* Content Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center pb-20 container mx-auto px-4 md:px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Side: Image */}
            <motion.div
              className="flex md:justify-center lg:justify-between md:h-[600px]"
              variants={itemVariants}
            >
              <Lottie
                animationData={aboutUsLottie}
                style={{ width: "100" }}
              ></Lottie>
            </motion.div>
            {/* Right Side: Text Content */}
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.h3 className="text-3xl font-bold" variants={itemVariants}>
                Who We Are
              </motion.h3>
              <motion.p
                className="text-gray-500 font-medium md:text-[18px] leading-relaxed"
                variants={itemVariants}
              >
                We are a leading online booking platform dedicated to making
                your travel and event experiences seamless. Whether you're
                booking flights, events, or concerts, we provide a hassle-free
                way to plan your journey.
              </motion.p>
              <motion.p
                className="text-gray-500 font-medium md:text-[18px] leading-relaxed"
                variants={itemVariants}
              >
                Our mission is to connect people with unforgettable experiences.
                With a user-friendly interface and secure payment options, we
                ensure that your booking process is smooth and enjoyable.
              </motion.p>
              <motion.div className="flex space-x-4" variants={itemVariants}>
                <button className="bg-[#317371] text-white font-medium px-6 py-2 rounded-lg hover:bg-[#396968] transition duration-300">
                  Learn More
                </button>
                <button className="bg-transparent border border-[#317371] text-[#317371] px-6 py-2 rounded-lg hover:bg-[#317371] hover:text-white font-medium transition duration-300">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <AboutUsSection />
      <StatsSection />
      <About_Executive_team />
    </div>
  );
};

export default AboutUs;
