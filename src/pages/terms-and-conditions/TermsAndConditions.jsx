import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <div className="bg-[#FFF9F1] flex justify-center items-center min-h-screen p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="container mx-auto bg-white shadow-xl rounded-2xl p-6 lg:p-10 border border-[#D9D9D9] space-y-10"
      >
        {/* Header Section */}
        <div className="text-center space-y-2">
          <motion.div className="bg-[#317371] text-white px-4 py-1 rounded-md inline-block text-sm">
            User Agreement
          </motion.div>
          <h1 className="text-3xl font-bold text-[#317371]">TERMS OF SERVICE</h1>
        </div>

        {/* Account Security */}
		<div className="text-center space-y-2">
          <motion.div className="bg-[#317371] text-white px-4 py-1 rounded-md inline-block text-sm">
            Keeping Your Account Safe
          </motion.div>
          <h1 className="text-2xl font-semibold text-[#317371]">ACCOUNT SECURITY</h1>
        </div>
        <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white border border-[#D9D9D9] shadow-md rounded-xl">
          <ul className="space-y-2 text-gray-700">
            {[
              "You are responsible for maintaining the confidentiality of your account credentials.",
              "Any activity that occurs under your account is your responsibility.",
              "Notify us immediately if you suspect unauthorized access to your account.",
              "Using strong passwords and enabling two-factor authentication is highly recommended.",
              "We reserve the right to suspend accounts with suspicious activities."
            ].map((point, index) => (
              <li key={index} className="flex items-start space-x-2">
                <FaCheckCircle className="text-[#785F54] mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Accept Button */}
        <div className="mt-8 text-center">
          <motion.button 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
            className="btn bg-[#F67E04] text-white px-6 py-2 rounded-lg hover:bg-orange-600"
          >
            Accept Terms
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default TermsAndConditions;
