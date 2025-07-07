// This is the Startup Card


"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type StartupCardProps = {
  authorName: string;
  authorImage: string;
  authorId: string;
  date: string;
  startupTitle: string;
  startupDesc: string;
  startupImage: string;
  startupCategory: string;
  startupId: string;
  views: number;
};

const StartupCard: React.FC<StartupCardProps> = ({
  authorName,
  authorImage,
  date,
  startupTitle,
  startupDesc,
  startupImage,
  startupCategory,
  views,
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
        initial={{
          y: 40,
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

        className="rounded-2xl sm:w-73 md:w-90 lg:w-80 xl:w-76 px-6 py-5 cursor-pointer flex flex-col border-2 border-black bg-[#fabb20] border-dashed shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
      >
        {/* Top section - Always visible on mobile/tablet, animated on desktop */}
        {/* <div className="h-6 mb-2 flex items-center justify-between xl:hidden">
          <h2 className="text-gray-700 font-semibold">{authorName}</h2>
          <Image src={authorImage} alt="avatar" width={32} height={32} className="rounded-full" />
        </div> */}

        <div className="flex justify-center mb-3">
          <Image src={startupImage} alt="Image" width={200} height={200} className="rounded-lg w-full" />
        </div>

        {/* Main content */}
        <h2 className="text-3xl font-bold text-black whitespace-nowrap mb-2 londrina">{startupTitle}</h2>
        <p className="text-sm text-muted-foreground leading-snug mb-2">
          {startupDesc.length > 60 ? `${startupDesc.slice(0, 60)}...` : startupDesc}
        </p>
        <div className="flex justify-between items-center text-sm text-muted-foreground mt-5">
          <div className="hover:bg-amber-100 bg-amber-300 text-amber-800 px-3 py-1 rounded-full">{date}</div>
          <div>{views} views</div>
        </div>

        {/* Bottom section - Always visible on mobile/tablet, animated on desktop */}
        <div className="h-6 mt-3 flex pl-3 justify-center items-center text-sm text-muted-foreground xl:hidden">
          <div>{startupCategory}</div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-6 mt-3 pl-3 justify-center items-center text-sm text-muted-foreground hidden xl:flex"
        >
          <div>{startupCategory}</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StartupCard;
