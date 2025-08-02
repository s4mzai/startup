import FooterSection from "@/components/landingpage/footerSection";
import HeroSection from "@/components/landingpage/heroSection";
import StartupSection from "@/components/landingpage/startupSection";
import ScrollToStartup from "@/components/landingpage/ScrollToStartup";

interface HomeProps {
  searchParams: Promise<{
    query?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { query } = await searchParams;

  return (
    <>
      <ScrollToStartup />

      <div id="herosection">
        <HeroSection />
      </div>

      <div id="startupsection">
        <StartupSection searchQuery={query} />
      </div>

      <div id="footersection">
        <FooterSection />
      </div>
    </>
  );
}