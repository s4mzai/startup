import FooterSection from "@/components/landingpage/footerSection";
import HeroSection from "@/components/landingpage/heroSection";
import StartupSection from "@/components/landingpage/startupSection";

export default function Home() {
  return (
    <>
      {/* HERO SECTION HERE */}
      <HeroSection/>
      {/* STARTUPS SECTION HERE */}
      <StartupSection/>
      {/* FOOTER HERE */}
      <FooterSection/>  
    </>
  );
}
