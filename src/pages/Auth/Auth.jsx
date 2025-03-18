import React from 'react';
import authbg from '../../Assets/auth/authanimate.jpg'
// import authbg from '../../Assets/auth/northern_lights.jpg'
// import authbg from '../../Assets/auth/Norway.jpg'
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='min-h-screen flex justify-center items-center' style={{ background: `url("${authbg}")`, backgroundSize: 'cover', backgroundPosition: "center",
        backgroundRepeat: "no-repeat"}}>
            <Outlet/>
        </div>
    );
};

export default Auth;