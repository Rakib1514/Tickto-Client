import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const TermsAndConditions = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="text-center space-y-4 mb-16 bg-[#F67E04] py-8">
        <motion.div
          className="bg-[#F67E04] text-white px-6 rounded-md inline-block text-sm font-medium tracking-wide"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          Legal Agreement
        </motion.div>
        <h1 className="text-5xl font-bold text-slate-900 tracking-tight mt-5">
          Terms of Service
        </h1>
        <p className="text-lg max-w-2xl mx-auto mt-4">
          Please review our terms carefully before proceeding with our services.
        </p>
      </div>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          className="container mx-auto"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Section
              title="Account Security"
              subtitle="Your Safety Matters"
              image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              points={[
                "Maintain confidentiality of your credentials",
                "Enable two-factor authentication",
                "Report suspicious activities immediately",
                "Regular security audits conducted",
                "Automatic breach notifications",
              ]}
            />

            <Section
              title="Data Privacy"
              subtitle="Your Data, Your Rights"
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              points={[
                "End-to-end encryption",
                "GDPR compliance guaranteed",
                "Regular data backups",
                "Transparent data usage",
                "Right to data portability",
              ]}
            />

            <Section
              title="Usage Guidelines"
              subtitle="Fair Use Policy"
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              points={[
                "Respectful communication",
                "No unauthorized access",
                "Content moderation standards",
                "Resource usage limits",
                "Community guidelines",
              ]}
            />

            <Section
              title="Service Terms"
              subtitle="Our Commitment"
              image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              points={[
                "99.9% uptime guarantee",
                "24/7 support available",
                "Regular feature updates",
                "Transparent pricing",
                "Flexible cancellation",
              ]}
            />
          </div>

          {/* Accept Button */}
          <div className="mt-16 text-center">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-[#317371] text-white px-10 py-4 rounded-md font-semibold text-lg shadow-xl hover:bg-teal-700 transition-colors duration-300 hover:shadow-teal-200"
            >
              Accept & Continue
            </motion.button>
            <p className="mt-4 text-sm text-slate-500">
              By clicking "Accept & Continue", you agree to our Terms of Service
              and Privacy Policy
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Section = ({ title, subtitle, image, points }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
    className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="relative h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
        <div>
          <div className="text-white/80 text-sm font-medium mb-2">
            {subtitle}
          </div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
      </div>
    </div>

    <div className="p-6">
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="flex-shrink-0 mt-1">
              <Check className="w-5 h-5 text-teal-600" />
            </span>
            <span className="text-slate-700">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default TermsAndConditions;
