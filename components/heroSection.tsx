"use client"

import { Navbar } from "./navbar";
import SplitText from "./animations/splitText";
import AnimatedText from "./animations/fillText";
import { PlaceholdersAndVanishInput } from "./animations/placeholderVanishInput";
import { Button } from "./ui/button";
import { motion } from "framer-motion"



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
      <div className="h-[43rem] w-full flex flex-col items-center justify-between pt-5 pb-15 bg-[#fabb20]">
        <Navbar />
        <p className="text-sm mt-5 md:mt-0 hover:bg-amber-100 text-amber-800 bg-amber-300 rounded-lg px-2 cursor-default">
          🚀 Launch Your Dream Startup
        </p>
        <div className="flex flex-col md:flex-row w-ful items-center justify-center font-extrabold leading-tight mx-10 gap-3 md:gap-10">
          <AnimatedText text="founders" uppercase className=" text-6xl sm:text-8xl"/>
          {/* <SplitText /> */}
          <motion.h1
          initial={{
          y: 10,
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
          className="text-wrap sm:w-90 text-center  text-4xl sm:text-5xl font-lg uppercase ">Launch Your Next Big <span className="underline">Idea</span>
          </motion.h1>
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
        <div className="gap-3 items-center justify-center hidden lg:flex">
          <h2 className="font-bold">Suggested:</h2>
          <div className="flex gap-3">
            <Button size={"lg"} className='rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black  transition-all duration-300 translate-x-[0px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[0px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_white] active:translate-x-[4px] active:translate-y-[4px] active:rounded-2xl active:shadow-none '>TECH</Button>
            <Button size={"lg"} className='rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black  transition-all duration-300 translate-x-[0px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[0px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_white] active:translate-x-[4px] active:translate-y-[4px] active:rounded-2xl active:shadow-none '>ROBOTICS</Button>
            <Button size={"lg"} className='rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black  transition-all duration-300 translate-x-[0px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[0px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_white] active:translate-x-[4px] active:translate-y-[4px] active:rounded-2xl active:shadow-none '>AI</Button>
            <Button size={"lg"} className='rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black  transition-all duration-300 translate-x-[0px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[0px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_white] active:translate-x-[4px] active:translate-y-[4px] active:rounded-2xl active:shadow-none '>EDUCATION</Button>
            <Button size={"lg"} className='rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black  transition-all duration-300 translate-x-[0px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[0px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_white] active:translate-x-[4px] active:translate-y-[4px] active:rounded-2xl active:shadow-none '>HEALTH CARE</Button>
            <Button size={"lg"} className='rounded-2xl border-2 border-dashed border-black bg-black lg:bg-[#fabb20] px-6 py-3 font-semibold uppercase text-white lg:text-black cursor-pointer lg:hover:text-white lg:hover:bg-black  transition-all duration-300 translate-x-[0px] lg:translate-x-[0px] hover:translate-x-[-4px] hover:translate-y-[-4px] translate-y-[0px] lg:translate-y-[0px] hover:rounded-md shadow-[4px_4px_0px_white] lg:shadow-[0px_0px_0px_#fabb20] hover:shadow-[4px_4px_0px_white] active:translate-x-[4px] active:translate-y-[4px] active:rounded-2xl active:shadow-none '>FINANCE</Button>
            
          </div>

        </div>
      </div>
    </>
  );
};


export default HeroSection;