// import React, { useContext } from 'react';
import './auth.css';
import { Link, useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { loginUser, loginWithGoogle } from '../../Redux/auth/authSlice';

const Login = () => {
  // const { setuser, loginWithGoogle, } = useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  // const { user, loading, error } = useSelector(state => state.auth)

  const onSubmit = async (data) => {
    dispatch(loginUser(data));
  };

  // google login as worker
  const handleGoogle = () => {
    dispatch(loginWithGoogle());

    //login with google redirect
    navigate(from, { replace: true });
    // .then(res => {

    //     setuser(res.user)

    //     console.log(res.user)

    //     const Toast = Swal.mixin({
    //         toast: true,
    //         position: "top-end",
    //         showConfirmButton: false,
    //         timer: 3000,
    //         timerProgressBar: true,
    //         didOpen: (toast) => {
    //             toast.onmouseenter = Swal.stopTimer;
    //             toast.onmouseleave = Swal.resumeTimer;
    //         }
    //     });
    //     Toast.fire({
    //         icon: "success",
    //         title: "Signed in successfully"
    //     });
    //     navigate('/')

    // })
    // .catch(err => {
    //     const Toast = Swal.mixin({
    //         toast: true,
    //         position: "top-end",
    //         showConfirmButton: false,
    //         timer: 3000,
    //         timerProgressBar: true,
    //         didOpen: (toast) => {
    //             toast.onmouseenter = Swal.stopTimer;
    //             toast.onmouseleave = Swal.resumeTimer;
    //         }
    //     });
    //     Toast.fire({
    //         icon: "error",
    //         title: "Something went wrong"
    //     });
    // })
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="blur-bg grid min-h-screen max-w-screen-xl rounded-2xl border border-gray-400 text-white md:min-h-fit md:w-[96%] md:grid-cols-2">
        {/* first part */}
        <div className="flex items-center justify-center rounded-l-2xl py-10 text-center md:bg-black/30 md:p-10 md:py-20">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">Wellcome to TickTo</h1>
            <motion.p 
            whileHover={{ scale: 1.03}}
            className="mx-auto w-[80%] py-6 text-sm">
              Discover trending events and personalized recommendations. From local gatherings to
              global spectacles, find experiences that match your interests.Book with confidence
              using our secure payment system. Enjoy a hassle-free ticketing experience with instant
              confirmation and digital access.
            </motion.p>
            <p className="mx-auto w-[90%]">
              Do not have an account?{' '}
              <Link to={'/auth/register'} className="link text-[#67B293]">
                Register
              </Link>
              {' '}First
            </p>
          </div>
        </div>

        {/* second part */}
        <div className="md:p-6 md:py-20">
          <div className="">
            <h3 className="text-center text-3xl font-semibold">Login here</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text py-1">Email</span>
                </label>
                <br />

                <input
                  type="email"
                  placeholder="Your Email"
                  {...register('email')}
                  className="input input-bordered w-full bg-gray-200 text-gray-900"
                  required
                />
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
                  {...register('password')}
                  className="input input-bordered w-full bg-gray-200 text-gray-900"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn w-full border-none bg-[#78a6c4] text-white shadow-none"
                >
                  Login
                </motion.button>
              </div>
            </form>

            <div className="mx-auto mt-5 flex w-1/3 justify-center gap-3">
              <div className="rounded-full border border-[#67B293] p-1">
                <FaFacebook className="text-xl text-[#A989B0] hover:text-[#67B293]" />
              </div>

              <div onClick={handleGoogle} className="rounded-full border border-[#67B293] p-1">
                <FaGoogle className="text-xl text-[#A989B0] hover:text-[#67B293]" />
              </div>

              <div className="rounded-full border border-[#67B293] p-1">
                <FaGithub className="text-xl text-[#A989B0] hover:text-[#67B293]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
