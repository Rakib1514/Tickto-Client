import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsSection() {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation for list items (bullet points)
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Animation for images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] to-[#E2E8F0] px-6 py-16">
      <section className="container mx-auto">
        {/* Header Section */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold">About Our Ticket Hub</h1>
          <p className="mt-4 font-medium text-gray-500 md:text-[18px]">
            Welcome to our innovative ticket booking system seamless, secure, and hassle-free.
          </p>
        </motion.div>
        {/* Content Sections */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Mission & Vision */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              className="h-64 w-full rounded-2xl object-cover md:h-80"
              src="https://img.freepik.com/free-photo/technology-concept-with-futuristic-element_23-2151910963.jpg?t=st=1741894936~exp=1741898536~hmac=82eb4a03c1b6acb5681bc1b9855970ec992e88bc4ea342f9b5f847d964642da2&w=900"
              alt="Our Vision"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h2>
            <ul className="space-y-4 text-base leading-relaxed text-gray-600 md:text-lg">
              <motion.li
                variants={listItemVariants}
                className="flex items-start leading-relaxed font-medium text-gray-500 md:text-[18px]"
              >
                <span className="mr-2 font-semibold text-[#317371]">→</span> Making ticket booking
                seamless, fast, and hassle-free for everyone.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                className="flex items-start leading-relaxed font-medium text-gray-500 md:text-[18px]"
              >
                <span className="mr-2 font-semibold text-[#317371]">→</span> Creating a world where
                booking tickets is effortless, efficient, and accessible.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                className="flex items-start leading-relaxed font-medium text-gray-500 md:text-[18px]"
              >
                <span className="mr-2 font-semibold text-[#317371]">→</span> Providing ease for both
                event managers and customers.
              </motion.li>
            </ul>
          </motion.div>
          {/* Our Story */}
          <motion.div
            className="relative order-2 overflow-hidden rounded-2xl shadow-lg md:order-1"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              className="h-64 w-full rounded-2xl object-cover md:h-80"
              src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?t=st=1741895278~exp=1741898878~hmac=49af803f9fb898f64e793d29ed9521914847e965dfdf4ade63b96f2cc852e643&w=996"
              alt="Our Story"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
          <motion.div
            className="order-1 flex flex-col space-y-6 md:order-2"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <ul className="space-y-4 text-base leading-relaxed text-gray-600 md:text-lg">
              <motion.li
                variants={listItemVariants}
                className="flex items-start leading-relaxed font-medium text-gray-500 md:text-[18px]"
              >
                <span className="mr-2 font-semibold text-[#317371]">→</span> We saw the frustration
                of long queues and confusing booking systems and wanted to change that.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                className="flex items-start leading-relaxed font-medium text-gray-500 md:text-[18px]"
              >
                <span className="mr-2 font-semibold text-[#317371]">→</span> Our team set out to
                create a fast, reliable, and user-friendly ticketing solution.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                className="flex items-start leading-relaxed font-medium text-gray-500 md:text-[18px]"
              >
                <span className="mr-2 font-semibold text-[#317371]">→</span> What started as a
                simple idea grew into a platform that connects people to amazing experiences.
              </motion.li>
            </ul>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            className="flex flex-col space-y-6"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <ul className="space-y-4 text-base leading-relaxed text-gray-600 md:text-lg">
              <motion.li
                variants={listItemVariants}
                className="flex items-start leading-relaxed font-medium text-gray-500 md:text-[18px]"
              >
                <span className="mr-2 font-semibold text-[#317371]">→</span> We provide a fast,
                seamless, and hassle-free ticket booking experience.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                className="flex items-start leading-relaxed font-medium text-gray-500 md:text-[18px]"
              >
                <span className="mr-2 font-semibold text-[#317371]">→</span> Our real-time seat
                selection and instant booking ensure you get the best spots without delays.
              </motion.li>
              <motion.li
                variants={listItemVariants}
                className="flex items-start leading-relaxed font-medium text-gray-500 md:text-[18px]"
              >
                <span className="mr-2 font-semibold text-[#317371]">→</span> We’re always here to
                assist you whenever you need help.
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-lg"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              className="h-64 w-full rounded-2xl object-cover md:h-80"
              src="https://img.freepik.com/free-photo/question-mark-icon-solving-problem-solution-concept_53876-13887.jpg?t=st=1741895061~exp=1741898661~hmac=de2c4fe6a5f526d36afe3a78343ac96d1555953884126d44410dfade4c1d09f8&w=900"
              alt="Why Choose Us"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
