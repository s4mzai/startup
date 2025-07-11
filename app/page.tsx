import FooterSection from "@/components/landingpage/footerSection";
import HeroSection from "@/components/landingpage/heroSection";
import StartupSection from "@/components/landingpage/startupSection";

export default function Home() {
  return (
    <>
      {/* HERO SECTION HERE */}
      <div id="herosection">
        <HeroSection/>
      </div>
      {/* STARTUPS SECTION HERE */}
      <div id="startupsection">
        <StartupSection/>
      </div>
      {/* FOOTER HERE */}
      <div id="footersection">
        <FooterSection/>
      </div>
    </>
  );
}
