import "./auth.css";
import { Link, useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"; // ✅ fixed missing import
import {
  setLoading,
  signInWithGoogle,
  userSignIn,
} from "../../Redux/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUserSignIn = async (data) => {
    const { email, password } = data;
    try {
      dispatch(setLoading(true));
      const result = await userSignIn(email, password);
      if (!result.user) {
        throw new Error("User not found");
      }
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Invalid email or password. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      dispatch(setLoading(true));
      const result = await signInWithGoogle();
      if (!result.user) {
        alert("Something went wrong. Please try again.");
        throw new Error("User not found");
      }
      alert("Login successful with Google!");
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="blur-bg grid min-h-screen max-w-screen-xl rounded-2xl border border-gray-400 text-white md:min-h-fit md:w-[96%] md:grid-cols-2">
        {/* First Part */}
        <div className="flex items-center justify-center rounded-l-2xl py-10 text-center md:bg-black/30 md:p-10 md:py-20">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">
              Welcome to TickTo
            </h1>
            <p
              className="mx-auto w-[80%] py-6 text-sm"
            >
              Discover trending events and personalized recommendations.
            </p>
            <p className="mx-auto w-[90%]">
              Do not have an account?{" "}
              <Link to={"/auth/register"} className="link text-[#67B293]">
                Register
              </Link>{" "}
              First
            </p>
          </div>
        </div>

        {/* Second Part */}
        <div className="md:p-6 md:py-20">
          <div className="">
            <h3 className="text-center text-3xl font-semibold">Login here</h3>
            <form
              onSubmit={handleSubmit(handleUserSignIn)}
              className="card-body"
            >
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text py-1">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: "Email is required" })}
                  className="input input-bordered w-full bg-gray-200 text-gray-900"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text p-1">Password</span>
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

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`btn w-full border-none bg-[#78a6c4] text-white shadow-none hover:scale-105 active:scale-95 transition-all duration-200 ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>
              </div>
            </form>

            {/* Social Logins */}
            <div className="mx-auto mt-5 flex w-1/3 justify-center gap-3">
              <div className="rounded-full border border-[#67B293] p-1">
                <FaFacebook className="text-xl text-[#A989B0] hover:text-[#67B293]" />
              </div>
              <div
                onClick={handleGoogleSignIn}
                className="rounded-full border border-[#67B293] p-1 cursor-pointer"
              >
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
