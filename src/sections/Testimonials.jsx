import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Ahmed Benali",
            role: "CEO, TechStart",
            content: t('testimonials.review1') || "The team at masters_dev transformed our digital presence. Their attention to detail and modern design approach is unmatched.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Sarah Miller",
            role: "Owner, Miller's Bakery",
            content: t('testimonials.review2') || "Incredible professionalism! They delivered our e-commerce site ahead of schedule and it looks absolutely stunning.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Karim Idrissi",
            role: "Founder, K-Solutions",
            content: t('testimonials.review3') || "The best investment we made this year. Our conversion rates doubled after the redesign. Highly recommended!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-24 relative">
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-3xl z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t('testimonials.title') || "What Our Clients Say"}
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                        <Quote className="text-primary/20 absolute top-8 left-8" size={64} />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="text-center relative z-10"
                            >
                                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-primary mb-6 shadow-lg">
                                    <img src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].name} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex justify-center gap-1 mb-6 text-amber-400">
                                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                        <Star key={i} size={20} fill="currentColor" />
                                    ))}
                                </div>

                                <p className="text-xl md:text-2xl text-slate-200 italic mb-8 leading-relaxed">
                                    "{testimonials[activeIndex].content}"
                                </p>

                                <div>
                                    <h4 className="text-lg font-bold text-white">{testimonials[activeIndex].name}</h4>
                                    <p className="text-primary text-sm">{testimonials[activeIndex].role}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 md:-mx-12">
                            <button onClick={prevTestimonial} className="w-12 h-12 rounded-full bg-slate-800/80 hover:bg-primary text-white flex items-center justify-center transition-all shadow-lg backdrop-blur-md">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={nextTestimonial} className="w-12 h-12 rounded-full bg-slate-800/80 hover:bg-primary text-white flex items-center justify-center transition-all shadow-lg backdrop-blur-md">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-primary w-8' : 'bg-slate-600'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
