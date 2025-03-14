import { motion } from "framer-motion";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#F5F7FA] to-[#E2E8F0] px-4">
      <motion.div
        className="max-w-lg w-full bg-white rounded-3xl p-10 text-center border border-gray-100 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Background Element */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A2B9A7]/10 to-[#317371]/10 rounded-3xl pointer-events-none"></div>

        {/* Illustration */}
        <motion.div
          className="w-72 mx-auto mb-6"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?t=st=1741960444~exp=1741964044~hmac=b6c0fdcea98900d7dd5348a190ec1d946fd79aa21fd85d38757f820f5bd2240f&w=996"
            alt="404 Error"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-500 text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The page you're looking for might have been removed or is temporarily unavailable. Let's get you back on track!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button
            className="group cursor-pointer flex items-center px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#317371] to-[#A2B9A7] rounded-xl shadow-md transition-all duration-300 hover:from-[#A2B9A7] hover:to-[#317371] hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#317371]/30"
            onClick={handleNavigate}
          >
            <FaHome className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            Go Home
          </button>
          <button
            className="group cursor-pointer flex items-center px-6 py-3 text-gray-800 font-semibold border-2 border-[#317371] rounded-xl transition-all duration-300 hover:bg-[#317371] hover:text-white hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#317371]/30"
            onClick={handleGoBack}
          >
            <FaArrowLeft className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;