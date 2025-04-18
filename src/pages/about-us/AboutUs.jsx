import Lottie from 'lottie-react';
import aboutUsLottie from '../../Assets/lotties/aboutUs.json';
import { motion } from 'framer-motion';


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
          {/* bg-image */}
          <div className="about-info min-h-[480px]">
            <div className='h-[480px] w-full bg-black/45 flex items-center justify-center'>
              <div className='text-center text-white space-y-5 md:w-1/2 mx-auto'>
                <h1 className='text-4xl lg:text-6xl font-bold '>More About Us</h1>
                <p className='w-[96%] mx-auto'>Our mission is to make everyday tasks easier, faster, and more accessible through innovative technology. With a focus on quality and user satisfaction, we strive to deliver solutions that create real value. We've grown from a small idea to a platform that serves thousands of users. </p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <motion.div
            className="container mx-auto grid grid-cols-1 items-center justify-between gap-10 px-4 pb-20 md:px-6 lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Side: Image */}
            <motion.div
              className="flex md:h-[600px] md:justify-center lg:justify-between"
              variants={itemVariants}
            >
              <Lottie animationData={aboutUsLottie} style={{ width: '100' }}></Lottie>
            </motion.div>
            {/* Right Side: Text Content */}
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.h3 className="text-3xl font-bold" variants={itemVariants}>
                Who We Are
              </motion.h3>
              <motion.p
                className="leading-relaxed font-medium text-gray-500 md:text-[18px]"
                variants={itemVariants}
              >
                We are a leading online booking platform dedicated to making your travel and event
                experiences seamless. Whether you're booking flights, events, or concerts, we
                provide a hassle-free way to plan your journey.
              </motion.p>
              <motion.p
                className="leading-relaxed font-medium text-gray-500 md:text-[18px]"
                variants={itemVariants}
              >
                Our mission is to connect people with unforgettable experiences. With a
                user-friendly interface and secure payment options, we ensure that your booking
                process is smooth and enjoyable.
              </motion.p>
              <motion.div className="flex space-x-4" variants={itemVariants}>
                <button className="rounded-lg bg-[#317371] px-6 py-2 font-medium text-white transition duration-300 hover:bg-[#396968]">
                  Learn More
                </button>
                <button className="rounded-lg border border-[#317371] bg-transparent px-6 py-2 font-medium text-[#317371] transition duration-300 hover:bg-[#317371] hover:text-white">
                  Contact Us
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    
    </div>
  );
};

export default AboutUs;
