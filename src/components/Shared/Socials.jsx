import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Socials = () => {
    return (
        <div className='flex text-2xl gap-2 my-2 text-[#317371]'>
            <FaFacebookF  />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
        </div>
    );
};

export default Socials;