// This is the Home page fill text animation

"use client"

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  uppercase?: boolean;
}

const AnimatedText = ({ 
  text, 
  className, 
  uppercase = false 
}: AnimatedTextProps) => {
  return (
    <motion.div
    initial={{
          y: 10,
          opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              type: "tween",
              duration: 1.2,
              delay: 0.2,
              ease: [0.25, 0.25, 0.25, 0.75],
            },
          }}
          viewport={{ once: true, amount: 0.7 }}
      className={`londrina ${className} ${uppercase ? 'uppercase' : ''} relative cursor-pointer`}
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