import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Socials = () => {
  return (
    <div className="my-4 flex gap-3 text-2xl text-[#274f7a] ">
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className=" transition duration-300 hover:text-[#78a6c4]" />
      </motion.a>


      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className=" transition duration-300 hover:text-[#78a6c4]" />
      </motion.a>


      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className=" transition duration-300 hover:text-[#78a6c4]" />
      </motion.a>


      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className=" transition duration-300 hover:text-[#78a6c4]" />
      </motion.a>
    </div>
  );
};

export default Socials;
