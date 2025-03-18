import React from 'react';
import authbg from '../../Assets/auth/authanimate.jpg'
// import authbg from '../../Assets/auth/northern_lights.jpg'
// import authbg from '../../Assets/auth/Norway.jpg'
import { Outlet, useNavigate } from 'react-router';
import { IoIosArrowBack } from "react-icons/io";
import './auth.css'

const Auth = () => {

    const navigate = useNavigate()

    return (
        <div className='min-h-screen flex justify-center items-center' style={{ background: `url("${authbg}")`, backgroundSize: 'cover', backgroundPosition: "center",
        backgroundRepeat: "no-repeat"}}>
            <Outlet/>
            <div onClick={()=>navigate('/')} className='text-white md:blur-bg md:border border-gray-300 md:p-1 pr-1 md:pr-[6px] font-bold rounded-full flex justify-center items-center text-2xl absolute md:top-5 top-3 md:left-5 left-2'>
            <IoIosArrowBack />
            </div>
        </div>
    );
};

export default Auth;