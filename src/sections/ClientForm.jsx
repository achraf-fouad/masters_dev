import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const ClientForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        businessName: '',
        businessType: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { error } = await supabase
                .from('orders')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        business_name: formData.businessName,
                        business_type: formData.businessType,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            alert(t('form.success_message') || 'Thank you! We will get back to you soon.');
            setFormData({ name: '', email: '', businessName: '', businessType: '', message: '' });
        } catch (error) {
            console.error('Error submitting form:', error.message);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <section id="form" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('form.title')}</h2>
                        <p className="text-slate-300">Tell us about your project and let's create something amazing together.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg p-8 md:p-10 rounded-3xl shadow-2xl border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">{t('form.name')}</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">{t('form.email')}</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">{t('form.business_name')}</label>
                                <input
                                    type="text"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="Your Business"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">{t('form.type')}</label>
                                <select
                                    name="businessType"
                                    value={formData.businessType}
                                    onChange={handleChange}
                                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                >
                                    <option value="" disabled className="bg-slate-800">Select option</option>
                                    <option value="Startup" className="bg-slate-800">Startup</option>
                                    <option value="Small Business" className="bg-slate-800">Small Business</option>
                                    <option value="E-commerce" className="bg-slate-800">E-commerce</option>
                                    <option value="Enterprise" className="bg-slate-800">Enterprise</option>
                                    <option value="Other" className="bg-slate-800">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-slate-300 mb-2">{t('form.message')}</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                placeholder="Tell us more about your needs..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            <Send size={20} />
                            {t('form.submit')}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ClientForm;
