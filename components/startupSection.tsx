import React from 'react'
import ExpandableCard from './animations/expandableCard';
import { Button } from './ui/button';
import Link from 'next/link';
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
  ];

  // Limit to first 8 items
  const displayedCards = cardValues.slice(0, 8);
  const hasMoreItems = cardValues.length > 8;

  return (
    <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <h1 className='px-10 font-extrabold text-3xl text-center lg:text-start'>
          All Startups
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {displayedCards.map((card, index) => (
            <ExpandableCard key={card.startupId + index} {...card} />
          ))}
        </div>
        <div className='w-full mt-7 flex justify-center'>
          {/* Redirect to the all startup page */}
          {hasMoreItems && (
            <Link href="/startups"> 
              <Button size={"lg"} className='rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black  transition-all duration-300 translate-x-[-4px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[-4px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_#fabb20] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_#fabb20] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none '>View All Startups</Button>
            </Link>
            
          )}
        </div>
      </div>
    </div>
  )
}

export default StartupSection;