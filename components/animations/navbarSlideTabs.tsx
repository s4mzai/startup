"use client";

import Link from "next/link";
import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const { data: session, status } = useSession();
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const scrollToSection = (id: string) => {
    if (window.location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300); // Slightly longer timeout to allow the homepage to load
    }
  };


  if (status === "loading") return null;

  return (
    <ul className="w-full hidden relative lg:flex justify-between items-center">
      {/* Left spacer */}
      <div></div>

      {/* Center nav */}
      <div
        onMouseLeave={() => {
          setPosition((pv) => ({ ...pv, opacity: 0 }));
        }}
        className="flex gap-2 border-2 border-none p-1 rounded-full"
      >
        <span onClick={() => scrollToSection("herosection")}>
          <Tab setPosition={setPosition}>Home</Tab>
        </span>
        <span onClick={() => scrollToSection("startupsection")}>
          <Tab setPosition={setPosition}>Startups</Tab>
        </span>
        {session && (
          <Link href={"/create"} className="rounded-full">
            <Tab setPosition={setPosition}>Create</Tab>
          </Link>
        )}
      </div>

      {/* Right section */}
      <div className="flex items-center justify-center gap-3">
        {!session && (
          <Link
            onMouseLeave={() =>
              setPosition((pv) => ({ ...pv, opacity: 0 }))
            }
            href={"/signin"}
          >
            <Tab setPosition={setPosition}>Sign In</Tab>
          </Link>
        )}

        <Cursor position={position} />

        {session && (
          <div
            onClick={() => router.push("/profile")}
            className="cursor-pointer w-10 h-10 rounded-full overflow-hidden ml-2"
          >
            <Image
              src={session.user?.image || "/default-avatar.png"}
              alt="avatar"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
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
      className="relative z-10 block px-5 font-medium cursor-pointer py-1.5 text-xs uppercase text-black hover:text-[#fabb20] lg:py-3 lg:text-base"
    >
      {children}
    </li>
  );
};

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-7 rounded-full bg-black lg:h-12"
    />
  );
};
