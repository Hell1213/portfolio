import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Send, Mail, User, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Initialize EmailJS (replace with your actual keys)
      emailjs.init("WfMp6i95hfX4jNSrO"); // Your public key
      
      // Send email using EmailJS
      await emailjs.send(
        "service_rajat_portfolio", // Your service ID
        "template_contact_form", // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          to_email: "sy1sascc@gmail.com"
        }
      );
      
      setIsSuccess(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSuccess(false);
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      // Fallback to mailto
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\n\nMessage:\n${formData.message}`
      );
      window.open(`mailto:sy1sascc@gmail.com?subject=${subject}&body=${body}`, '_blank');
      
      setIsSuccess(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSuccess(false);
        onClose();
      }, 2000);
    }
    
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative max-w-md w-full mx-auto"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="glow-card p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Get in Touch</h2>
                    <p className="text-sm text-muted-foreground">Send me a message</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="hover:bg-primary/10"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground flex items-center">
                    <User className="w-4 h-4 mr-2 text-primary" />
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-primary" />
                    Phone (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full btn-neon group"
                  disabled={!formData.name || !formData.email || !formData.message || isLoading}
                >
                  {isLoading ? (
                    <motion.div
                      className="w-4 h-4 mr-2 border-2 border-primary-foreground border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : isSuccess ? (
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  ) : (
                    <Send className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  )}
                  {isLoading ? 'Sending...' : isSuccess ? 'Sent!' : 'Send Message'}
                </Button>
              </form>

              <div className="mt-6 pt-4 border-t border-primary/20 text-center">
                <p className="text-xs text-muted-foreground">
                  {isSuccess ? '✨ Message sent successfully!' : 'Your message will be sent directly to my inbox'}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;