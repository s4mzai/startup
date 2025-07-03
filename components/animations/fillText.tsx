"use client"

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  uppercase?: boolean;
}

const AnimatedText = ({ 
  text, 
  className = "text-7xl  sm:text-8xl", 
  uppercase = false 
}: AnimatedTextProps) => {
  return (
    <motion.div
      className={`londrina ${className} ${uppercase ? 'uppercase' : ''} p-5 relative cursor-pointer`}
      initial="initial"
      whileHover="hover"
    >
      <motion.p
        className="relative"
        style={{
          background: "linear-gradient(to right, white 0%, white 50%, black 50%, black 100%)",
          backgroundSize: "200% 100%",
          backgroundPosition: "100% 0",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}
        variants={{
          initial: { backgroundPosition: "100% 0" },
          hover: { backgroundPosition: "0% 0" }
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default AnimatedText;