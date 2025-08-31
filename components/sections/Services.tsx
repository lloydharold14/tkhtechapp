import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CubeIcon,
  LinkIcon,
  PaintBrushIcon,
} from '@heroicons/react/24/outline';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'Native iOS Development',
      description: 'High-performance iOS apps built with Swift and SwiftUI, optimized for all Apple devices with seamless App Store integration.',
      color: 'bg-orange-500',
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Native Android Development',
      description: 'Modern Android applications using Kotlin and Jetpack Compose, delivering smooth performance across all Android devices.',
      color: 'bg-amber-500',
    },
    {
      icon: CloudIcon,
      title: 'Mobile Backend & APIs',
      description: 'Scalable cloud backends with Firebase, AWS, and Node.js to power your mobile apps with real-time data and authentication.',
      color: 'bg-yellow-500',
    },
    {
      icon: CubeIcon,
      title: 'App Store Optimization',
      description: 'Complete App Store and Google Play deployment, including ASO strategies to maximize visibility and downloads.',
      color: 'bg-red-500',
    },
    {
      icon: LinkIcon,
      title: 'Third-party Integrations',
      description: 'Seamless integration with payment gateways, social media APIs, mapping services, and enterprise systems.',
      color: 'bg-rose-500',
    },
    {
      icon: PaintBrushIcon,
      title: 'Mobile UI/UX Design',
      description: 'User-centric mobile design following iOS Human Interface Guidelines and Material Design principles for optimal user experience.',
      color: 'bg-orange-600',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="section-title"
        >
          <motion.div variants={item}>
                    <span className="section-subtitle">Services</span>
        <h2 className="section-heading">Native Mobile App Development Services</h2>
        <p className="section-description">
          Specialized mobile solutions that deliver exceptional user experiences and drive business growth
        </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              className="service-card group"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-800 group-hover:text-primary-500 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-secondary-600 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="text-primary-500 hover:text-primary-600 font-medium transition-colors duration-300 flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
