"use client"

import Link from "next/link";
import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import SignOutButton from "../auth/signOutButton";
import Image from "next/image";

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


export const SlideTabs: React.FC = () => {
  const { data: session,status } = useSession()

  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  if(status ==="loading"){
    return (
      <></>
    )
  }
  return (  
    //   {/* Navigation with ALL buttons - spans full width */}
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
        }} className="flex gap-2 border-2 border-[#fabb20] p-1  hover:border-black rounded-full">
          <Tab setPosition={setPosition}>Home</Tab>
          <Tab setPosition={setPosition}>Startups</Tab>
          <Tab setPosition={setPosition}>Features</Tab>
          {session &&(
            <Link href={'/create'} className="rounded-full"><Tab setPosition={setPosition} >Create</Tab></Link>
          )}
        </div>
        <div className="flex items-center justify-center gap-3">
          {session?<div onMouseLeave={()=>{
            setPosition((pv)=>({
                ...pv,
                opacity:0,
            }))
            }}><SignOutButton><Tab setPosition={setPosition}>SignOut</Tab></SignOutButton></div>
          :<Link onMouseLeave={()=>{
            setPosition((pv)=>({
                ...pv,
                opacity:0,
            }))
            }} href={"/signin"}>
            <Tab setPosition={setPosition}>Sign In</Tab>
            </Link>
          }
          <Cursor position={position} />
          {session &&(
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image src={`${session?.user?.image}`} 
              alt="avatar"
              width={48}
              height={48}
              className="w-full h-full object-cover" />
            </div>
          )}
        </div>
        
    </ul>
      
      
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
      className="absolute z-0 h-7 rounded-full bg-black  md:h-12"
    />
  );
};