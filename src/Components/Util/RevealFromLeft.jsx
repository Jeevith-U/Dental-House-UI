import React from "react";
import { motion } from "framer-motion";

const RevealFromLeft = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{opacity: 1, x: 0}}
      transition={{ duration: 0.5 }}
      className="bg-transparent overflow-visible"
    >
      {children}
    </motion.div>
  );
};

export default RevealFromLeft;
