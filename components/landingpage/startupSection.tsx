// components/sections/StartupSection.tsx
import React from 'react';
import { prisma } from '@/lib/prisma';
import StartupSectionClient from '@/components/landingpage/StartupSectionClient';
import { Prisma } from "@prisma/client";
interface StartupSectionProps {
  userId?: string;
  searchQuery?: string;
}

const StartupSection = async ({ userId, searchQuery }: StartupSectionProps) => {
  const whereClause: Prisma.StartupWhereInput = {};

  if (userId) {
    whereClause.userId = userId;
  }

  if (searchQuery?.trim()) {
    const searchTerm = searchQuery.trim();
    whereClause.OR = [
      { title: { contains: searchTerm, mode: 'insensitive' } },
      { description: { contains: searchTerm, mode: 'insensitive' } },
      { category: { contains: searchTerm, mode: 'insensitive' } },
      { user: { name: { contains: searchTerm, mode: 'insensitive' } } },
      { user: { username: { contains: searchTerm, mode: 'insensitive' } } },
    ];
  }

  const cardValues = await prisma.startup.findMany({
    where: whereClause,
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
      searchQuery={searchQuery}
    />
  );
};

export default StartupSection;
