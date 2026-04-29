import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yOrb = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const projects = [
    {
      title: "SkillSync",
      description: "Advanced MERN recruitment platform featuring AI-driven CV matching, RAG systems for applicant analysis, and real-time Kanban tracking.",
      link: "https://skill-sync-66u1u1oft-danialchoudarys-projects.vercel.app/",
      tech: ["MERN", "AI/RAG", "Socket.io"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-3 lg:col-span-3",
    },
    {
      title: "Neuroticure",
      description: "A comprehensive mental health and wellness platform designed for therapy management, mood tracking, and patient support.",
      link: "https://neuroticure.vercel.app/",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-3 lg:col-span-3",
    },
    {
      title: "Hospital Management",
      description: "A comprehensive system for managing patients, staff, and appointments efficiently.",
      link: "https://hospital-management-system-seven-tawny.vercel.app/",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop", 
      span: "md:col-span-1 lg:col-span-1",
    },
    {
      title: "E-Commerce Experience",
      description: "A fully functional e-commerce site with product listings and checkout features.",
      link: "https://ecommerce-project-self.vercel.app/",
      tech: ["React", "Tailwind"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Sarix Sports",
      description: "Modern sports management portal focusing on athletic performance and equipment streamlining.",
      link: "https://sarixsports.com/",
      tech: ["Next.js", "Shopify", "Tailwind"],
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
      title: "Quiz App",
      description: "A dynamic quiz application with multiple-choice questions, interactive UI, and real-time scoring.",
      link: "https://danialchoudary.github.io/QuizApp/",
      tech: ["React", "CSS"],
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-3 lg:col-span-3",
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-gray-50 dark:bg-[#0f0f11] transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Accent with subtle Scroll Parallax */}
      <motion.div style={{ y: yOrb }} className="absolute top-0 right-0 -mt-32 -mr-32 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
          >
            Featured Work.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-500 dark:text-gray-400"
          >
            A curated selection of projects demonstrating clean code and intuitive design.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-white dark:bg-[#1a1a1c] border border-gray-200/50 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 transition-all duration-500 shadow-sm hover:shadow-xl dark:shadow-none ${project.span}`}
            >
              {/* Background Image with scaled hover */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 opacity-90 dark:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-black/90 dark:via-black/50 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-end h-full p-8 sm:p-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                    {project.title}
                    <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                  </h3>
                  
                  <p className="text-gray-200 dark:text-gray-300 text-lg leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-4 py-1.5 text-sm font-semibold bg-white/20 backdrop-blur-md text-white rounded-full border border-white/20 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;