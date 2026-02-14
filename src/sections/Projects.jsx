import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ExternalLink, Coffee, Utensils, ShoppingBag, ArrowUpRight, Sparkles, Eye, Code2 } from "lucide-react";
import { HiMiniAcademicCap } from "react-icons/hi2";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Hyuga Restaurant",
      category: "Japanisches Restaurant Experience",
      description: "Modern Japanese restaurant website with immersive dining experience and reservation system",
      image: "/images/hyuga.png",
      icon: <Utensils size={24} />,
      color: "from-red-600 to-rose-500",
      link: "https://hyuga-elegance.vercel.app/",
      tags: ["React", "Tailwind", "Framer Motion"],
      year: "2025",
    },
    {
      id: 2,
      title: "ISTA connect",
      category: "Educational Platform",
      description: "Digital campus solution for applied technology institute",
      image: "/images/ista.png",
      icon: <HiMiniAcademicCap size={24} />,
      color: "from-amber-600 to-orange-500",
      link: "https://ista-hh2-connect.vercel.app/",
      tags: ["React", "Node.js", "MongoDB"],
      year: "2025",
    },
    {
      id: 3,
      title: "PURE FRAGRANCES",
      category: "E-commerce Store",
      description: "Luxury fragrance e-commerce platform with seamless shopping experience",
      image: "/images/aura.png",
      icon: <ShoppingBag size={24} />,
      color: "from-blue-600 to-indigo-500",
      link: "https://aura-scents-nu.vercel.app/",
      tags: ["Next.js", "Stripe", "Tailwind"],
      year: "2026",
    },
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden bg-slate-900">
      {/* Sophisticated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Enhanced */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              {t("projects.title") }
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Projects
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t("projects.subtitle") ||
                "Discover how we've helped businesses transform their digital presence through innovative solutions and exceptional design."}
            </p>
          </motion.div>
        </div>

        {/* Projects Grid - Fully Responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-xs font-medium text-white/90">{project.year}</span>
                  </div>

                  
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-400 mb-3 line-clamp-1">
                    {project.category}
                  </p>
                  
                  <p className="text-sm text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-blue-400 transition-colors"
                    >
                      <span>View Project</span>
                      <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    
                    <button className="p-2 text-slate-400 hover:text-white transition-colors">
                      <Eye size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 lg:mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-white font-medium transition-all duration-300 backdrop-blur-sm group"
          >
            <span>View All Projects</span>
            <Code2 size={18} className="group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;