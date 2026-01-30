import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        ref={ref}
        className="py-20 sm:py-32 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary text-sm mb-4">
              04. What's Next?
            </p>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Get In Touch
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Although I'm not currently looking for any new opportunities, my inbox is 
              always open. Whether you have a question or just want to say hi, I'll try my 
              best to get back to you!
            </p>

            <Button
              className="btn-neon group mx-auto"
              onClick={() => setIsContactOpen(true)}
            >
              <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Say Hello
            </Button>
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