import Navbar from "./navbar";
import WavyText from "./animations/wavyText";
import { SearchInput } from "./searchInput";


// TODO: add a animation or image here
const HeroSection = () => {
  return (
    <>
      <div className="h-[36rem] w-full flex flex-col items-center justify-between pt-5 pb-15 bg-[#fabb20]">
        <Navbar/>
        <div className="flex flex-col font-extrabold text-5xl leading-tight">
            <WavyText/>
            <span>capture the <span className="text-green-900">spotlight.</span></span>
        </div>
        <SearchInput/>
      </div>   
    </>
  )
}

export default HeroSection