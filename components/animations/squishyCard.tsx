"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

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

const SquishyCardComponent: React.FC<StartupCardProps> = (props) => {
  return (
    <div className="px-4 pt-6">
      <Card {...props} />
    </div>
  );
};

const Card: React.FC<StartupCardProps> = ({
  authorName,
  authorImage,
  date,
  startupTitle,
  startupDesc,
  startupImage,
  startupCategory,
  views,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.09 }}
      transition={{
        duration: 0.5,
        ease: "backInOut",
      }}
      className="relative border-1 border-black cursor-pointer h-[28rem] sm:h-[26rem] w-85 sm:w-78 overflow-hidden rounded-xl bg-[#fabb20] p-5 shadow-md"
    >
      {/* Card Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Top Row */}
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium">{authorName}</p>
          <Image
            src={authorImage}
            alt="Avatar"
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
        </div>

        {/* Title + Description */}
        <div>
          <motion.h2 className="text-xl font-bold mb-1">
            {startupTitle}
          </motion.h2>
          <p className="text-sm text-neutral-700 mb-3">
            {startupDesc.length > 60
              ? `${startupDesc.slice(0, 60)}...`
              : startupDesc}
          </p>
        </div>

        {/* Image */}
        <Image
          src={startupImage}
          alt="Startup"
          width={300}
          height={160}
          className="rounded-md object-cover mb-3"
        />
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold text-neutral-700">
            {startupCategory}
          </span>
          <Button className="rounded-2xl border border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 cursor-pointer hover:bg-white md:hover:translate-x-[-4px] md:hover:translate-y-[-4px] md:hover:rounded-md md:hover:shadow-[4px_4px_0px_black]
          md:active:translate-x-[0px] md:active:translate-y-[0px] md:active:rounded-2xl md:active:shadow-none max-md:active:scale-80">Details</Button>

        </div>

        {/* Meta + Button Row */}
        <div className="flex justify-between items-center text-sm mb-1">
          <span className="bg-amber-100 px-2 py-1 rounded-full text-neutral-600">
            {date}
          </span>
          <span className="text-muted-foreground mr-2">{views} views</span>
        </div>

        {/* Footer */}
      </div>
    </motion.div>
  );
};

export default SquishyCardComponent;
