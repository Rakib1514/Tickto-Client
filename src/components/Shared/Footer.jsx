// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from './Logo';
import Socials from './Socials';
import strip from '../../Assets/payment-getways/stripe.jpg'
import bkash from '../../Assets/payment-getways/Bkash-Logo.jpg'
import nogod from '../../Assets/payment-getways/nagad.png'
import rocket from '../../Assets/payment-getways/rocket.png'
import { MdCall } from 'react-icons/md';

const Footer = () => {
  return (
    // <footer className="bordr-2 boder-t bg-[#317371]/30 px-2 py-10 text-white">
    //   <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
    //     {/* Logo & Social Icons */}
    //     <div className="flex flex-col items-center space-y-4 md:items-start">
    //       <motion.div
    //         initial={{ opacity: 0, y: -10 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5 }}
    //         className="flex items-center space-x-2"
    //       >
    //          {/* logo and primary navigation */}
    //                     <div className="flex">
    //                       <div className="flex flex-shrink-0 items-center">
    //                         <Link to="/" className="flex gap-2 items-center">
    //                           <Logo/>
    //                           <div className="text-2xl md:text-3xl font-bold">
    //                             <span className="text-[#317371]">Tick</span>
    //                             <span className="">To</span>
    //                           </div>
    //                         </Link>
    //                       </div>
    //                     </div>
    //       </motion.div>
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ delay: 0.3 }}
    //         className="flex space-x-4"
    //       >
    //         <Socials/>
    //       </motion.div>
    //     </div>

    //     {/* Services Section */}
    //     <div>
    //       <h3 className="text-lg font-bold">Services</h3>
    //       <ul className="mt-3 space-y-2 text-gray-700">
    //         {[
    //           { name: 'Booking', link: '/services/booking' },
    //           { name: 'Event Management', link: '/services/event-management' },
    //           { name: 'Customer Support', link: '/services/customer-support' },
    //           { name: 'Refund Policy', link: '/services/refund-policy' },
    //         ].map((service, index) => (
    //           <motion.li
    //             key={index}
    //             whileHover={{ scale: 1.05 }}
    //             className="cursor-pointer transition duration-300 hover:text-[#317371]"
    //           >
    //             <Link to={service.link}>{service.name}</Link>
    //           </motion.li>
    //         ))}
    //       </ul>
    //     </div>

    //     {/* Legal Section */}
    //     <div>
    //       <h3 className="text-lg font-bold">Legal</h3>
    //       <ul className="mt-3 space-y-2 text-gray-700">
    //         {[
    //           { name: 'Terms of Use', link: '/terms' },
    //           { name: 'Privacy Policy', link: '/legal/privacy' },
    //           { name: 'Cookie Policy', link: '/legal/cookies' },
    //           { name: 'Security', link: '/payment' },
    //         ].map((legal, index) => (
    //           <motion.li
    //             key={index}
    //             whileHover={{ scale: 1.05 }}
    //             className="cursor-pointer transition duration-300 hover:text-[#317371]"
    //           >
    //             <Link to={legal.link}>{legal.name}</Link>
    //           </motion.li>
    //         ))}
    //       </ul>
    //     </div>

    //     {/* Newsletter Section */}
    //     <div>
    //       <h3 className="text-lg font-bold">Newsletter</h3>
    //       <motion.div
    //         initial={{ opacity: 0, y: 10 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5 }}
    //         className="mt-3"
    //       >
    //         <input
    //           type="email"
    //           placeholder="Enter your email"
    //           className="w-full rounded-md border border-gray-300 bg-white p-2 focus:ring-2 focus:ring-[#317371] focus:outline-none"
    //         />
    //         <motion.button
    //           whileHover={{ scale: 1.1 }}
    //           whileTap={{ scale: 0.9 }}
    //           className="mt-2 w-full rounded-md bg-[#A989B0] py-2 text-white transition duration-300 hover:bg-orange-600"
    //         >
    //           Subscribe
    //         </motion.button>
    //       </motion.div>
    //     </div>
    //   </div>
    // </footer>
    <footer className='bg-[#edf5ff] relative'>

      {/* newsletter div */}
      <motion.div 
      whileHover={{ scale: 1.02}}
      className='md:flex gap-4 justify-between w-full max-w-screen-xl mx-auto bg-[#78a6c4] p-6 md:p-10 rounded-2xl absolute -top-20 left-1/2 -translate-x-1/2'>
        <h1 className='text-2xl text-white md:text-4xl lg:text-5xl my-auto font-bold max-sm:py-4'>Sign up for Our Newsletter Today!</h1>
        <div className=''>
          <input type="email" className='input rounded-xl' placeholder='Your Email' />
          <motion.button
            whileHover={{ scale: 1.06 }}
            className='btn w-full bg-[#274f7a] text-white font-bold text-lg rounded-xl border-none shadow-none px-6 my-2'>Subscribe</motion.button>
        </div>
      </motion.div>

      {/* footer div */}
      <div className='max-w-screen-2xl mx-auto lg:flex justify-between gap-6 p-10 py-16 pt-34'>

        <div className='grid gap-4 lg:gap-16 md:grid-cols-2'>

          {/* first */}
          <div>
            {/* logo */}
            <div>
              <Link to="/" className="flex gap-2 items-center">
                <Logo />
                <div className="text-2xl md:text-3xl font-bold">
                  <span className="text-[#274f7a]">Tick</span>
                  <span className="">To</span>
                </div>
              </Link>
              <motion.p
                whileHover={{ scale: 1.05 }}
                className='max-w-sm my-2 transition duration-300'>
                TickTo is your one-stop destination for all things events. From concerts to conferences, we bring you the best experiences in one place. Join us and never miss out on the excitement!
              </motion.p>
            </div>

            {/* social Icons */}
            <div className='my-4'>
              <h3 className='text-xl font-bold'>Follow Us:</h3>
              <Socials />
            </div>
          </div>

          {/* second */}
          <div className='lg:max-w-sm '>
            <div>
              <h3 className='text-xl font-bold'>Address</h3>
              <motion.p
                whileHover={{ scale: 1.05 }}
                className='py-3 cursor-pointer transition duration-300 hover:text-[#274f7a]'>Plot #15, Road #103, Gulshan Avenue, Gulshan-2, <br /> Dhaka, Bangladesh</motion.p>
            </div>


            <hr className='my-4 hidden lg:block' />

            <div>
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="mt-3 space-y-1 text-gray-700">
                {[
                  { name: 'Booking', link: '/services/booking' },
                  { name: 'Event Management', link: '/services/event-management' },
                  { name: 'Customer Support', link: '/services/customer-support' },
                  { name: 'Refund Policy', link: '/services/refund-policy' },
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer transition duration-300 hover:text-[#274f7a]"
                  >
                    <Link to={service.link}>{service.name}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>

        </div>


        {/* third */}
        <div className='mt-16 lg:mt-0'>
          <h3 className='text-xl font-bold'>Mail:</h3>
          <motion.p
            whileHover={{ scale: 1.06 }}
            className='text-3xl font-bold text-[#274f7a] transition duration-300'>tickto.help@gmail.com</motion.p>

          <hr className='my-8' />

          <div className='grid grid-cols-2'>
            <div>
              <h3 className='text-xl font-bold'>Phone:</h3>
              <ul className='space-y-1 mt-3'>
                {[
                  "+880 1934278963",
                  "+880 1234567890",
                  "+880 1326594211"
                ].map((number, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.08 }}
                    className="flex items-center gap-1 cursor-pointer transition duration-300 hover:text-[#274f7a]"
                  ><MdCall /> {number}</motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='text-xl font-bold'>Payment System:</h3>
              <div className='grid grid-cols-3 gap-3 my-3'>
                {[
                  { name: "Strip", icon: strip },
                  { name: "Bkash", icon: bkash },
                  { name: "rocket", icon: rocket },
                  { name: "nagad", icon: nogod },
                ].map((pay, index) => <motion.div
                  key={index}
                  whileHover={{ scale: 1.08 }}
                  className="cursor-pointer transition duration-300 hover:text-[#274f7a]"
                >
                  <img src={pay.icon} alt={pay.name} className='w-20 h-12' />
                </motion.div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
