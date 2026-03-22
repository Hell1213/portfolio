import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  Zap,
  Brush,
  BookOpen,
  Building2,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case "completed":
        return { indicator: "✅", color: "text-green-500" };
      case "in-progress":
        return {
          indicator: "🟢",
          color: "text-green-400",
          label: "In Progress",
        };
      case "featured":
        return { indicator: "⭐", color: "text-primary", label: "Featured" };
      default:
        return { indicator: "", color: "", label: "" };
    }
  };

  const projects = [
    {
      title: "Clarity App",
      subtitle: "AI-Powered Wellness Platform",
      description:
        "An AI-powered wellness app designed to help users improve focus and mental health through intelligent journaling, productivity tracking, and personalized insights.",
      longDescription:
        "Clarity will evolve into a complete Focus OS for productivity and mental health. Beyond journaling and timers, it will integrate smart app/website blocking, VS Code extension for coding session tracking, deep analytics, cross-device syncing, calendar/music integration, and AI-driven wellness suggestions.",
      link: "https://clarity-app-one.vercel.app/",
      sourceCodeLink: "https://github.com/Hell1213/clarity-app",
      icon: Zap,
      gradient: "bg-gradient-primary",
      tags: ["AI", "Wellness", "React", "Next.js", "TailwindCSS"],
      features: [
        "Intelligent Journaling",
        "Productivity Tracking",
        "AI Insights",
        "Focus Timers",
      ],
      status: "featured",
    },
    {
      title: "NovaDraw",
      subtitle: "Real-time Collaborative Whiteboard",
      description:
        "A real-time collaborative whiteboard built with MERN + Yjs. Provides teams with an infinite canvas for brainstorming, diagramming, and visual collaboration.",
      longDescription:
        "NovaDraw replicates the experience of an in-person whiteboard session, but online. With live collaboration, drawing tools, infinite canvas, and real-time syncing for seamless remote team collaboration.",
      link: "https://nova-draw.vercel.app/",
      sourceCodeLink: "https://github.com/Hell1213/NovaDraw",
      icon: Brush,
      gradient: "bg-gradient-secondary",
      tags: ["MERN", "Yjs", "Real-time", "Collaboration", "Canvas"],
      features: [
        "Live Collaboration",
        "Drawing Tools",
        "Infinite Canvas",
        "Real-time Syncing",
      ],
      status: "featured",
    },
    {
      title: "E-Mentor",
      subtitle: "AI-Powered E-Book Reading Assistant",
      description:
        "A Chrome extension that helps users understand complex text while reading e-books, with subscription-based premium features and AI explanations.",
      longDescription:
        "E-Mentor transforms the reading experience with AI-powered explanations for complex terms and concepts. Features multiple subscription tiers (Free, Mini $2/mo, Pro $5/mo, Scholar $10/mo), user dashboard, email notifications, and seamless Chrome integration for enhanced learning.",
      link: "#", // Placeholder for live demo
      sourceCodeLink: "#", // Placeholder for GitHub repo
      icon: BookOpen,
      gradient: "bg-gradient-accent",
      tags: [
        "AI",
        "Chrome Extension",
        "FastAPI",
        "Next.js",
        "OpenAI",
        "Subscription",
      ],
      features: [
        "AI Text Explanations",
        "Chrome Extension",
        "Subscription Tiers",
        "User Dashboard",
      ],
      status: "completed",
    },
    {
      title: "Business ERP",
      subtitle: "Multi-Tenant ERP System",
      description:
        "A modern, multi-tenant ERP system for small-to-medium businesses with finance, sales, and inventory management modules.",
      longDescription:
        "Comprehensive business management solution featuring customer management, invoice generation with PDF export, payment tracking, lead management, sales pipeline with CRM, and inventory control. Built with multi-tenant architecture for complete data isolation and scalability.",
      link: "#", // In progress
      sourceCodeLink: "#", // In progress
      icon: Building2,
      gradient: "bg-gradient-secondary",
      tags: [
        "ERP",
        "Multi-tenant",
        "PostgreSQL",
        "Next.js",
        "Node.js",
        "Business",
      ],
      features: [
        "Finance Module",
        "Sales Pipeline",
        "Inventory Management",
        "Multi-tenant Architecture",
      ],
      status: "in-progress",
    },
    {
      title: "Aegis Protocol",
      subtitle: "Decentralized IP Protection Platform",
      description:
        "Web3 SaaS platform for AI-generated content IP protection using blockchain, smart contracts, and AI agents for automated licensing and royalty distribution.",
      longDescription:
        "Revolutionary blockchain-based intellectual property protection system for AI-generated content. Features autonomous AI agents for IP-NFT minting, computer vision usage detection across the web, smart contract licensing with automated negotiations, and decentralized marketplace for creators in the AI age.",
      link: "#", // In progress
      sourceCodeLink: "#", // In progress
      icon: Shield,
      gradient: "bg-gradient-primary",
      tags: [
        "Web3",
        "Blockchain",
        "AI",
        "NFT",
        "Smart Contracts",
        "IP Protection",
      ],
      features: [
        "IP-NFT Minting",
        "AI Usage Detection",
        "Smart Contract Licensing",
        "Decentralized Marketplace",
      ],
      status: "in-progress",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="projects" ref={ref} className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Personal Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that showcase the power of modern web
            technologies
          </p>
        </motion.div>

        <motion.div
          className="space-y-32"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12`}
            >
              {/* Project Visual */}
              <motion.div
                className="w-full lg:flex-1 relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glow-card p-4 sm:p-6 md:p-8 aspect-square lg:h-80 relative overflow-hidden rounded-2xl">
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 ${project.gradient} opacity-20 rounded-2xl`}
                  />

                  {/* Project Icon */}
                  <motion.div
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-foreground/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <project.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                  </motion.div>

                  {/* Floating Elements - Hidden on mobile for cleaner look */}
                  <div className="absolute inset-0 overflow-hidden hidden sm:block">
                    {project.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        className="absolute bg-primary/20 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 text-xs"
                        style={{
                          top: `${20 + i * 15}%`,
                          left: `${10 + (i % 2) * 30}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      >
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Central Display */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-2xl sm:text-3xl lg:text-6xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors duration-500 text-center"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      {project.title.split(" ")[0]}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <div className="flex-1 space-y-6">
                <div>
                  <motion.div
                    className="flex items-center gap-3 mb-2"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                      {project.title}
                    </h3>
                    {project.status && (
                      <div className="flex items-center gap-1">
                        <span className="text-lg">
                          {getStatusIndicator(project.status).indicator}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            getStatusIndicator(project.status).color
                          }`}
                        >
                          {getStatusIndicator(project.status).label}
                        </span>
                      </div>
                    )}
                  </motion.div>
                  <motion.p
                    className="text-lg sm:text-xl text-primary mb-4"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {project.subtitle}
                  </motion.p>
                </div>

                <motion.p
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  {project.description}
                </motion.p>

                <motion.p
                  className="text-sm text-muted-foreground/80 leading-relaxed"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {project.longDescription}
                </motion.p>

                {/* Tags */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {project.link !== "#" ? (
                    <Button className="btn-neon group" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                        View Live
                      </a>
                    </Button>
                  ) : (
                    <Button
                      className="btn-neon opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}

                  {project.sourceCodeLink !== "#" ? (
                    <Button className="btn-ghost-neon group" asChild>
                      <a
                        href={project.sourceCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Source Code
                      </a>
                    </Button>
                  ) : (
                    <Button
                      className="btn-ghost-neon opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Private Repo
                    </Button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
