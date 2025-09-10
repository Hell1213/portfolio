import { motion } from 'framer-motion';
import { useState } from 'react';
import { Github, Twitter, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from './ContactModal';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Tech Stack', id: 'tech-stack' },
    { label: 'Projects', id: 'projects' },
    { label: 'Journey', id: 'journey' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="text-2xl font-bold text-gradient cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('hero')}
            >
              RY
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Social Links & Contact */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="https://github.com/Hell1213"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, rotate: 12 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://x.com/rajatyadavv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, rotate: -12 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <Button
                onClick={() => setIsContactOpen(true)}
                className="btn-neon"
                size="sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-foreground"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4 border-t border-primary/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
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
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/rajatyadavv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <Button
                    onClick={() => {
                      setIsContactOpen(true);
                      setIsOpen(false);
                    }}
                    className="btn-neon"
                    size="sm"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
};

export default Navigation;