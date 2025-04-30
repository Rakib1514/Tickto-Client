import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations

const Card = ({ title, count, styleClass, icon, animation, onViewAllClick }) => {
  return (
    <motion.div
      className={`card ${styleClass}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-header">
        {icon}
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <motion.div
          className="card-count"
          key={count} // Animation trigger on count change
          animate={{ scale: animation ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          {count}
        </motion.div>
      </div>
      <div className="card-footer">
        <button
          onClick={onViewAllClick}
          className="view-all-btn bg-white text-gray-700 px-2  rounded-none hover:bg-gray-700 hover:text-white transition duration-300 btn-sm cursor-pointer "
        >
          View All
        </button>
      </div>
    </motion.div>
  );
};

export default Card;