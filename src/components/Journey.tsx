import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, GitBranch, Users } from 'lucide-react';

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const journeySteps = [
    {
      phase: "Open Source Contributor",
      title: "CCSync (CCExtractor)",
      description: "Actively contributing to CCSync, an open-source task management and sync platform. Work across frontend and backend, focusing on improving task-related UX, adding meaningful test coverage, and implementing new features based on maintainer feedback. Contributions include UI enhancements, backend fixes, and collaborating in code reviews and issue discussions with core maintainers.",
      icon: Users,
      color: "hsl(45 100% 70%)",
      technologies: ["React", "Node.js", "Testing", "Code Review", "Open Source"],
      year: "Present"
    },
    {
      phase: "Freelance Software Engineer",
      title: "SveltyCMS — Monorepo Migration & Build Optimization",
      description: "Led migration and build optimization for SveltyCMS, focusing on Nx-based monorepo adoption and improving long-term maintainability of the codebase. Migrated existing project structure to an Nx monorepo architecture, refactored circular dependencies between core applications, integrated Next branch into the new monorepo setup, improved build stability and modularity for future scaling, and collaborated directly with maintainers on production code.",
      icon: GitBranch,
      color: "hsl(150 100% 70%)",
      technologies: ["Nx", "Monorepo", "Architecture", "Build Systems", "SvelteKit"],
      
    },
    {
      phase: "Full-Stack Developer",
      title: "Roadside Assistance Platform",
      description: "Built a cross-platform roadside assistance platform where users can request services like towing, jump start, fuel delivery, and track service providers in real time. Worked as the full-stack developer and handled the complete product including customer and driver mobile apps, admin dashboard, backend APIs, real-time location features, OTP-based authentication, and payment gateway integration.",
      icon: Server,
      color: "hsl(280 100% 70%)",
      technologies: ["Flutter", "Next.js", "Node.js", "NestJS", "Google Maps", "WebSockets", "Docker"],
     
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { 
      x: -100, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="experience" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Experience & Journey</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            From frontend development to AI exploration - a continuous evolution in technology and impact
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-primary rounded-full"
            initial={{ height: 0, opacity: 0 }}
            animate={isInView ? { height: "100%", opacity: 1 } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ top: "2rem", bottom: "2rem" }}
          />

          <motion.div
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.phase}
                variants={stepVariants}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } relative`}
              >
                <motion.div
                  className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10"
                  style={{ 
                    backgroundColor: `${step.color}20`,
                    border: `2px solid ${step.color}`
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    boxShadow: `0 0 30px ${step.color}50`
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.5 }}
                >
                  <step.icon 
                    className="w-6 h-6" 
                    style={{ color: step.color }}
                  />
                </motion.div>

                <motion.div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:mr-auto lg:pr-8 xl:pr-16' : 'lg:ml-auto lg:pl-8 xl:pl-16'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glow-card p-6 sm:p-8 relative overflow-hidden group">
                    <div 
                      className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ backgroundColor: step.color }}
                    />
                    
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: `${step.color}20`,
                        color: step.color,
                        border: `1px solid ${step.color}40`
                      }}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {step.year}
                    </motion.div>

                    <div className="space-y-4">
                      <div>
                        <h3 
                          className="text-2xl font-bold mb-2"
                          style={{ color: step.color }}
                        >
                          {step.phase}
                        </h3>
                        <h4 className="text-lg font-semibold text-foreground">
                          {step.title}
                        </h4>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {step.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs border"
                            style={{
                              backgroundColor: `${step.color}10`,
                              borderColor: `${step.color}30`,
                              color: step.color
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ 
                              duration: 0.4, 
                              delay: index * 0.3 + techIndex * 0.1 + 0.8 
                            }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;