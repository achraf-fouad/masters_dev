import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Zap, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    const stats = [
        { icon: Code2, value: '20+', label: 'Projects', color: 'blue' },
        { icon: Zap, value: '3x', label: 'Faster Development', color: 'amber' },
        { icon: Shield, value: '100%', label: 'Satisfaction', color: 'emerald' },
    ];

    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
            <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

            {/* Gradient orbs */}
            <div className="absolute left-0 top-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute left-1/3 bottom-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
            
            {/* Content - Strictly left aligned */}
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-3xl">
                    {/* Agency identifier */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-3 text-sm uppercase tracking-wider text-blue-400/80 font-mono">
                            <span className="w-8 h-[1px] bg-blue-400/60" />
                            <span>Web Development Agency</span>
                            <span className="w-8 h-[1px] bg-blue-400/60" />
                        </div>
                    </motion.div>

                    {/* Main title with gradient */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-400">
                                masters_dev
                            </span>
                        </h1>
                    </motion.div>

                    {/* Value proposition */}
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-2xl lg:text-3xl font-light text-slate-300 mb-6 max-w-2xl"
                    >
                        {t('hero.slogan')}
                    </motion.h2>

                    {/* Detailed description */}
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl"
                    >
                        We architect and engineer digital solutions that solve complex business challenges. 
                        Our expertise spans modern web technologies, scalable architectures, and intuitive user experiences.
                    </motion.p>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="flex flex-wrap gap-4 mb-12"
                    >
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Project
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
                        >
                            View Projects
                        </a>
                        {/*<a
                            href="#process"
                            className="px-8 py-4 text-slate-300 hover:text-white font-semibold rounded-lg transition-all duration-300"
                        >
                            How we work
                        </a>*/}
                    </motion.div>

                    {/* Performance metrics */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-3 gap-6 max-w-xl"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <div className={`p-1.5 rounded-md bg-${stat.color}-500/10`}>
                                    <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
                                </div>
                                <div>
                                    <div className="text-lg font-semibold">{stat.value}</div>
                                    <div className="text-xs text-slate-500">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Subtle scroll indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;