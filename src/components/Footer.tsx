import { motion } from "framer-motion";
import { Github as GithubIcon, Linkedin as LinkedinIcon, Twitter as TwitterIcon, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <motion.a
              href="https://github.com/Hell1213"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <GithubIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rajat-yadav-0499b3277/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <LinkedinIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://x.com/rajatyadavv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <TwitterIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:rajatyadav.dev@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Signature */}
          <motion.p
            className="font-mono text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Cooked by <span className="text-primary font-semibold">RAJAT YADAV</span>
          </motion.p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
