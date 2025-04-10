import { motion } from 'framer-motion';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#F5F7FA] to-[#E2E8F0] px-4">
      <motion.div
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-gray-100 bg-white p-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Background Element */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#A2B9A7]/10 to-[#317371]/10"></div>

        {/* Illustration */}
        <motion.div
          className="mx-auto mb-6 w-72"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img
            src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?t=st=1741960444~exp=1741964044~hmac=b6c0fdcea98900d7dd5348a190ec1d946fd79aa21fd85d38757f820f5bd2240f&w=996"
            alt="404 Error"
            className="h-auto w-full object-cover"
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          className="mb-4 text-4xl font-extrabold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mb-8 text-lg leading-relaxed text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          The page you're looking for might have been removed or is temporarily unavailable. Let's
          get you back on track!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <button
            className="group flex cursor-pointer items-center rounded-xl bg-gradient-to-r from-[#317371] to-[#A2B9A7] px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:from-[#A2B9A7] hover:to-[#317371] hover:shadow-lg focus:ring-4 focus:ring-[#317371]/30 focus:outline-none"
            onClick={handleNavigate}
          >
            <FaHome className="mr-2 transition-transform duration-300 group-hover:scale-110" />
            Go Home
          </button>
          <button
            className="group flex cursor-pointer items-center rounded-xl border-2 border-[#317371] px-6 py-3 font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:bg-[#317371] hover:text-white hover:shadow-lg focus:ring-4 focus:ring-[#317371]/30 focus:outline-none"
            onClick={handleGoBack}
          >
            <FaArrowLeft className="mr-2 transition-transform duration-300 group-hover:scale-110" />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
