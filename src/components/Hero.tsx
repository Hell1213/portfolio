import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-20">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-6">
            Hi, my name is
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Rajat Yadav.
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-grey-light">
            I build Products not just Projects.
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
           I’m a software engineer building real-world products across web, mobile, and backend systems. Over time, I want to focus on designing reliable, scalable systems and products that are simple to use and solid under the hood.
          </p>
        </motion.div>

        {/* Right side - Profile image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="profile-frame w-80 h-80 relative group">
            <img 
              src="/profile.jpg" 
              alt="Rajat Yadav" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-500" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => {
          const projectsSection = document.getElementById("projects");
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <ChevronDown className="w-6 h-6 text-primary opacity-70 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;