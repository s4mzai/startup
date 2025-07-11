"use client";
import { SlideTabs } from "@/components/animations/navbarSlideTabs";
import StaggeredDropDown from "@/components/animations/hamburgerDropdown";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check initial scroll position and set states
    const initialScrolled = window.scrollY > 10;
    setScrolled(initialScrolled);
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ top: 20, opacity: 0 }}
      animate={{ 
        top: scrolled ? 5 : 20,
        opacity: isLoaded ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
      className="fixed left-1/2 z-50 items-center justify-center flex w-full transform -translate-x-1/2"
    >
      <motion.div
        initial={{
          backgroundColor: "rgba(255,255,255,0)",
          backdropFilter: "blur(0px)",
          boxShadow: "none"
        }}
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          boxShadow: scrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="flex w-[90%] h-20 sm:w-[80%] items-center px-6 py-3 rounded-full justify-between"
      >
        {/* Logo - LEFT */}
        <Link href="/">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-black text-3xl font-extrabold"
          >
            Startup
          </motion.h1>
        </Link>
        
        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <SlideTabs />
        </motion.div>
        
        {/* Hamburger Menu - Mobile */} 
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="lg:hidden"
        >
          <StaggeredDropDown />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;