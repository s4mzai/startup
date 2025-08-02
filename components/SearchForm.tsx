"use client"
import React, { useState } from 'react'
import { PlaceholdersAndVanishInput } from "@/components/animations/placeholderVanishInput";
import { useRouter } from 'next/navigation';


const SearchForm = () => {
    const router = useRouter()
    const [value, setValue] = useState("")
    const placeholders = [
  "Search startup names like 'Zerodha'",
  "Search by founder name, e.g. 'Nikhil Kamath'",
  "Explore categories like 'AI' or 'EdTech'",
  "Find titles like 'Productivity App' or 'AI Co-pilot'",
  "Looking for a Robotics startup?",
  // "Type a problem, find who’s solving it",
  "Search healthtech, fintech, spacetech…",
  "Who's building the next big thing?",
  "Explore by tagline or mission",
  "Discover tools built for creators",
  "Find stealth startups with unique ideas",
  // "Search ‘YC’ to find YC-backed startups",
  // "Search by keywords like 'climate', 'education', 'crypto'",
  "Find projects by solo founders",
  "Startups with 10x potential? Search them here",
  "Who's building in your city? Try 'Bangalore' or 'SF'",
]
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value)
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/?query=${value}`)
    console.log("submitted");
  };
  return (
    <PlaceholdersAndVanishInput 
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
    />
  )
}

export default SearchForm