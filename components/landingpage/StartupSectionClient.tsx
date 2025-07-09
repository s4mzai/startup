"use client"

import React from 'react'
import StartupCard from '@/components/animations/StartupCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from "framer-motion"
import { BsArrowRightShort } from "react-icons/bs";

type StartupWithUser = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
};

interface StartupSectionClientProps {
  displayedCards: StartupWithUser[];
  hasMoreItems: boolean;
}

const StartupSectionClient: React.FC<StartupSectionClientProps> = ({ 
  displayedCards, 
  hasMoreItems 
}) => {
  return (
    <div className="w-full py-30 px-4 sm:px-6 lg:px-8 bg-[#fefbea]">
      <div className="flex flex-col gap-2">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
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
          className='px-10 font-extrabold text-center items-center flex flex-col gap-5'
        >
          <h2 className='text-5xl'>All Startups</h2>
          <p className='font-light text-xl'>
            Discover innovative startups that are changing the world
          </p>
        </motion.div>

        {displayedCards.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {displayedCards.map((card, index) => (
              <div key={card.id + index} className="w-full max-w-sm sm:w-auto">
                <StartupCard {...card} />
              </div>
            ))}
          </div>
        ) : (
          <div className='w-full h-90 flex items-center justify-center font-bold text-5xl'>Nothing's Here Yet</div>
        )}

        <div className='w-full mt-7 flex justify-center'>
          {hasMoreItems && (
            <Link href="/startups">
              <Button size={"lg"} className='rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black transition-all duration-300 translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[-4px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_#fabb20] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_#fabb20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none'>
                View All Startups <BsArrowRightShort />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default StartupSectionClient;