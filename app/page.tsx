import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/footer";

import HeroSection from "./components/sections/HeroSection";
import ProblemStatement from "./components/sections/ProblemBar";
import HowItWork from "./components/sections/HowItWork";
import Features from "./components/sections/Features";
import WhoItsForSection from "./components/sections/WhoItsFor";
import EarlyAccessCTA from "./components/sections/EarlyAcess";
import BackToTopButton from "./components/ui/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071B5A] pt-16">
      <Navbar />
      <HeroSection />
      <ProblemStatement />
      <HowItWork />
      <Features />
      <WhoItsForSection/>
      <EarlyAccessCTA/>
      <Footer />
      <BackToTopButton />
    </main>
  );
}
