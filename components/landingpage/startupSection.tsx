// components/sections/StartupSection.tsx (Server Component - NO "use client")
import React from 'react'
import { prisma } from '@/lib/prisma';
import StartupSectionClient from '@/components/landingpage/StartupSectionClient';

const StartupSection = async () => {
  const cardValues = await prisma.startup.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          username: true,
          email: true,
          image: true,
          bio: true,
          createdAt: true,
          updatedAt:true,
        }
      }
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  const displayedCards = cardValues.slice(0, 8);
  const hasMoreItems = cardValues.length > 8;

  return (
    <StartupSectionClient 
      displayedCards={displayedCards}
      hasMoreItems={hasMoreItems}
    />
  );
};

export default StartupSection;