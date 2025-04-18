import React from 'react';
import authbg from '../../Assets/auth/authanimate.jpg';
// import authbg from '../../Assets/auth/northern_lights.jpg'
// import authbg from '../../Assets/auth/Norway.jpg'
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
      {user && (
        <button
          onClick={handleLogout}
          className="btn absolute top-3 right-2 border-none bg-[#A989B0] p-2 text-white md:top-5 md:right-5"
        >
          LogOut
        </button>
      )}
    </div>
  );
};

export default Auth;
