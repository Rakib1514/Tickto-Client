import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { setLoading, userSignUp } from "../../Redux/authSlice";
import toast from "react-hot-toast";

const userImage_hosting_key = import.meta.env.VITE_USERIMAGE_KEY;
const userImage_hosting_api = `https://api.imgbb.com/1/upload?key=${userImage_hosting_key}`;

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleUserSignUp = async (data) => {
    try {
      dispatch(setLoading(true));
      const imageFile = { image: data.image[0] };
      const res = await axios.post(userImage_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      const imageUrl = res.data.data.display_url;
      const currentDateTime = new Date().toUTCString();

      const result = await userSignUp(data.email, data.password);

      if (!result.user) {
        throw new Error("Something went wrong! User not created");
      }

      const user = {
        name: data.name,
        email: data.email,
        uid: result.user.uid,
        photoURL: imageUrl,
        createdAt: currentDateTime,
        role: "user",
      };

      const resUser = await axios.post("/api/users", user);

      if (!resUser.data.insertedId) {
        throw new Error("User not created in database");
      }

      reset();
      toast.success("User created Successfully");
      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error.message);
    
        toast("User not created. Please try again. (We will change this alert to toast later")
      
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="blur-bg grid min-h-screen max-w-screen-xl rounded-2xl border border-gray-400 text-white md:min-h-fit md:w-[96%] md:grid-cols-2">
        {/* second part (mobile view) */}
        <div className="flex items-center justify-center rounded-r-2xl py-10 text-center md:hidden md:bg-black/30 md:p-10 md:py-20">
          <div>
            <h1 className="text-2xl font-bold">Welcome to TickTo</h1>
            <p className="mx-auto w-[80%] py-6 text-sm">
              Discover trending events and personalized recommendations. From
              local gatherings to global spectacles, find experiences that match
              your interests. Book with confidence using our secure payment
              system. Enjoy a hassle-free ticketing experience with instant
              confirmation and digital access.
            </p>
            <p className="mx-auto w-[90%]">
              Already have an account?{" "}
              <Link to={"/auth/login"} className="link text-[#67B293]">
                Login
              </Link>{" "}
              Now
            </p>
          </div>
        </div>

        {/* first part (form) */}
        <div className="md:p-6 md:py-20">
          <div>
            <h3 className="text-center text-3xl font-semibold">
              Create an Account
            </h3>
            <form
              onSubmit={handleSubmit(handleUserSignUp)}
              className="card-body"
            >
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text py-1">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="input input-bordered w-full bg-gray-200 text-gray-900"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text py-1">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="input input-bordered w-full bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Photo */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text py-1">Photo</span>
                </label>
                <input
                  type="file"
                  {...register("image", { required: "Photo is required" })}
                  className="file-input file-input-ghost file-input-bordered mx-auto w-full bg-gray-200 text-gray-500"
                />
                {errors.image && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.image.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text py-1">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="input input-bordered w-full bg-gray-200 text-gray-900"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn w-full border-none bg-[#78a6c4] text-white shadow-none hover:scale-105 active:scale-95 transition-all duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? "Registering..." : "Register"}
                </button>
              </div>
            </form>

            {/* Social login icons */}
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

        {/* second part (desktop view) */}
        <div className="hidden md:block">
          <div className="flex h-full items-center justify-center rounded-r-2xl py-10 text-center md:bg-black/30 md:p-10 md:py-20">
            <div>
              <h1 className="text-3xl font-bold">Welcome to TickTo</h1>
              <p className="mx-auto w-[80%] py-6 text-sm">
                Discover trending events and personalized recommendations. From
                local gatherings to global spectacles, find experiences that
                match your interests. Book with confidence using our secure
                payment system. Enjoy a hassle-free ticketing experience with
                instant confirmation and digital access.
              </p>
              <p>
                Already have an account?
                <Link to={"/auth/login"} className="link text-[#67B293]">
                  {" "}
                  Login
                </Link>{" "}
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
