import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { LightBulbIcon, PencilSquareIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    { number: '01', icon: LightBulbIcon, key: 'step1' },
    { number: '02', icon: PencilSquareIcon, key: 'step2' },
    { number: '03', icon: RocketLaunchIcon, key: 'step3' },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <span className="section-subtitle">{t('howItWorks.subtitle')}</span>
          <h2 className="section-heading">{t('howItWorks.heading')}</h2>
          <p className="section-description">
            {t('howItWorks.description')}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent" style={{ top: '4rem' }} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 60 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number + icon */}
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 z-10 relative">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-500 font-bold text-xs">
                      {index + 1}
                    </span>
                  </div>

                  <div className="text-6xl font-black text-orange-100 select-none leading-none mb-2">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-secondary-800 mb-4">
                    {t(`howItWorks.steps.${step.key}.title`)}
                  </h3>

                  <p className="text-secondary-600 leading-relaxed mb-6 max-w-xs">
                    {t(`howItWorks.steps.${step.key}.description`)}
                  </p>

                  {/* Detail bullets */}
                  <ul className="space-y-2 text-left w-full max-w-xs">
                    {(t(`howItWorks.steps.${step.key}.details`, { returnObjects: true }) as string[]).map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-secondary-600">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 p-10 bg-white rounded-3xl shadow-sm border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-secondary-800 mb-4">
            {t('howItWorks.ctaTitle')}
          </h3>
          <p className="text-secondary-600 mb-8 max-w-xl mx-auto">
            {t('howItWorks.ctaDescription')}
          </p>
          <a href="#request-project" className="btn-primary text-lg px-8 py-4">
            {t('howItWorks.ctaButton')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
