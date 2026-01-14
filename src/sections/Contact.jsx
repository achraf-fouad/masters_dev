import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">{t('contact.title')}</h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-12">

                    <div className="flex flex-col items-center group">
                        <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{t('contact.email')}</h3>
                        <a href="mailto:contact@mastersdev.com" className="text-slate-600 hover:text-primary transition-colors">
                            contact@mastersdev.com
                        </a>
                    </div>

                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold mb-6">{t('contact.follow')}</h3>
                        <div className="flex gap-6">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/masters_dev/" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Linkedin, href: "#" },
                                { Icon: Facebook, href: "#" }
                            ].map((item, i) => (
                                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-100 hover:bg-primary hover:text-white text-slate-600 rounded-full flex items-center justify-center transition-all duration-300">
                                    <item.Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
