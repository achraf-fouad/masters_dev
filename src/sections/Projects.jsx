import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Coffee, Utensils, ShoppingBag } from 'lucide-react';

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            id: 1,
            title: "Aroma Café",
            category: "Coffee Shop Website",
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2187&auto=format&fit=crop",
            icon: <Coffee size={24} />,
            color: "from-amber-600 to-orange-500"
        },
        {
            id: 2,
            title: "Gourmet Haven",
            category: "Restaurant Experience",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
            icon: <Utensils size={24} />,
            color: "from-red-600 to-rose-500"
        },
        {
            id: 3,
            title: "SwatchMa",
            category: "E-commerce Store",
            image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop",
            icon: <ShoppingBag size={24} />,
            color: "from-blue-600 to-indigo-500"
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        {t('projects.title') || "Our Featured Projects"}
                    </motion.h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        {t('projects.subtitle') || "Explore some of our recent digital masterpieces. We bring ideas to life with precision and creativity."}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all duration-500 z-10"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />

                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white mb-3 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300`}>
                                    {project.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-300 text-sm mb-4">{project.category}</p>
                                <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <span>View Project</span>
                                    <ExternalLink size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
