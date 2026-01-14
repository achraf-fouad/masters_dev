import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Palette, Code2, ShoppingBag, Briefcase } from 'lucide-react';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            id: 'web_design',
            icon: <Palette size={40} />,
            title: t('services.web_design'),
            desc: "Stunning, user-centric designs that captivate your audience and elevate your brand identity."
        },
        {
            id: 'web_dev',
            icon: <Code2 size={40} />,
            title: t('services.web_dev'),
            desc: "Robust, scalable, and high-performance websites built with the latest technologies like React and Next.js."
        },
        {
            id: 'ecommerce',
            icon: <ShoppingBag size={40} />,
            title: t('services.ecommerce'),
            desc: "Complete online store solutions to help you sell products effortlessly and grow your revenue."
        },
        {
            id: 'business',
            icon: <Briefcase size={40} />,
            title: t('services.business'),
            desc: "Tailored professional websites for restaurants, startups, and local businesses to establish a strong digital presence."
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('services.title')}</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 bg-slate-50 hover:bg-white rounded-2xl transition-all duration-300 hover:shadow-xl border border-transparent hover:border-slate-100"
                        >
                            <div className="p-4 bg-white text-primary rounded-xl inline-block mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary group-hover:text-white">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
