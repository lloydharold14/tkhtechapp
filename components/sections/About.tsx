import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { CpuChipIcon, BoltIcon, ShieldCheckIcon, UsersIcon } from '@heroicons/react/24/outline';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pillars = [
    {
      icon: CpuChipIcon,
      title: 'Demand-Driven',
      description: "We only build what you actually need — no bloat, no one-size-fits-all templates.",
    },
    {
      icon: BoltIcon,
      title: 'Fast Execution',
      description: 'From scoping call to production-ready MVP, we move with speed and precision.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Production Quality',
      description: 'Every product we ship is built to scale — secure, tested, and maintainable.',
    },
    {
      icon: UsersIcon,
      title: 'Client Partnership',
      description: "You're involved at every step. We build with you, not just for you.",
    },
  ];

  const principles = [
    'We translate complex business requirements into elegant software solutions',
    'Every product is custom-architected for your specific use case and growth trajectory',
    'We leverage cloud-native infrastructure so your SaaS scales from day one',
    'Transparent communication and iterative delivery keep you in control throughout',
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
          <span className="section-subtitle">About TKH TECH Inc.</span>
          <h2 className="section-heading">Your On-Demand Software Group</h2>
          <p className="section-description">
            We are a specialized software group that builds tailored SaaS products based on exactly what clients need — 
            nothing more, nothing less.
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
              We don't sell software. We build yours.
            </h3>

            <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
              TKH TECH Inc. is a Montreal-based software group with a singular mission: to help businesses 
              bring their software ideas to life. We specialize in building custom SaaS applications on demand, 
              designed around each client's unique workflow, industry, and growth goals.
            </p>

            <p className="text-secondary-600 mb-8 leading-relaxed">
              Our approach is straightforward — you come to us with a problem or an idea, we scope it, design it, 
              and deliver a production-grade product. No cookie-cutter solutions. No unnecessary complexity. Just 
              focused, high-quality software that works exactly the way your business needs it to.
            </p>

            <ul className="space-y-4">
              {principles.map((principle, index) => (
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
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-secondary-800 mb-2">{pillar.title}</h4>
                <p className="text-secondary-600 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
