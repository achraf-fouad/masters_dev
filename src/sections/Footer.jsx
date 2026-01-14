import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="text-2xl font-bold text-white mb-2">masters_dev</div>
                        <p className="max-w-xs text-sm">Empowering your digital future with modern web solutions.</p>
                    </div>

                    <div className="text-center md:text-right">
                        <div className="flex gap-6 mb-4 justify-center md:justify-end">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                        <p className="text-sm">{t('footer.copyright')}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
