import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import {
  CubeTransparentIcon,
  BoltIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    { icon: CubeTransparentIcon, key: 'customSaaS', color: 'bg-orange-500', gradient: 'from-orange-500 to-amber-500' },
    { icon: BoltIcon, key: 'mvp', color: 'bg-amber-500', gradient: 'from-amber-500 to-yellow-500' },
    { icon: PaintBrushIcon, key: 'productDesign', color: 'bg-rose-500', gradient: 'from-rose-500 to-orange-500' },
    { icon: WrenchScrewdriverIcon, key: 'support', color: 'bg-red-500', gradient: 'from-red-500 to-rose-500' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <span className="section-subtitle">{t('services.subtitle')}</span>
          <h2 className="section-heading text-white">{t('services.heading')}</h2>
          <p className="section-description text-gray-400">
            {t('services.description')}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.key}
              variants={item}
              className="group relative bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                {t(`services.items.${service.key}.title`)}
              </h3>

              <p className="text-gray-400 leading-relaxed mb-6">
                {t(`services.items.${service.key}.description`)}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {(t(`services.items.${service.key}.highlights`, { returnObjects: true }) as string[]).map((highlight) => (
                  <li key={highlight} className="flex items-center text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Hover gradient border effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
