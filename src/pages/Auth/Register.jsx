import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
// import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/auth/authSlice';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';

const userImage_hosting_key = import.meta.env.VITE_USERIMAGE_KEY;
const userImage_hosting_api = `https://api.imgbb.com/1/upload?key=${userImage_hosting_key}`;

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { updateUserProfile, createUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const dispatch = useDispatch()

  const onSubmit = async (data) => {
    // dispatch(registerUser(data))

    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(userImage_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      const imageURL = res.data.data.display_url;
      const currentDateTime = new Date().toUTCString();
      updateUserProfile(data.name, data.number, imageURL)
        .then(() => {
          const userInfo = {
            name: data?.name,
            email: data?.email,
            number: data.number,
            created_at: currentDateTime,
            photoURL: imageURL,
          };
          // console.log( " photo is ", photoURL);
          axiosPublic.post('/api/users', userInfo).then((res) => {
            if (res?.data?.insertedId) { 
              // console.log('user added');
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                title: 'Sign Up Successful',
                icon: 'success',
                showClass: {
                  popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                      `,
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                    `,
                },
              });
            }
            navigate('/');
          }});
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="blur-bg grid min-h-screen max-w-screen-xl rounded-2xl border border-gray-400 text-white md:min-h-fit md:w-[96%] md:grid-cols-2">
        {/* second part */}
        <div className="flex items-center justify-center rounded-r-2xl py-10 text-center md:hidden md:bg-black/30 md:p-10 md:py-20">
          <div>
            <h1 className="text-2xl font-bold">Wellcome to TickTo</h1>
            <p className="mx-auto w-[80%] py-6 text-sm">
              Discover trending events and personalized recommendations. From local gatherings to
              global spectacles, find experiences that match your interests.Book with confidence
              using our secure payment system. Enjoy a hassle-free ticketing experience with instant
              confirmation and digital access.
            </p>
            <p className="mx-auto w-[90%]">
              Already have an account?{' '}
              <Link to={'/auth/login'} className="link text-[#67B293]">
                {' '}
                Login{' '}
              </Link>{' '}
              Now
            </p>
          </div>
        </div>

        {/* first part */}
        <div className="md:p-6 md:py-20">
          <div className="">
            <h3 className="text-center text-2xl font-semibold">Sign In</h3>
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
                  {...register('name')}
                  className="input input-bordered w-full bg-gray-200 text-gray-900"
                  required
                />
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
                  {...register('email')}
                  className="input input-bordered w-full bg-gray-200 text-gray-900"
                  required
                />
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
                  {...register('image')}
                  className="file-input file-input-ghost file-input-bordered mx-auto w-full bg-gray-200 text-gray-500"
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
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn w-full border-none bg-[#A989B0] text-white shadow-none"
                >
                  Register
                </motion.button>
              </div>
            </form>

            <div className="mx-auto mt-5 flex w-1/3 justify-center gap-3">
              <div className="rounded-full border border-[#67B293] p-1">
                <FaFacebook className="text-xl text-[#A989B0] hover:text-[#67B293]" />
              </div>

              <div className="rounded-full border border-[#67B293] p-1">
                <FaGoogle className="text-xl text-[#A989B0] hover:text-[#67B293]" />
              </div>

              <div className="rounded-full border border-[#67B293] p-1">
                <FaGithub className="text-xl text-[#A989B0] hover:text-[#67B293]" />
              </div>
            </div>
          </div>
        </div>

        {/* second part */}
        <div className="hidden md:block">
          <div className="flex h-full items-center justify-center rounded-r-2xl py-10 text-center md:bg-black/30 md:p-10 md:py-20">
            <div>
              <h1 className="text-3xl font-bold">Wellcome to TickTo</h1>
              <p className="mx-auto w-[80%] py-6 text-sm">
                Discover trending events and personalized recommendations. From local gatherings to
                global spectacles, find experiences that match your interests.Book with confidence
                using our secure payment system. Enjoy a hassle-free ticketing experience with
                instant confirmation and digital access.
              </p>
              <p>
                Already have an account?{' '}
                <Link to={'/auth/login'} className="link text-[#67B293]">
                  {' '}
                  Login{' '}
                </Link>{' '}
                Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
