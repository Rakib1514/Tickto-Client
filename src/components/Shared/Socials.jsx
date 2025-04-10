import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Socials = (textcolor) => {
  return (
    <div className={`my-2 flex gap-2 text-2xl ${textcolor} text-[#A989B0]`}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebookF className=" transition duration-300 hover:text-[#317371]" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className=" transition duration-300 hover:text-[#317371]" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className=" transition duration-300 hover:text-[#317371]" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className=" transition duration-300 hover:text-[#317371]" />
      </a>
    </div>
  );
};

export default Socials;
