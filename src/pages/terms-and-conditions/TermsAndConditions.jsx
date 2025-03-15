// eslint-disable-next-line no-unused-vars
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

        {/* Keeping Your Account Safe section  */}
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

	   {/* Fair Usage Policy section */}
	   <div className="text-center space-y-2">
          <motion.div className="bg-[#317371] text-white px-4 py-1 rounded-md inline-block text-sm">
            Fair Usage Policy
          </motion.div>
          <h1 className="text-2xl font-semibold text-[#317371]">PROHIBITED ACTIVITIES</h1>
        </div>
        <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white border border-[#D9D9D9] shadow-md rounded-xl">
          <ul className="space-y-2 text-gray-700">
            {[
              "Unauthorized access, hacking, or any malicious activity is strictly forbidden.",
              "Scraping, data mining, or any form of automated data extraction is prohibited.",
              "Harassment, abusive behavior, or spamming other users is not allowed.",
              "You may not use our platform for illegal or fraudulent purposes.",
              "Attempts to interfere with platform security will lead to legal actions."
            ].map((point, index) => (
              <li key={index} className="flex items-start space-x-2">
                <FaCheckCircle className="text-[#785F54] mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

		{/* Protecting Our Content section  */}
		<div className="text-center space-y-2">
          <motion.div className="bg-[#317371] text-white px-4 py-1 rounded-md inline-block text-sm">
            Protecting Our Content
          </motion.div>
          <h1 className="text-2xl font-semibold text-[#317371]">INTELLECTUAL PROPERTY</h1>
        </div>
        <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white border border-[#D9D9D9] shadow-md rounded-xl">
          <ul className="space-y-2 text-gray-700">
            {[
              "All trademarks, logos, and content on this platform are owned by us.",
              "You may not copy, reproduce, or distribute any material without permission.",
              "User-generated content remains the property of the respective users.",
              "Any unauthorized use of our intellectual property is strictly prohibited.",
              "We reserve the right to remove content that violates copyrights."
            ].map((point, index) => (
              <li key={index} className="flex items-start space-x-2">
                <FaCheckCircle className="text-[#785F54] mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

		 {/* External Website Disclaimer section */}
		 <div className="text-center space-y-2">
          <motion.div className="bg-[#317371] text-white px-4 py-1 rounded-md inline-block text-sm">
            External Website Disclaimer
          </motion.div>
          <h1 className="text-2xl font-semibold text-[#317371]">THIRD-PARTY LINKS</h1>
        </div>
        <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white border border-[#D9D9D9] shadow-md rounded-xl">
          <ul className="space-y-2 text-gray-700">
            {[
              "Our platform may contain links to third-party websites.",
              "We do not control or endorse the content of external sites.",
              "Users should review third-party privacy policies before using them.",
              "We are not responsible for damages arising from external site usage.",
              "Third-party sites may have different terms and policies than ours."
            ].map((point, index) => (
              <li key={index} className="flex items-start space-x-2">
                <FaCheckCircle className="text-[#785F54] mt-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

		 {/* Service Availability Notice section  */}
		 <div className="text-center space-y-2">
          <motion.div className="bg-[#317371] text-white px-4 py-1 rounded-md inline-block text-sm">
            Service Availability Notice
          </motion.div>
          <h1 className="text-2xl font-semibold text-[#317371]">SERVICE INTERRUPTIONS</h1>
        </div>
        <motion.div whileHover={{ scale: 1.03 }} className="p-6 bg-white border border-[#D9D9D9] shadow-md rounded-xl">
          <ul className="space-y-2 text-gray-700">
            {[
              "We do not guarantee uninterrupted or error-free services at all times.",
              "Maintenance and technical issues may cause temporary downtime.",
              "We are not liable for any loss caused by service interruptions.",
              "Users will be notified of planned maintenance whenever possible.",
              "By using our platform, you accept the risks of potential disruptions."
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
