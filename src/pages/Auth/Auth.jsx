import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import authBg from '../../Assets/auth/techBD.png';
import './auth.css';

const Auth = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{
        background: `url("${authBg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Outlet />
      <div
        onClick={() => navigate('/')}
        className="md:blur-bg absolute top-3 left-2 flex items-center justify-center rounded-full border-gray-300 pr-1 text-2xl font-bold text-white md:top-5 md:left-5 md:border md:p-1 md:pr-[6px]"
      >
        <IoIosArrowBack />
      </div>
      
    </div>
  );
};

export default Auth;
