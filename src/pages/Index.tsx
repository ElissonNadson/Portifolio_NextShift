import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-custom-dark min-h-screen">
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  );
};

export default Index;