import FooterSection from "@/components/landingpage/footerSection";
import HeroSection from "@/components/landingpage/heroSection";
import StartupSection from "@/components/landingpage/startupSection";
import ScrollToStartup from "@/components/landingpage/ScrollToStartup"; // ⬅️ this

interface HomeProps {
  searchParams: {
    query?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  return (
    <>
      <ScrollToStartup />

      <div id="herosection">
        <HeroSection />
      </div>

      <div id="startupsection">
        <StartupSection searchQuery={searchParams.query} />
      </div>

      <div id="footersection">
        <FooterSection />
      </div>
    </>
  );
}
