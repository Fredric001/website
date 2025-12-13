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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
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
        className="relative inline-block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white"
        // variants={itemVariants}
      >
        <div className="relative inline-block mt-2">
          <span className="text-gray-900 dark:text-gray-100">
            Empowering young minds worldwide
          </span>
        </div>
        <div className="relative inline-block mt-2">
          <span className="text-gray-900 dark:text-gray-100">
          Digital and AI skills for children
        </span>
        </div>
      </motion.h1>

     
    </motion.div>
  );
}

export default TextHero;
