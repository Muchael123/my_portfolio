import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type HandwrittenUnderlineProps = {
  children: ReactNode;
};

const HandwrittenUnderline: React.FC<HandwrittenUnderlineProps> = ({
  children,
}) => {
  return (
    <div className="relative inline-block">
      {/* Text to underline */}
      <span className="relative z-10">{children}</span>
      {/* Handwritten-like SVG underline */}
      <motion.svg
        className="absolute left-0 bottom-0 w-full h-4 z-0"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        aria-hidden="true"
        initial={{ opacity: 0, y: 10 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }} // Final state for animation
        transition={{ duration: 0.5, delay: 3 }} // Delay before starting the animation
      >
        <motion.path
          d="M0,5 Q50,10 100,5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-yellow-500"
          initial={{ strokeDasharray: 100, strokeDashoffset: 100 }} // Initial dash offset
          animate={{ strokeDashoffset: 0 }} // Animate to visible
          transition={{ duration: 1, delay: 3 }} // Delay for underline animation
        />
      </motion.svg>
    </div>
  );
};

export default HandwrittenUnderline;
