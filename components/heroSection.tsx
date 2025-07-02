import {Navbar} from "./navbar";
import { SearchInput } from "./searchInput";
import SplitText from "./animations/splitText";


// TODO: add a animation or image here
const HeroSection = () => {
  return (
    <>
      <div className="h-[36rem] w-full flex flex-col items-center justify-between pt-5 pb-15 bg-[#fabb20]">
        <Navbar/>
        <p className="text-sm hover:bg-amber-100 text-amber-800 bg-amber-300 rounded-lg px-2 cursor-default">🚀 Launch Your Dream Startup</p>
        <div className="flex w-full items-center justify-center font-extrabold text-5xl leading-tight">

            <SplitText/>
            {/* TODO: place image here instead of second split text */}
            <SplitText/>
        </div>
        <p className="p-5 text-center lg:w-80% font-bold text-neutral-700">Join thousands of entrepreneurs who've turned their vision into reality. Pitch your startup, connect with investors, and build the future.</p>
        <SearchInput/>
      </div>   
    </>
  )
}

export default HeroSection