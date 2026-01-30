import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Github as GithubIcon, Twitter as TwitterIcon, Mail, Menu, X, Linkedin as LinkedinIcon, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [20, 10]);
  const navOpacity = useTransform(scrollY, [0, 50], [0.8, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank');
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ y: navY }}
      >
        <motion.div 
          className="max-w-6xl mx-auto mt-4 rounded-2xl border transition-all duration-300"
          style={{ 
            opacity: navOpacity,
            borderColor: isScrolled ? 'hsl(var(--primary) / 0.3)' : 'hsl(var(--border))',
            backgroundColor: isScrolled ? 'hsl(var(--background) / 0.95)' : 'hsl(var(--background) / 0.8)',
            backdropFilter: 'blur(12px)',
            boxShadow: isScrolled ? '0 8px 32px rgba(239, 68, 68, 0.1)' : '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}
          whileHover={{ 
            scale: 1.01,
            boxShadow: '0 12px 40px rgba(239, 68, 68, 0.15)'
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                className="text-2xl font-bold text-gradient cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("hero")}
              >
                RY
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </motion.button>
                ))}
              </div>

              {/* Social Links & Actions */}
              <div className="hidden md:flex items-center space-x-4">
                <motion.a
                  href="https://github.com/Hell1213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, rotate: 12, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GithubIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rajat-yadav-0499b3277/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, rotate: 12, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <LinkedinIcon className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://x.com/rajatyadavv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.2, rotate: -12, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <TwitterIcon className="w-5 h-5" />
                </motion.a>
                <Button
                  onClick={() => setIsContactOpen(true)}
                  className="btn-ghost-neon"
                  size="sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button
                  onClick={handleResumeClick}
                  className="btn-neon"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-foreground"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <motion.div
                className="md:hidden mt-4 pb-4 border-t border-primary/20"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col space-y-4 pt-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      className="text-left text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="flex items-center space-x-4 pt-4 border-t border-primary/20">
                    <a
                      href="https://github.com/Hell1213"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/rajat-yadav-0499b3277/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a
                      href="https://x.com/rajatyadavv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <TwitterIcon className="w-5 h-5" />
                    </a>
                    <Button
                      onClick={() => {
                        setIsContactOpen(true);
                        setIsOpen(false);
                      }}
                      className="btn-ghost-neon"
                      size="sm"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button
                      onClick={() => {
                        handleResumeClick();
                        setIsOpen(false);
                      }}
                      className="btn-neon"
                      size="sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.nav>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
};

export default Navigation;
