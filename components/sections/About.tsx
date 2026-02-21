import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { CpuChipIcon, BoltIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/24/outline';

const About = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pillars = [
    { icon: CpuChipIcon, key: 'demandDriven' },
    { icon: BoltIcon, key: 'fastExecution' },
    { icon: ShieldCheckIcon, key: 'productionQuality' },
    { icon: UsersIcon, key: 'clientPartnership' },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <span className="section-subtitle">{t('about.subtitle')}</span>
          <h2 className="section-heading">{t('about.heading')}</h2>
          <p className="section-description">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — Mission text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-secondary-800 mb-6">
              {t('about.missionTitle')}
            </h3>

            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              {t('about.missionP1')}
            </p>

            <p className="text-secondary-600 mb-8 leading-relaxed">
              {t('about.missionP2')}
            </p>

            <ul className="space-y-4">
              {(t('about.principles', { returnObjects: true }) as string[]).map((principle, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircleIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-secondary-700">{principle}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-secondary-800 mb-2">{t(`about.pillars.${pillar.key}.title`)}</h4>
                <p className="text-secondary-600 text-sm leading-relaxed">{t(`about.pillars.${pillar.key}.description`)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
