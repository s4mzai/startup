"use client";

import {
  FiEdit,
  FiTrash,
  FiLogIn,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { motion, MotionConfig } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { useSession } from "next-auth/react";
import Link from "next/link";
import SignOutButton from "../auth/signOutButton";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { data: session, status } = useSession();
  if (status === "loading") return <></>;

  return (
    <div className="flex items-center justify-center font-medium" >
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative"
        ref={dropdownRef}
      >
        <MotionConfig
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.button
            initial={false}
            animate={open ? "open" : "closed"}
            onClick={() => setOpen((pv) => !pv)}
            className="relative h-12 w-12 rounded-full bg-transparent hover:bg-transparent focus:outline-none"
          >
            <motion.span
              variants={VARIANTS.top}
              className="absolute h-1 w-6 bg-black"
              style={{ y: "-50%", left: "50%", x: "-50%", top: "30%" }}
            />
            <motion.span
              variants={VARIANTS.middle}
              className="absolute h-1 w-6 bg-black"
              style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
            />
            <motion.span
              variants={VARIANTS.bottom}
              className="absolute h-1 w-6 bg-black"
              style={{ x: "-50%", y: "50%", bottom: "30%", left: "50%" }}
            />
          </motion.button>
        </MotionConfig>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-80%" }}
          className="flex mt-2 flex-col gap-2 p-2 rounded-lg justify-around bg-white shadow-xl absolute top-[120%] left-[50%] w-56 h-72 overflow-hidden z-50"
        >
          <Link href="/">
            <Option setOpen={setOpen} Icon={FiEdit} text="Home" />
          </Link>
          <Link href="/startups">
            <Option setOpen={setOpen} Icon={FiPlusSquare} text="Startups" />
          </Link>
          <Link href="/features">
            <Option setOpen={setOpen} Icon={FiShare} text="Features" />
          </Link>

          {session ? (
            <>
              <SignOutButton>
                <Option setOpen={setOpen} Icon={FiShare} text="Sign Out" />
              </SignOutButton>
              <Link href="/profile">
                <Option setOpen={setOpen} Icon={CgProfile} text="Profile" />
              </Link>
            </>
          ) : (
            <Link href="/signin">
              <Option setOpen={setOpen} Icon={FiLogIn} text="Log In" />
            </Link>
          )}
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({
  text,
  Icon,
  setOpen,
}: {
  text: string;
  Icon: IconType;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 h-full rounded-lg text-center text-sm font-medium whitespace-nowrap border-b hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

// Animation Variants
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["30%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "30%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["30%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "30%"],
    },
  },
};
