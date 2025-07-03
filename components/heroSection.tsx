"use client"

import { Navbar } from "./navbar";
import { SearchInput } from "./searchInput";
import SplitText from "./animations/splitText";
import AnimatedText from "./animations/fillText";
import { PlaceholdersAndVanishInput } from "./animations/placeholderVanishInput";


const HeroSection = () => {
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
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <div className="h-[40rem] md:h-[36rem] w-full flex flex-col items-center justify-between pt-5 pb-15 bg-[#fabb20]">
        <Navbar />
        <p className="text-sm mt-5 md:mt-0 hover:bg-amber-100 text-amber-800 bg-amber-300 rounded-lg px-2 cursor-default">
          🚀 Launch Your Dream Startup
        </p>
        <div className="flex flex-col md:flex-row w-full items-center justify-center font-extrabold text-5xl leading-tight">
          <AnimatedText text="founders" uppercase />
          <SplitText />
          {/* TODO: place image here instead of second split text */}
        </div>
        <p className="font-bold text-center px-5 hidden sm:block">
          Join thousands of entrepreneurs who've turned their vision into reality. 
          Pitch your startup, connect with investors, and build the future.
        </p>
        <p className="font-bold text-center px-5 block sm:hidden">
          Pitch your startup, meet investors, build the future.
        </p>
        {/* <SearchInput /> */}
        <div className="w-full px-5">
          <PlaceholdersAndVanishInput 
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;