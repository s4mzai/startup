import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
export function SearchInput() {
    // TODO: add the button function here 
  return (
    <div className="flex w-full max-w-lg items-center gap-2 relative">
      <Input type="text" placeholder="SEARCH STARTUPS" className="border-black bg-white border-1 focus-visible:ring-0 rounded-full focus-visible:border-black p-7"/>
      {/* TODO: add that cross button later */}
      <Button type="submit" variant={"outline"} className="cursor-pointer border-0 absolute right-5 rounded-full bg-black text-white top-1/2 -translate-y-1/2 hover:bg-neutral-800 hover:text-white " size={"icon"} >
        <Search />
      </Button>
    </div>
  )
}
