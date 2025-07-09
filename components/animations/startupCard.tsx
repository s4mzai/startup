"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
    id?: string | null;
  };
  isProfile?: boolean
};

const StartupCard: React.FC<StartupCardProps> = ({
  id,
  views,
  title,
  image,
  createdAt,
  description,
  category,
  user,
  isProfile = false,
}) => {
  const router = useRouter()
  const [hovered, setHovered] = useState(false);

  const shortDescription = description.length > 70 ? description.slice(0, 70) + "..." : description;

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex justify-center items-center py-5 px-3"
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        onClick={()=>{router.push(`/startups/${id}`)}}
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
        className="w-[320px] h-[420px] sm:w-[300px] sm:h-[400px] rounded-2xl px-5 py-6 flex flex-col cursor-pointer border border-black border-dashed bg-[#fabb20] shadow-[4px_8px_8px_rgba(0,0,0,0.38)]"
      >
        {/* Author - Mobile always visible, desktop on hover */}
        {!isProfile &&(
          <div className="items-center justify-between mb-4 flex md:hidden">
            <div className="font-bold text-black text-lg">{user?.name}</div>
            {user?.image && (
              <div className="w-9 h-9 rounded-full overflow-hidden">
                <Image
                  src={user.image}
                  alt="avatar"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        )}

        {!isProfile &&(
          <motion.div
            initial={false}
            animate={{
              opacity: hovered ? 1 : 0,
              y: hovered ? 0 : -10,
            }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex items-center justify-between mb-4"
          >
            <div className="font-bold text-black text-lg hidden xl:flex">
              {user?.name}
            </div>
            {user?.image && (
              <div className="w-9 h-9 rounded-full overflow-hidden">
                <Image
                  src={user.image}
                  alt="avatar"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </motion.div>
        )}  

        {/* Image */}
        <div className="flex justify-center mb-3">
          <Image
            src={image}
            alt="Startup image"
            width={300}
            height={200}
            className="rounded-lg object-cover w-full h-[150px]"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-black mb-2 break-words">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-2 break-words leading-snug">
          {shortDescription}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center text-sm text-muted-foreground mt-auto pt-2">
          <div className="bg-amber-300 text-amber-800 px-3 py-1 rounded-full">
            {createdAt.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
          <div>{views} views</div>
        </div>

        {/* Category */}
        <div className="h-6 mt-3 flex pl-3 justify-center items-center text-sm text-muted-foreground xl:hidden">
          <div>{category}</div>
        </div>

        <motion.div
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            y: hovered ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
          className="h-6 justify-center items-center text-sm text-muted-foreground hidden xl:flex"
        >
          <div>{category}</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StartupCard;
