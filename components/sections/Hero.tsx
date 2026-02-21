import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { RocketLaunchIcon, EyeIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden pt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber-400/20 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse" />
            {t('hero.badge')}
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
          >
            {t('hero.headline')}{' '}
            <span className="gradient-text">{t('hero.headlineHighlight')}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            {t('hero.subheadline')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#request-project"
              className="btn-primary flex items-center justify-center text-lg px-8 py-4"
            >
              <RocketLaunchIcon className="w-5 h-5 mr-2" />
              {t('hero.ctaRequest')}
            </Link>

            <Link
              href="#portfolio"
              className="btn-outline flex items-center justify-center text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10"
            >
              <EyeIcon className="w-5 h-5 mr-2" />
              {t('hero.ctaWork')}
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/10 max-w-2xl mx-auto"
          >
            {[
              { numberKey: 'productsShipped', labelKey: 'productsShipped' },
              { numberKey: 'customBuilt', labelKey: 'customBuilt' },
              { numberKey: 'saasDevelopment', labelKey: 'saasDevelopment' },
            ].map((stat) => (
              <div key={stat.labelKey} className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">{t(`hero.statNumbers.${stat.numberKey}`)}</div>
                <div className="text-gray-400 text-sm">{t(`hero.stats.${stat.labelKey}`)}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-orange-500/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-orange-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
