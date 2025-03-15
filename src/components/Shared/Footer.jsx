// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9] text-black py-10 px-5 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <div className="bg-white p-2 rounded-md shadow-md">logo</div>
            <h2 className="text-2xl font-bold">TickBook</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex space-x-4"
          >
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-[#785F54] text-xl cursor-pointer hover:text-[#317371] transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-[#785F54] text-xl cursor-pointer hover:text-[#317371] transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#785F54] text-xl cursor-pointer hover:text-[#317371] transition duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-[#785F54] text-xl cursor-pointer hover:text-[#317371] transition duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-bold text-lg">Services</h3>
          <ul className="space-y-2 text-gray-700 mt-3">
            {[
              { name: "Booking", link: "/services/booking" },
              { name: "Event Management", link: "/services/event-management" },
              { name: "Customer Support", link: "/services/customer-support" },
              { name: "Refund Policy", link: "/services/refund-policy" },
            ].map((service, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }} className="cursor-pointer hover:text-[#317371] transition duration-300">
                <Link to={service.link}>{service.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="font-bold text-lg">Legal</h3>
          <ul className="space-y-2 text-gray-700 mt-3">
            {[
              { name: "Terms of Use", link: "/terms-and-condition" },
              { name: "Privacy Policy", link: "/legal/privacy" },
              { name: "Cookie Policy", link: "/legal/cookies" },
              { name: "Security", link: "/legal/security" },
            ].map((legal, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }} className="cursor-pointer hover:text-[#317371] transition duration-300">
                <Link to={legal.link}>{legal.name}</Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-bold text-lg">Newsletter</h3>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#317371]"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-2 w-full bg-[#F67E04] text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Submit
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
