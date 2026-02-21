import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { setStoredLocale, type SupportedLocale } from '@/lib/i18n';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = (locale: SupportedLocale) => {
    i18n.changeLanguage(locale);
    setStoredLocale(locale);
    setIsLangMenuOpen(false);
  };

  const navItems = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'howItWorks', href: '#how-it-works' },
    { key: 'services', href: '#services' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className={`text-2xl md:text-3xl font-bold gradient-text`}>
              TKH TECH
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`font-nav font-medium transition-colors duration-300 text-sm ${
                  isScrolled
                    ? 'text-secondary-700 hover:text-primary-500'
                    : 'text-white/90 hover:text-orange-400'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors duration-300 text-sm font-medium ${
                  isScrolled
                    ? 'text-secondary-700 hover:text-primary-500 hover:bg-primary-50'
                    : 'text-white/90 hover:text-orange-400 hover:bg-white/10'
                }`}
                aria-label="Switch language"
              >
                <GlobeAltIcon className="w-5 h-5" />
                <span>{i18n.language === 'fr' ? 'FR' : 'EN'}</span>
              </button>
              {isLangMenuOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsLangMenuOpen(false)} aria-hidden="true" />
                  <div className="absolute right-0 mt-1 py-1 w-24 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                    <button
                      onClick={() => toggleLanguage('en')}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 rounded-t-lg ${i18n.language === 'en' ? 'text-orange-500 font-medium' : 'text-secondary-700'}`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => toggleLanguage('fr')}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 rounded-b-lg ${i18n.language === 'fr' ? 'text-orange-500 font-medium' : 'text-secondary-700'}`}
                    >
                      Français
                    </button>
                  </div>
                </>
              )}
            </div>
            <Link href="#request-project" className="btn-primary text-sm px-5 py-2.5">
              {t('nav.requestProject')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? 'text-secondary-700 hover:text-primary-500 hover:bg-primary-50'
                : 'text-white hover:text-orange-400'
            }`}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 border-t border-gray-200 bg-white"
          >
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-secondary-700 hover:text-primary-500 font-nav font-medium transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${i18n.language === 'en' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-secondary-700'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => toggleLanguage('fr')}
                  className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium ${i18n.language === 'fr' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-secondary-700'}`}
                >
                  FR
                </button>
              </div>
              <Link
                href="#request-project"
                className="btn-primary justify-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.requestProject')}
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
