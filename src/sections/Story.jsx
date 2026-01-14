import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const Story = () => {
    const { t } = useTranslation();

    return (
        <section id="story" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Our Story"
                                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-blue-100 rounded-lg text-primary">
                                <Rocket size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('story.title')}</h2>
                        </div>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            {t('story.description')}
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Founded in 2024, <span className="font-semibold text-primary">masters_dev</span> emerged from a shared vision: to bridge the gap between complex technology and user-friendly design. We started as a small group of passionate developers and have evolved into a full-service digital agency. We believe that every business, regardless of size, deserves a world-class digital presence. Our journey is defined by the businesses we've helped grow and the digital landscapes we've transformed.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Story;
