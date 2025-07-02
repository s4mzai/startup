"use client"
import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

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

export const SlideTabsExample: React.FC = () => {
  return (
    <div className="bg-neutral-100 py-20">
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
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Startups</Tab>
      <Tab setPosition={setPosition}>Features</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Cursor position={position} />
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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
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