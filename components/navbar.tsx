import { SlideTabs } from "@/components/animations/navbarSlideTabs";
import StaggeredDropDown from "@/components/animations/hamburgerDropdown";



export const Navbar = () => {
  return (
    <div className="flex h-16 w-full items-center px-10 lg:px-50 justify-between">
      {/* Logo - LEFT */}
      <h1 className={` text-black text-3xl font-extrabold`}>
        Startup
      </h1>
      <SlideTabs />
      <div className="md:hidden ">
        <StaggeredDropDown/>
      </div>
    </div>
  );
};


export default Navbar;