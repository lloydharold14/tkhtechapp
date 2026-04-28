import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    { id: 'zuricards', categoryColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30', stack: ['Next.js', 'RSVP & invites', 'Host & guest hub'], accentColor: 'from-amber-500 to-orange-500' },
    { id: 'kabasika', categoryColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30', stack: ['Web platform', 'MoMo & cards', 'OHADA tax', 'AI copilot'], accentColor: 'from-blue-500 to-cyan-500' },
    { id: 'ileralive', categoryColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30', stack: ['Telehealth', 'Video & clinic', 'HIPAA-aligned', 'Local payments'], accentColor: 'from-rose-500 to-pink-500' },
    { id: 'liveit', categoryColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30', stack: ['React Native', 'Node.js', 'Firebase', 'Stripe'], accentColor: 'from-orange-500 to-amber-500' },
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
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <span className="section-subtitle">{t('portfolio.subtitle')}</span>
          <h2 className="section-heading">{t('portfolio.heading')}</h2>
          <p className="section-description">
            {t('portfolio.description')}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.accentColor}`} />

              <div className="p-8">
                {/* Category badge */}
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mb-4 ${project.categoryColor}`}>
                  {t(`portfolio.projects.${project.id}.category`)}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {t(`portfolio.projects.${project.id}.title`)}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  {t(`portfolio.projects.${project.id}.description`)}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full font-medium border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-secondary-600 mb-6 text-lg">
            {t('portfolio.ctaText')}
          </p>
          <a href="#request-project" className="btn-primary text-lg px-8 py-4">
            {t('portfolio.ctaButton')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
