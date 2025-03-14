
import { motion } from "framer-motion";

export default function About_Join_us_sectioin() {
  return (
    <div className="bg-blue-600 py-16 flex flex-col items-center text-center text-white">
    <motion.h2
      className="text-5xl font-bold mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Join Our Team
    </motion.h2>

    <p className="text-lg max-w-2xl mb-6">
      Be part of the leading online ticket booking platform. Grow with us and shape the future of hassle-free ticketing.
    </p>

    <motion.a
      href="/careers" // Change link to your job page
      className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      Explore Careers
    </motion.a>
  </div>
  )
}

import React from "react";



