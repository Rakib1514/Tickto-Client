import Lottie from "lottie-react";
import errorLottie from "../../assets/lotties/errorPage.json";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="lg:h-[500px] md:w-[600px] mx-auto mt-[100px]">
      <div>
        <Lottie animationData={errorLottie}></Lottie>
      </div>
      <button
        class="go-home-btn mt-10 mx-auto block px-6 py-2 text-white font-semibold text-lg bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 cursor-pointer"
        onClick={handleNavigate}
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
