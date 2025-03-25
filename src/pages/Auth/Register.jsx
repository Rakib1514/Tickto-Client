import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/auth/authSlice';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch()

    const onSubmit = async (data) => {

        console.log(data)
        dispatch(registerUser(data))

    };


    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='blur-bg min-h-screen md:min-h-fit grid md:grid-cols-2 border border-gray-400 text-white rounded-2xl max-w-screen-xl md:w-[96%]'>

                {/* second part */}
                <div className='md:hidden md:p-10 py-10 md:py-20 flex justify-center items-center text-center md:bg-black/30 rounded-r-2xl'>

                    <div >
                        <h1 className='font-bold text-2xl'>Wellcome to TickTo</h1>
                        <p className='py-6 w-[80%] mx-auto text-sm'>Discover trending events and personalized recommendations. From local gatherings to global spectacles, find experiences that match your interests.Book with confidence using our secure payment system. Enjoy a hassle-free ticketing experience with instant confirmation and digital access.</p>
                        <p className='w-[90%] mx-auto'>Already have an account? <Link to={'/auth/login'} className='text-[#67B293] link'> Login </Link> Now</p>

                    </div>

                </div>

                {/* first part */}
                <div className='md:p-6 md:py-20'>

                    <div className=''>
                        <h3 className='text-2xl text-center font-semibold'>Sign In</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text py-1">Name</span>
                                </label>
                                <br />

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    {...register("name")}
                                    className="input input-bordered w-full bg-gray-200 text-gray-900" required />

                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text py-1">Email</span>
                                </label>
                                <br />

                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    {...register("email")}
                                    className="input input-bordered w-full bg-gray-200 text-gray-900" required />

                            </div>

                            {/* photo */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text py-1">Photo</span>
                                </label>
                                <br />

                                <input
                                    type="file"
                                    placeholder="Your Email"
                                    {...register("image")}
                                    className='file-input file-input-ghost file-input-bordered w-full bg-gray-200 text-gray-500 mx-auto' required />

                            </div>

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text p-1">Password</span>
                                </label>
                                <br />

                                <input
                                    type="password"
                                    placeholder="Your Password"
                                    {...register("password")}
                                    className="input input-bordered w-full bg-gray-200 text-gray-900" required />

                            </div>


                            <div className="form-control mt-6">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn border-none bg-[#A989B0] text-white shadow-none w-full">Register</motion.button>
                            </div>
                        </form>

                        <div className=' w-1/3 mx-auto mt-5 flex gap-3 justify-center'>
                            <div className='border border-[#67B293] rounded-full p-1 '>
                                <FaFacebook className='text-xl text-[#A989B0] hover:text-[#67B293]' />
                            </div>

                            <div className='border border-[#67B293] rounded-full p-1 '>
                                <FaGoogle className='text-xl text-[#A989B0] hover:text-[#67B293]' />
                            </div>

                            <div className='border border-[#67B293] rounded-full p-1'>
                                <FaGithub className='text-xl text-[#A989B0] hover:text-[#67B293]' />
                            </div>
                        </div>
                    </div>

                </div>

                {/* second part */}
                <div className='hidden md:block '>

                    <div className='md:p-10 py-10 h-full md:py-20 flex justify-center items-center text-center md:bg-black/30 rounded-r-2xl'>

                        <div >
                            <h1 className='font-bold text-3xl'>Wellcome to TickTo</h1>
                            <p className='py-6 w-[80%] mx-auto text-sm'>Discover trending events and personalized recommendations. From local gatherings to global spectacles, find experiences that match your interests.Book with confidence using our secure payment system. Enjoy a hassle-free ticketing experience with instant confirmation and digital access.</p>
                            <p>Already have an account? <Link to={'/auth/login'} className='text-[#67B293] link'> Login </Link> Now</p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;