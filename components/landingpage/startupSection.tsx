// components/sections/StartupSection.tsx
import React from 'react';
import { prisma } from '@/lib/prisma';
import StartupSectionClient from '@/components/landingpage/StartupSectionClient';

interface StartupSectionProps {
  userId?: string;
  searchQuery?: string;
}

const StartupSection = async ({ userId, searchQuery }: StartupSectionProps) => {
  // Debug logging
  console.log('StartupSection received searchQuery:', searchQuery);
  console.log('StartupSection received userId:', userId);
  
  // Build the where clause based on search query and userId
  const whereClause: any = {};
  
  // If userId is provided, filter by userId
  if (userId) {
    whereClause.userId = userId;
  }
  
  // If searchQuery is provided, add search filters
  if (searchQuery && searchQuery.trim() !== '') {
    const searchTerm = searchQuery.trim();
    
    whereClause.OR = [
      // Search in startup title
      {
        title: {
          contains: searchTerm,
          mode: 'insensitive'
        }
      },
      // Search in startup description
      {
        description: {
          contains: searchTerm,
          mode: 'insensitive'
        }
      },
      // Search in startup category
      {
        category: {
          contains: searchTerm,
          mode: 'insensitive'
        }
      },
      // Search in user name
      {
        user: {
          name: {
            contains: searchTerm,
            mode: 'insensitive'
          }
        }
      },
      // Search in username
      {
        user: {
          username: {
            contains: searchTerm,
            mode: 'insensitive'
          }
        }
      }
    ];
  }

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
    where: whereClause,
    orderBy: {
      createdAt: 'desc',
    },
  });

  // Debug logging
  console.log('Where clause:', JSON.stringify(whereClause, null, 2));
  console.log('Found startups:', cardValues.length);

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