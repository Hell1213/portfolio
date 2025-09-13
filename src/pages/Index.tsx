import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
// import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TechStack />
      <Projects />
      {/* <Journey /> */}
      <Contact />
    </div>
  );
};

export default Index;
