import React from "react";
// import { RadialGradient } from "react-text-gradients";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

function TextHero() {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };




  return (
    <motion.div
      className="lg:text-left "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Heading */}
      <motion.h1
        className="relative inline-block text-2xl md:text-2xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white"
        // variants={itemVariants}
      >
       <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-2 rounded-full font-bold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          Request more information
          </button>
        </div>
      </motion.h1>

     
    </motion.div>
  );
}

export default TextHero;
