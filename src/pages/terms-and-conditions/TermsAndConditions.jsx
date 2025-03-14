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
