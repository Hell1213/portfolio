import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Tech stack data with official icons
const techStack = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', icon: '/src/assets/icons/html.png', color: '#E34F26' },
  { name: 'CSS3', category: 'Frontend', icon: '/src/assets/icons/css.png', color: '#1572B6' },
  { name: 'JavaScript', category: 'Frontend', icon: '/src/assets/icons/javascript.png', color: '#F7DF1E' },
  { name: 'TypeScript', category: 'Frontend', icon: '/src/assets/icons/typescript.png', color: '#3178C6' },
  { name: 'React', category: 'Frontend', icon: '/src/assets/icons/react.png', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', icon: '/src/assets/icons/nextjs.png', color: '#000000' },
  { name: 'Redux', category: 'Frontend', icon: '/src/assets/icons/redux.png', color: '#764ABC' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: '/src/assets/icons/tailwind.png', color: '#06B6D4' },
  
  // Backend
  { name: 'Python', category: 'Backend', icon: '/src/assets/icons/python.png', color: '#3776AB' },
  { name: 'Node.js', category: 'Backend', icon: '/src/assets/icons/nodejs.png', color: '#339933' },
  { name: 'Express.js', category: 'Backend', icon: '/src/assets/icons/express.png', color: '#000000' },
  { name: 'NestJS', category: 'Backend', icon: '/src/assets/icons/nestjs.png', color: '#E0234E' },
  
  // Database
  { name: 'MongoDB', category: 'Database', icon: '/src/assets/icons/mongodb.png', color: '#47A248' },
  { name: 'PostgreSQL', category: 'Database', icon: '/src/assets/icons/postgresql.png', color: '#336791' },
  { name: 'MySQL', category: 'Database', icon: '/src/assets/icons/mysql.png', color: '#4479A1' },
  { name: 'Prisma', category: 'Database', icon: '/src/assets/icons/prisma.png', color: '#2D3748' },
  
  // Tools & Cloud
  { name: 'GitHub', category: 'Tools', icon: '/src/assets/icons/github.png', color: '#181717' },
  { name: 'Docker', category: 'Tools', icon: '/src/assets/icons/docker.png', color: '#2496ED' },
  { name: 'Postman', category: 'Tools', icon: '/src/assets/icons/postman.png', color: '#FF6C37' },
  { name: 'Vercel', category: 'Tools', icon: '/src/assets/icons/vercel.png', color: '#000000' },
  { name: 'Firebase', category: 'Tools', icon: '/src/assets/icons/firebase.png', color: '#FFCA28' },
];

const TechCard = ({ tech, index }: { tech: typeof techStack[0], index: number }) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.05 }}
    >
      <div 
        className="relative p-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-2xl group-hover:shadow-primary/20"
        style={{
          boxShadow: `0 4px 20px ${tech.color}10`
        }}
      >
        {/* Tech Icon */}
        <div className="relative mb-4 mx-auto w-16 h-16 flex items-center justify-center">
          <div 
            className="absolute inset-0 rounded-xl blur-sm group-hover:blur-none transition-all duration-300"
            style={{ 
              background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}05)`,
            }}
          />
          <img 
            src={tech.icon} 
            alt={tech.name}
            className="relative w-12 h-12 object-contain z-10 group-hover:scale-110 transition-transform duration-300"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
            }}
          />
        </div>

        {/* Tech Info */}
        <div className="text-center">
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {tech.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {tech.category}
          </p>
        </div>

        {/* Glow Effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            background: `radial-gradient(circle at center, ${tech.color}15, transparent 70%)`
          }}
        />
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { name: 'Frontend', techs: techStack.filter(t => t.category === 'Frontend') },
    { name: 'Backend', techs: techStack.filter(t => t.category === 'Backend') },
    { name: 'Database', techs: techStack.filter(t => t.category === 'Database') },
    { name: 'Tools', techs: techStack.filter(t => t.category === 'Tools') },
  ];

  return (
    <section id="tech-stack" ref={ref} className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies I use to craft exceptional digital experiences
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                  {category.name}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
              </div>

              {/* Tech Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.techs.map((tech, index) => (
                  <TechCard key={tech.name} tech={tech} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {category.techs.length}+
                </div>
                <div className="text-muted-foreground font-medium">
                  {category.name} Tools
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;