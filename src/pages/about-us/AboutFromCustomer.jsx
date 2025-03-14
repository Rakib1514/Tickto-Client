import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Organizers", value: 500000 },
  { label: "Team Members", value: 150 },
  { label: "Events Hosted", value: 1200 },
  { label: "Tickets Sold", value: 1000000 },
  { label: "Offices", value: 6 },
];

export default function AboutFromCustomer() {
  return (
    <div className="bg-indigo-600 py-16">
      <div className="container mx-auto px-6 text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h2 className="text-5xl font-bold">
                <CountUp end={stat.value} duration={3} separator="," />
              </h2>
              <p className="mt-2 text-lg font-light uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
