import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ExecutiveTeam from "./ExecutiveTeam";

const stats = [
  { value: 5000, label: "Happy Customers" },
  { value: 150, label: "Events Hosted" },
  { value: 1000, label: "Tickets Sold" },
  { value: 50, label: "Partners" },
];

export default function StatsSection() {
  // Animation variants for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="py-20 bg-gradient-to-br from-white to-[#F5F7FA]">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h1
          className="text-3xl font-bold text-gray-900 capitalize"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Impact in Numbers
        </motion.h1>
        <motion.p
          className="text-gray-500 font-medium md:text-[18px] mt-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover the milestones we've achieved in transforming the ticketing
          experience.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#317371] cursor-default"
              variants={itemVariants}
            >
              <h2 className="text-4xl font-bold text-[#317371] mb-4 flex items-center justify-center">
                <CountUp end={stat.value} duration={3} separator="," />
                <span className="text-3xl font-bold text-[#317371]">+</span>
              </h2>
              <p className="mt-2 text-lg font-medium uppercase text-gray-700 tracking-wide">
                {stat.label}
              </p>
              {/* Decorative Line */}
              <div className="w-16 h-1 bg-[#317371] mx-auto mt-4 rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ExecutiveTeam />
    </div>
  );
}
