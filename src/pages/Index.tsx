import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import TeamSlider from "@/components/sections/TeamSlider";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/layout/Footer";
import { TeamMembersProvider } from "@/utils/TeamMembersContext";
import Wave from "@/components/ui/Wave";

const Index = () => {
  return (
    <TeamMembersProvider>
      <div className="bg-custom-dark min-h-screen">
        <Navbar />
        <Hero />

        <Wave fill="#2d145d" animate flip />
        <Services />
        <Wave fill="#2d145d" animate />
        <Technologies />
        <Wave fill="#181926" animate flip />

        <Projects />
        <Wave fill="#181926" animate />

        <TeamSlider />
        <Wave fill="#201739" animate flip />

        <FaqSection />
        <Footer />
      </div>
    </TeamMembersProvider>
  );
};

export default Index;