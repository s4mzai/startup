"use client"

import { Button } from "./ui/button";
import Link from "next/link";
import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import StaggeredDropDown from "./animations/hamburgerDropdown";
// import { Poppins } from "next/font/google"

// const poppins = Poppins({
//   weight: "900", 
//   subsets: ["latin"],
//   display: "swap",
// })
// Type definitions
interface Position {
  left: number;
  width: number;
  opacity: number;
}

interface TabProps {
  children: ReactNode;
  setPosition: (position: Position | ((prev: Position) => Position)) => void;
}

interface CursorProps {
  position: Position;
}

export const Navbar: React.FC = () => {
  return (
    <div className="w-full">
      <SlideTabs />
    </div>
  );
};

const SlideTabs: React.FC = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="flex items-center px-10 lg:px-50 justify-between">
      {/* Logo - LEFT */}
      <h1 className={` text-black text-3xl font-extrabold`}>
        Startup
      </h1>
      
      {/* Navigation with ALL buttons - spans full width */}
      <ul
        className="w-full hidden  relative md:flex justify-between items-center ml-10"
      >
        {/* Empty space for balance */}
        <div></div>
        {/* Center navigation buttons */}
        <div
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }} className="flex gap-2 border-2 border-[#fabb20] p-1 hover:border-black rounded-full">
          <Tab setPosition={setPosition}>Home</Tab>
          <Tab setPosition={setPosition}>Startups</Tab>
          <Tab setPosition={setPosition}>Features</Tab>
          <Tab setPosition={setPosition}>Docs</Tab>
        </div>
        
        {/* Login button - RIGHT */}
        <Link onMouseLeave={()=>{
          setPosition((pv)=>({
            ...pv,
            opacity:0,
          }))
        }} href={"/login"}>
          <Tab setPosition={setPosition}>Login</Tab>
        </Link>
        
        <Cursor position={position} />
      </ul>
      <div className="md:hidden ">
        <StaggeredDropDown/>
      </div>
    </div>
  );
};

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block px-5 font-medium cursor-pointer py-1.5 text-xs uppercase text-black hover:text-[#fabb20] md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export default Navbar;