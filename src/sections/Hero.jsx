import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-white">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-secondary-foreground mb-4 font-semibold tracking-wide text-blue-400 uppercase text-sm">
                        Web Development Agency
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        masters_dev
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        {t('hero.slogan')}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <a
                            href="#form"
                            className="group bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2"
                        >
                            {t('hero.cta')}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#services"
                            className="bg-transparent border border-slate-600 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
                        >
                            {t('services.title')}
                        </a>
                    </div>
                </motion.div>

                {/* Floating Icons Animation */}
                <div className="absolute top-1/2 left-10 hidden lg:block text-blue-500/20 animate-bounce delay-100">
                    <Code size={48} />
                </div>
                <div className="absolute top-1/3 right-10 hidden lg:block text-purple-500/20 animate-bounce delay-700">
                    <Database size={48} />
                </div>
                <div className="absolute bottom-1/4 left-1/4 hidden lg:block text-emerald-500/20 animate-bounce delay-300">
                    <Layout size={48} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
