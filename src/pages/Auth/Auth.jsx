import React from 'react';
import authbg from '../../Assets/auth/authanimate.jpg'
// import authbg from '../../Assets/auth/northern_lights.jpg'
// import authbg from '../../Assets/auth/Norway.jpg'
import { Outlet, useNavigate } from 'react-router';
import { IoIosArrowBack } from "react-icons/io";
import './auth.css'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../Redux/auth/authSlice';

const Auth = () => {

    const { user, loading, error } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div className='min-h-screen flex justify-center items-center' style={{
            background: `url("${authbg}")`, backgroundSize: 'cover', backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <Outlet />
            <div onClick={() => navigate('/')} className='text-white md:blur-bg md:border border-gray-300 md:p-1 pr-1 md:pr-[6px] font-bold rounded-full flex justify-center items-center text-2xl absolute md:top-5 top-3 md:left-5 left-2'>
                <IoIosArrowBack />
            </div>
            {
                user && <button onClick={handleLogout} className='btn text-white bg-[#A989B0] border-none p-2 absolute md:top-5 top-3 md:right-5 right-2'>
                            LogOut
                        </button>
            }
        </div>
    );
};

export default Auth;