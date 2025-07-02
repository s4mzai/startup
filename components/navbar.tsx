import { Button } from "./ui/button";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="flex gap-3 w-11/12 items-center justify-between py-4 px-15 rounded-full bg-black text-white">
        <h1 className="font-bold text-3xl">Startup</h1>
        <div className="flex gap-10 font-bold text-xl">
            <div className="hover:underline ">Startups</div>
            <div className="hover:underline ">News</div>
            <div className="hover:underline text-[#fabb20]">Info</div>
        </div>
        <Button asChild variant={"outline"} className="text-black bg-[#fabb20] hover:bg-[#fabb20] hover:text-neutral-800 border-0 rounded-full">
            {/* TODO: change the url */}
            <Link href="/">Login</Link>
        </Button>
        
    </div>
  )
}

export default Navbar