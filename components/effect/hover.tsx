import React from "react";
import { motion } from "framer-motion";
type HoverProps = {
  children: React.ReactNode;
  scale: number
};

const Hover: React.FC<HoverProps> = ({ children, scale }) => {
  return (
    <motion.div
      whileHover={{ scale: scale }}
      onHoverStart={() => {}}
      onHoverEnd={() => {}}
    >
      {children}
    </motion.div>
  );
};

export default Hover;
