import React from 'react';
import { motion } from 'framer-motion';

const CoreValue = ({ title, description, icon }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl border border-gray-800"
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)",
        rotateZ: 1.5, // Subtle tilt
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {/* Icon */}
      <div className="p-4 bg-[#FF4D88]/20 text-[#FF4D88] rounded-full mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      
      {/* Description */}
      <p className="text-gray-400 leading-relaxed font-light">{description}</p>
    </motion.div>
  );
};

export default CoreValue;