import React from 'react';

const Register = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='blur-bg grid md:grid-cols-2 border border-gray-400 text-white rounded-2xl max-w-screen-xl'>
                
                {/* first part */}
                <div className='p-10 py-20 flex justify-center items-center text-center bg-black/30 rounded-l-2xl'>

                    <div >
                        <h1 className='font-bold text-3xl'>Wellcome to TickTo</h1>
                        <p className='py-6 w-[80%] mx-auto text-sm'>Discover trending events and personalized recommendations. From local gatherings to global spectacles, find experiences that match your interests.Book with confidence using our secure payment system. Enjoy a hassle-free ticketing experience with instant confirmation and digital access.</p>
                        <p>Do not have an account? <Link to={'/auth/register'}> Register </Link> First</p>

                    </div>

                </div>

                {/* second part */}
                <div className='p-6 py-20'>

                    <div className=''>
                        <h3 className='text-2xl text-center font-semibold'>Login here</h3>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label> <br />
                                <input type="email" placeholder="email" className="input input-bordered w-full bg-gray-200 text-gray-900" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label> <br />
                                <input type="password" placeholder="password" className="input input-bordered w-full bg-gray-200 text-gray-900" required /> <br />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn border-none bg-purple-600 shadow-none w-full">Login</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;