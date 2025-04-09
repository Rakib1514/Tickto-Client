import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Socials = (textcolor) => {
  return (
    <div className={`my-2 flex gap-2 text-2xl ${textcolor} text-[#317371]`}>
      <FaFacebookF />
      <FaInstagram />
      <FaXTwitter />
      <FaLinkedin />
    </div>
  );
};

export default Socials;
