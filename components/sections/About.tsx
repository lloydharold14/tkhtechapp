import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    'Native iOS apps built with Swift and SwiftUI for optimal performance',
    'Native Android apps developed with Kotlin and Jetpack Compose',
    'Cloud backend infrastructure using AWS, Firebase, and Node.js',
    'Real-time features, push notifications, and offline-first architecture',
  ];

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          <span className="section-subtitle">About TKH TECH Inc.</span>
          <h2 className="section-heading">About</h2>
          <p className="section-description">
            Leading software development company delivering innovative digital solutions that transform businesses and empower growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about.png"
                alt="About TKH TECH"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              
              {/* Play Button Overlay - Optional */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                >
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[18px] border-l-primary-500 border-b-[12px] border-b-transparent ml-1"></div>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-secondary-800 mb-6">
              Crafting exceptional native mobile experiences that users love and businesses rely on.
            </h3>
            
            <p className="text-lg text-secondary-600 mb-8 italic">
              TKH TECH Inc. specializes in native mobile app development, creating powerful iOS and Android applications that deliver 
              seamless user experiences. Based in Montreal, our team combines mobile expertise with cloud infrastructure knowledge 
              to build apps that scale from prototype to millions of users.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircleIcon className="w-6 h-6 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-secondary-700">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <p className="text-secondary-600 mb-8">
              Our approach combines agile methodology with cutting-edge technology to deliver solutions that scale. 
              From healthcare systems to event management platforms, we've built software that serves thousands of users 
              while maintaining the highest standards of security and performance.
            </p>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">
                {stat.number}
              </div>
              <div className="text-secondary-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
