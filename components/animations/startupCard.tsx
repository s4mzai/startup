// components/animations/StartupCard.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type StartupCardProps = {
  views: number;
  title: string;
  image: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  description: string;
  category: string;
  user?: {
    name?: string | null;
    image?: string | null;
  };
};

const StartupCard: React.FC<StartupCardProps> = ({
  views,
  title,
  image,
  createdAt,
  description,
  category,
  user,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex justify-center items-center py-5">
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileTap={{ scale: 0.99 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        initial={{ y: 40, opacity: 0 }}
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
        className="rounded-2xl sm:w-73 md:w-90 lg:w-80 xl:w-76 px-6 py-5 cursor-pointer flex flex-col border-2 border-black bg-[#fabb20] border-dashed shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
      >
        {/* Author Info */}
        <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 10:0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex items-center justify-between mb-5">
          <div className=" font-bold text-black justify-center items-center text-xl hidden xl:flex">
            <div>{user?.name}</div>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <Image src={`${user?.image}`} alt="avatar" width={48} height={48} className="w-full h-full object-cover"/>
          </div>
        </motion.div>

        {/* Image */}
        <div className="flex justify-center mb-3">
          <Image
            src={image}
            alt="Startup image"
            width={200}
            height={200}
            className="rounded-lg w-full"
          />
        </div>

        {/* Main content */}
        <h2 className="text-3xl font-bold text-black whitespace-nowrap mb-2 londrina">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground leading-snug mb-2">
          {description.length > 60
            ? `${description.slice(0, 60)}...`
            : description}
        </p>

        {/* Date + Views */}
        <div className="flex justify-between items-center text-sm text-muted-foreground mt-5">
          <div className="hover:bg-amber-100 bg-amber-300 text-amber-800 px-3 py-1 rounded-full">
            {createdAt.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
          <div>{views} views</div>
        </div>

        {/* Category (Mobile) */}
        <div className="h-6 mt-3 flex pl-3 justify-center items-center text-sm text-muted-foreground xl:hidden">
          <div>{category}</div>
        </div>

        {/* Category (Desktop hover) */}
        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-6 justify-center items-center text-sm text-muted-foreground hidden xl:flex"
        >
          <div>{category}</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StartupCard;
