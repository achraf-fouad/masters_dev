import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, Zap, DollarSign } from 'lucide-react';

const About = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Award size={32} />,
            title: "Premium Quality",
            desc: "Top-tier code standards and pixel-perfect design in every project."
        },
        {
            icon: <Zap size={32} />,
            title: "Modern Design",
            desc: "Stay ahead with the latest UI/UX trends and responsive interfaces."
        },
        {
            icon: <DollarSign size={32} />,
            title: "Affordable Pricing",
            desc: "Competitive rates without compromising on excellence."
        }
    ];

    return (
        <section id="about" className="py-20 bg-slate-50">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('about.title')}</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-16">
                        We are more than just developers; we are your partners in digital success. Our commitment to quality and innovation ensures your business stands out.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-slate-100"
                        >
                            <div className="w-16 h-16 mx-auto bg-blue-50 text-primary rounded-full flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
