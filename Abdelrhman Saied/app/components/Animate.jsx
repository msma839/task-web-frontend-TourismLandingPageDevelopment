"use client";
import { motion } from "framer-motion";
import React from "react";

const Animate = ({ children }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
