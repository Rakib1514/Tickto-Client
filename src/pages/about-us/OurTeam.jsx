import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Minhaj Uddin Arif",
    role: "Founder & CEO",
    image: "https://i.ibb.co.com/60xyVPM5/uiux.jpg", // Replace with actual image URL
  },
  {
    name: "Rakibul Islam",
    role: "Founder & CEO",
    image: "https://i.ibb.co.com/60xyVPM5/uiux.jpg",
  },
  {
    name: "Akash",
    role: "Founder & CEO",
    image: "https://i.ibb.co.com/60xyVPM5/uiux.jpg",
  },
  {
    name: "Nur alam",
    role: "Founder & CEO",
    image: "https://i.ibb.co.com/60xyVPM5/uiux.jpg",
  },
  {
    name: "Musfika apu Oni",
    role: "Founder & CEO",
    image: "https://i.ibb.co.com/60xyVPM5/uiux.jpg",
  },
  {
    name: "Faryia khan",
    role: "Founder & CEO",
    image: "https://i.ibb.co.com/60xyVPM5/uiux.jpg",
  },
];

export default function OurTeam() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
        <p className="text-gray-600 mb-12">
          The minds behind our online ticket booking platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
