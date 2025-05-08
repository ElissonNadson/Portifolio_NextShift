import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import TeamSlider from "@/components/sections/TeamSlider";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/layout/Footer";
import { TeamMembersProvider } from "@/utils/TeamMembersContext";

const Index = () => {
  return (
    <TeamMembersProvider>
      <div className="bg-custom-dark min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Technologies />
        <Projects />
        <TeamSlider />
        <FaqSection />
        <Footer />
      </div>
    </TeamMembersProvider>
  );
};

export default Index;