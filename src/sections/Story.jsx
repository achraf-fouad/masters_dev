import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Rocket, Target, Users, TrendingUp, Calendar, Award, CheckCircle } from 'lucide-react';

const Story = () => {
    const { t } = useTranslation();

    const milestones = [
        { year: '2024', event: 'Company Founded', description: 'Started with a vision to transform web development' },
        { year: '2024', event: 'First 10 Clients', description: 'Reached milestone of 10 successful projects' },
        { year: '2025', event: 'Team Expansion', description: 'Grew to 15+ talented developers and designers' },
        { year: '2025', event: 'Global Reach', description: 'Expanded services to international clients' },
    ];

    const values = [
        { icon: Target, title: 'Excellence', description: 'We never compromise on quality' },
        { icon: Users, title: 'Collaboration', description: 'Your success is our success' },
        { icon: TrendingUp, title: 'Innovation', description: 'Always pushing boundaries' },
    ];

    return (
        <section id="story" className="py-16 lg:py-20 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-white" />
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/30 to-transparent" />
            
            {/* Subtle grid overlay */}

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                        {t('story.title')}
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
                </motion.div>

                {/* Main content grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20 lg:mb-24">
                    {/* Image column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative group cursor-pointer">
                            {/* Gradient border effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
                            
                            {/* Main image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Our team collaborating on a project"
                                    className="w-full h-full object-cover aspect-[4/3] transform group-hover:scale-105 transition duration-700"
                                />
                                
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Stats card overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="absolute -bottom-8 -left-4 lg:-bottom-10 lg:-left-10 bg-white rounded-xl shadow-2xl p-4 lg:p-6 max-w-[220px] lg:max-w-[260px] border border-slate-100"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 lg:p-3 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg shadow-lg">
                                    <Award className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs lg:text-sm text-slate-500 mb-0.5">Client Satisfaction</p>
                                    <p className="text-xl lg:text-2xl font-bold text-slate-900">98%</p>
                                    <p className="text-xs text-slate-500 mt-0.5">from 50+ reviews</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        {/* Founding story */}
                        <div className="space-y-5">
                            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">
                                Building the future of{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    web development
                                </span>
                            </h3>
                            
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {t('story.description')}
                            </p>
                            
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600">
                                <p className="text-slate-700 leading-relaxed italic">
                                    "Founded in 2024, <span className="font-semibold text-blue-700 not-italic">masters_dev</span> emerged from a shared vision: 
                                    to bridge the gap between complex technology and user-friendly design. We started as a small 
                                    group of passionate developers and have evolved into a full-service digital agency."
                                </p>
                            </div>

                            <p className="text-slate-600 leading-relaxed">
                                Every business, regardless of size, deserves a world-class digital presence. Our journey is defined 
                                by the businesses we've helped grow and the digital landscapes we've transformed across 15+ industries.
                            </p>
                        </div>

                        {/* Key achievements */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="text-center p-4 bg-slate-50 rounded-lg">
                                <div className="text-2xl font-bold text-slate-900 mb-1">15+</div>
                                <div className="text-xs text-slate-500">Team Members</div>
                            </div>
                            <div className="text-center p-4 bg-slate-50 rounded-lg">
                                <div className="text-2xl font-bold text-slate-900 mb-1">50+</div>
                                <div className="text-xs text-slate-500">Projects</div>
                            </div>
                            <div className="text-center p-4 bg-slate-50 rounded-lg">
                                <div className="text-2xl font-bold text-slate-900 mb-1">25+</div>
                                <div className="text-xs text-slate-500">Clients</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Company values */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-20 lg:mt-24"
                >
                    <h3 className="text-2xl font-semibold text-slate-900 text-center mb-12">
                        Built on{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                            strong foundations
                        </span>
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-6 lg:p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
                                        <value.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-slate-900">{value.title}</h4>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Timeline milestone preview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-20 lg:mt-24 pt-12 lg:pt-16 border-t border-slate-200"
                >
                    <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-slate-900 mb-2">Our journey so far</h3>
                            <p className="text-slate-500">Key milestones that shaped our story</p>
                        </div>
                        <a 
                            href="#about" 
                            className="group inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                        >
                            View full timeline 
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {milestones.map((milestone, index) => (
                            <div 
                                key={index}
                                className="p-5 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors"
                            >
                                <div className="flex items-center gap-2 text-blue-600 font-mono text-sm mb-2">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {milestone.year}
                                </div>
                                <h4 className="font-semibold text-slate-900 mb-1">{milestone.event}</h4>
                                <p className="text-sm text-slate-500">{milestone.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Story;