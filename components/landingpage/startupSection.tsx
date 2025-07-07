"use client"
import React from 'react'
import StartupCard from '../animations/startupCard';
import { Button } from '../ui/button';
import Link from 'next/link';
import { motion } from "framer-motion" 
import { BsArrowRightShort } from "react-icons/bs";


const StartupSection = () => {
  // TODO: call the db and extract the data
  const cardValues = [
    {
      authorName: "Samar",
      authorImage: "/cat.png",
      authorId: "author1",
      date: "4 July 2025",
      startupTitle: "Robots",
      startupDesc: "Robots are very unique creatures that can be used to describe weather, and also AI can help them submit their application.",
      startupImage: "/startupImage.jpg",
      startupCategory: "AI & Robotics",
      startupId: "startup1",
      views: 5
    },
    {
      authorName: "Samar",
      authorImage: "/cat.png",
      authorId: "author1",
      date: "4 July 2025",
      startupTitle: "Robots",
      startupDesc: "They can help humans by automating dangerous or repetitive tasks.",
      startupImage: "/startupImage.jpg",
      startupCategory: "AI & Robotics",
      startupId: "startup2",
      views: 5
    },
    {
      authorName: "Samar",
      authorImage: "/cat.png",
      authorId: "author1",
      date: "4 July 2025",
      startupTitle: "Robots",
      startupDesc: "They can help humans by automating dangerous or repetitive tasks.",
      startupImage: "/startupImage.jpg",
      startupCategory: "AI & Robotics",
      startupId: "startup3",
      views: 5
    },
    {
      authorName: "Samar",
      authorImage: "/cat.png",
      authorId: "author1",
      date: "4 July 2025",
      startupTitle: "Robots",
      startupDesc: "They can help humans by automating dangerous or repetitive tasks.",
      startupImage: "/startupImage.jpg",
      startupCategory: "AI & Robotics",
      startupId: "startup4",
      views: 5
    },
    {
      authorName: "Samar",
      authorImage: "/cat.png",
      authorId: "author1",
      date: "4 July 2025",
      startupTitle: "Robots",
      startupDesc: "They can help humans by automating dangerous or repetitive tasks.",
      startupImage: "/startupImage.jpg",
      startupCategory: "AI & Robotics",
      startupId: "startup5",
      views: 5
    },
    {
      authorName: "Samar",
      authorImage: "/cat.png",
      authorId: "author1",
      date: "4 July 2025",
      startupTitle: "Robots",
      startupDesc: "They can help humans by automating dangerous or repetitive tasks.",
      startupImage: "/startupImage.jpg",
      startupCategory: "AI & Robotics",
      startupId: "startup6",
      views: 5
    },
    {
      authorName: "Samar",
      authorImage: "/cat.png",
      authorId: "author1",
      date: "4 July 2025",
      startupTitle: "Robots",
      startupDesc: "They can help humans by automating dangerous or repetitive tasks.",
      startupImage: "/startupImage.jpg",
      startupCategory: "AI & Robotics",
      startupId: "startup7",
      views: 5
    },
    {
      authorName: "Samar",
      authorImage: "/cat.png",
      authorId: "author1",
      date: "4 July 2025",
      startupTitle: "Robots",
      startupDesc: "They can help humans by automating dangerous or repetitive tasks.",
      startupImage: "/startupImage.jpg",
      startupCategory: "AI & Robotics",
      startupId: "startup8",
      views: 5
    },
    {
      authorName: "Samar",
      authorImage: "/cat.png",
      authorId: "author1",
      date: "4 July 2025",
      startupTitle: "Robots",
      startupDesc: "They can help humans by automating dangerous or repetitive tasks.",
      startupImage: "/startupImage.jpg",
      startupCategory: "AI & Robotics",
      startupId: "startup9",
      views: 5
    },
    {
      authorName: "Samar",
      authorImage: "/cat.png",
      authorId: "author1",
      date: "4 July 2025",
      startupTitle: "Robots",
      startupDesc: "They can help humans by automating dangerous or repetitive tasks.",
      startupImage: "/startupImage.jpg",
      startupCategory: "AI & Robotics",
      startupId: "startup9",
      views: 5
    },
    {
      authorName: "Samar",
      authorImage: "/cat.png",
      authorId: "author1",
      date: "4 July 2025",
      startupTitle: "Robots",
      startupDesc: "They can help humans by automating dangerous or repetitive tasks.",
      startupImage: "/startupImage.jpg",
      startupCategory: "AI & Robotics",
      startupId: "startup9",
      views: 5
    },
  ];

  // Limit to first 8 items
  const displayedCards = cardValues.slice(0, 8);
  const hasMoreItems = cardValues.length > 8;

  return (
    <div className="w-full py-30 px-4 sm:px-6 lg:px-8 bg-[#fefbea]">
      <div className="flex flex-col gap-2">
        <motion.div
        initial={{
          y: -40,
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

        className='px-10 font-extrabold text-center items-center flex flex-col gap-5'>
          <h2 className='text-5xl'>All Startups</h2>
          <p className='font-light text-xl'>
            Discover innovative startups that are changing the world
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-6">
          {displayedCards.map((card, index) => (
            <StartupCard key={card.startupId + index} {...card} />
          ))}
        </div>
        <div className='w-full mt-7 flex justify-center'>
          {/* Redirect to the all startup page */}
          {hasMoreItems && (
            <Link href="/startups"> 
              <Button size={"lg"} className='rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black  transition-all duration-300 translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[-4px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_#fabb20] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_#fabb20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none '>
                View All Startups <BsArrowRightShort />
              </Button>
            </Link>
            
          )}
        </div>
      </div>
    </div>
  )
}

export default StartupSection;