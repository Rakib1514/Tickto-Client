// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from './Logo';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="bordr-2 boder-t bg-[#317371]/30 px-2 py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Logo & Social Icons */}
        <div className="flex flex-col items-center space-y-4 md:items-start">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <Logo />
            <div className="text-3xl font-bold">
              <span className="text-[#317371]">Tick</span>
              <span className="">To</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex space-x-4"
          >
            <Socials/>
          </motion.div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-lg font-bold">Services</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            {[
              { name: 'Booking', link: '/services/booking' },
              { name: 'Event Management', link: '/services/event-management' },
              { name: 'Customer Support', link: '/services/customer-support' },
              { name: 'Refund Policy', link: '/services/refund-policy' },
            ].map((service, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer transition duration-300 hover:text-[#317371]"
              >
                <Link to={service.link}>{service.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-lg font-bold">Legal</h3>
          <ul className="mt-3 space-y-2 text-gray-700">
            {[
              { name: 'Terms of Use', link: '/terms' },
              { name: 'Privacy Policy', link: '/legal/privacy' },
              { name: 'Cookie Policy', link: '/legal/cookies' },
              { name: 'Security', link: '/legal/security' },
            ].map((legal, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer transition duration-300 hover:text-[#317371]"
              >
                <Link to={legal.link}>{legal.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold">Newsletter</h3>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-gray-300 bg-white p-2 focus:ring-2 focus:ring-[#317371] focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-2 w-full rounded-md bg-[#A989B0] py-2 text-white transition duration-300 hover:bg-orange-600"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
