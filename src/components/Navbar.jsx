import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        document.dir = lang === 'ar' ? 'rtl' : 'ltr';
        setLangOpen(false);
    };

    const navLinks = [
        { name: t('story.title'), href: '#story' },
        { name: t('about.title'), href: '#about' },
        { name: t('projects.title'), href: '#projects' }, // New Link
        { name: t('services.title'), href: '#services' },
        { name: t('contact.title'), href: '#contact' },
    ];

    const languages = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    masters_dev
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-slate-300 hover:text-white transition-colors font-medium text-sm tracking-wide">
                            {link.name}
                        </a>
                    ))}

                    {/* Language Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setLangOpen(!langOpen)}
                            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors bg-white/5 px-3 py-1.5 rounded-full border border-white/10"
                        >
                            <Globe size={16} />
                            <span className="uppercase font-bold text-xs">{i18n.language}</span>
                            <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {langOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full mt-2 right-0 w-32 bg-slate-800 border border-slate-700 rounded-xl shadow-xl overflow-hidden"
                                >
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`w-full text-left px-4 py-3 text-sm flex items-center gap-2 hover:bg-slate-700 transition-colors ${i18n.language === lang.code ? 'text-primary font-bold' : 'text-slate-300'}`}
                                        >
                                            <span>{lang.flag}</span>
                                            {lang.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a href="#form" className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/25 text-sm">
                        {t('hero.cta')}
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-300 font-medium hover:text-white">
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-2 justify-center py-4 border-t border-slate-800 mt-2">
                                {languages.map((lang) => (
                                    <button key={lang.code} onClick={() => changeLanguage(lang.code)} className={`px-3 py-1 rounded bg-slate-800 border border-slate-700 ${i18n.language === lang.code ? 'border-primary text-primary' : 'text-slate-400'}`}>
                                        {lang.code.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                            <a href="#form" onClick={() => setIsOpen(false)} className="bg-primary text-white text-center py-3 rounded-lg font-medium">
                                {t('hero.cta')}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
