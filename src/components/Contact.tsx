import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from './ContactModal';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isContactOpen, setIsContactOpen] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "sy1sascc@gmail.com",
      action: () => setIsContactOpen(true),
      color: "hsl(195 100% 75%)",
      description: "Drop me a line"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Hell1213",
      href: "https://github.com/Hell1213",
      color: "hsl(150 100% 70%)",
      description: "Check my code"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@rajatyadavv",
      href: "https://x.com/rajatyadavv",
      color: "hsl(280 100% 70%)",
      description: "Follow my journey"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <>
      <section id="contact" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-32 left-32 w-48 h-48 rounded-full bg-secondary/10 blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Let's Connect</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to build something amazing together? Let's start a conversation.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 0 30px ${method.color}30`
                }}
                whileTap={{ scale: 0.95 }}
              >
                {method.href ? (
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glow-card p-6 text-center group transition-smooth relative"
                  >
                    {/* Animated Background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
                      style={{ backgroundColor: method.color }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center relative"
                      style={{
                        backgroundColor: `${method.color}20`,
                        border: `2px solid ${method.color}40`
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <method.icon 
                        className="w-6 h-6" 
                        style={{ color: method.color }}
                      />
                      
                      {/* Pulse Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: method.color }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: index * 0.2
                        }}
                      />
                    </motion.div>

                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {method.label}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {method.description}
                    </p>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: method.color }}
                    >
                      {method.value}
                    </p>
                  </a>
                ) : (
                  <button
                    onClick={method.action}
                    className="w-full glow-card p-6 text-center group transition-smooth relative"
                  >
                    {/* Animated Background */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
                      style={{ backgroundColor: method.color }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center relative"
                      style={{
                        backgroundColor: `${method.color}20`,
                        border: `2px solid ${method.color}40`
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <method.icon 
                        className="w-6 h-6" 
                        style={{ color: method.color }}
                      />
                      
                      {/* Pulse Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2"
                        style={{ borderColor: method.color }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: index * 0.2
                        }}
                      />
                    </motion.div>

                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {method.label}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {method.description}
                    </p>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: method.color }}
                    >
                      {method.value}
                    </p>
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="glow-card p-8 sm:p-12 max-w-2xl mx-auto">
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Send className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'm always excited to connect with fellow developers and innovators.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-neon group"
                  onClick={() => setIsContactOpen(true)}
                >
                  <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Send Message
                </Button>
                <Button className="btn-ghost-neon group" asChild>
                  <a href="https://github.com/Hell1213" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
};

export default Contact;