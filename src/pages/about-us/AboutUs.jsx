import Lottie from 'lottie-react';
import aboutUsLottie from '../../Assets/lotties/aboutUs.json';
import { motion } from 'framer-motion';
// import oni from '../../Assets/joinus/Team/mushfika-bw.jpg'
// import rakib from '../../Assets/joinus/Team/mushfika-bw.jpg'
// import oni from '../../Assets/joinus/Team/mushfika-bw.jpg'
// import oni from '../../Assets/joinus/Team/mushfika-bw.jpg'
// import oni from '../../Assets/joinus/Team/mushfika-bw.jpg'


const AboutUs = () => {

  // const member = [
  //   {
  //     image: oni,
  //   },
  //   {
  //     image: rakib,
  //   },
  //   {
  //     image: sana,
  //   },
  //   {
  //     image: arif,
  //   },
  //   {
  //     image: akash,
  //   },
  // ]


  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className='min-h-screen'>

      {/* page Title */}
      <div className="about-info min-h-[480px]">
        <div className='h-[480px] w-full bg-black/45 flex items-center justify-center'>
          <div className='text-center text-white space-y-5 md:w-1/2 mx-auto'>
            <h1 className='text-4xl lg:text-6xl font-bold '>More About Us</h1>
            <p className='w-[96%] mx-auto'>Our mission is to make everyday tasks easier, faster, and more accessible through innovative technology. With a focus on quality and user satisfaction, we strive to deliver solutions that create real value. We've grown from a small idea to a platform that serves thousands of users. </p>
          </div>
        </div>
      </div>

      
      <div className='max-w-screen-xl mx-auto grid grid-cols-5'>



      </div>



    </div>
  );
};

export default AboutUs;
