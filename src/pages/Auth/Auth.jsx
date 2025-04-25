import React from 'react';


import authbg from '../../Assets/auth/techBD.png'
import { Outlet, useNavigate } from 'react-router';
import { IoIosArrowBack } from 'react-icons/io';
import './auth.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../Redux/auth/authSlice';

const Auth = () => {
  const { user, loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{
        background: `url("${authbg}")`,
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
