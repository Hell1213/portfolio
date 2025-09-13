import { motion } from "framer-motion";
import { ChevronDown, Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 cosmic-bg opacity-30" />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/20 blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-secondary/20 blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-accent/20 blur-lg"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 3 }}
        />

        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <div className="text-gradient">Hii I'm</div>
              <span className="text-gradient">Rajat</span>{" "}
              <span className="text-foreground">Yadav</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-xl md:text-2xl text-muted-foreground space-y-2">
              <motion.p
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                Full Stack Developer
              </motion.p>
              <span className="text-primary mx-3">|</span>
              <motion.p
                className="inline-block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                AI Learner
              </motion.p>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building interactive, scalable applications.
            Specializing in frontend, backend, and exploring the frontiers of AI
            and ML.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button className="btn-neon group" asChild>
              <a
                href="https://github.com/Hell1213"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
            </Button>
            <Button className="btn-ghost-neon group" asChild>
              <a
                href="https://x.com/rajatyadavv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Twitter
              </a>
            </Button>
            <Button
              className="btn-neon group"
              onClick={() => setIsContactOpen(true)}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Email Me
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="animate-bounce cursor-pointer"
            onClick={() => {
              const techStackSection = document.getElementById("tech-stack");
              if (techStackSection) {
                techStackSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-primary opacity-70" />
          </motion.div>
        </motion.div>
      </section>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Hero;
