import React from 'react'
import SquishyCardComponent from './animations/squishyCard';

const StartupSection = () => {
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
      startupId: "startup2",
      views: 5
    },
  ];

  return (
    <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2">
        <h1 className='px-5 font-extrabold text-3xl text-center lg:text-start'>
          All Startups
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12 place-items-center">
          {cardValues.map((card, index) => (
            <SquishyCardComponent key={card.startupId + index} {...card} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StartupSection;
