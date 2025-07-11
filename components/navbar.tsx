"use client";

import { SlideTabs } from "@/components/animations/navbarSlideTabs";
import StaggeredDropDown from "@/components/animations/hamburgerDropdown";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed left-1/2 z-50 items-center justify-center flex w-full transform -translate-x-1/2"
      animate={{
        top: scrolled ? 5 : 20, // top-10 (40px)
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          boxShadow: scrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="flex w-[90%] sm:w-[80%] items-center gap-6 px-6 py-3 rounded-full justify-between"
      >
        {/* Logo - LEFT */}
        <h1 className="text-black text-3xl font-extrabold">Startup</h1>

        {/* Tabs */}
        <SlideTabs />

        {/* Hamburger Menu - Mobile */} 
        <div className="lg:hidden">
          <StaggeredDropDown />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
