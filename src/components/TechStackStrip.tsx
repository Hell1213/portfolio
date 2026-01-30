import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface TechStackStripProps {
  position: 'left' | 'right';
  technologies: Technology[];
}

const TechStackStrip = ({ position, technologies }: TechStackStripProps) => {
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];
  
  return (
    <div
      className={`fixed ${position === 'left' ? 'left-0' : 'right-0'} top-0 h-screen w-24 z-10 hidden lg:flex flex-col overflow-hidden`}
    >
      <motion.div
        className="flex flex-col gap-8 py-6"
        animate={{
          y: position === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%']
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {duplicatedTechs.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="flex flex-col items-center justify-center px-3 group cursor-pointer"
          >
            <div
              className="w-14 h-14 rounded-xl p-3 flex items-center justify-center transition-all duration-300 bg-white/20 backdrop-blur-sm group-hover:bg-white/30 relative"
              style={{
                boxShadow: `0 2px 8px ${tech.color}15, 0 0 12px ${tech.color}08`,
              }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 relative z-10"
                loading="lazy"
                style={{
                  opacity: 0.5,
                  imageRendering: 'crisp-edges'
                }}
              />
          
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: '0 0 20px hsl(0 85% 60% / 0.6), 0 0 40px hsl(0 85% 60% / 0.4), inset 0 0 20px hsl(0 85% 60% / 0.2)',
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStackStrip;
