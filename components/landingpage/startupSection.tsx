// components/sections/StartupSection.tsx
import React from 'react';
import { prisma } from '@/lib/prisma';
import StartupSectionClient from '@/components/landingpage/StartupSectionClient';

// StartupSection.tsx
const StartupSection = async ({ userId }: { userId?: string }) => {
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
          updatedAt: true,
        },
      },
    },
    where: userId
      ? {
          userId: userId, // filter directly by userId
        }
      : {},
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
      isProfile={!!userId}
    />
  );
};

export default StartupSection;
