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
            <div onClick={()=>navigate('/')} className='text-white blur-bg border border-gray-300 p-1 pr-[6px] font-bold rounded-full flex justify-center items-center text-2xl absolute top-5 left-5'>
            <IoIosArrowBack />
            </div>
        </div>
    );
};

export default Auth;