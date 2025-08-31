import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { MagnifyingGlassIcon, LinkIcon } from '@heroicons/react/24/outline';

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('*');

  const filters = [
    { id: '*', label: 'All' },
    { id: 'ios', label: 'iOS Apps' },
    { id: 'android', label: 'Android Apps' },
    { id: 'saas', label: 'SaaS Apps' },
    { id: 'enterprise', label: 'Enterprise' },
  ];

  const projects = [
    {
      id: 1,
      title: 'LiveIt Event App',
      description: 'Native mobile app for discovering and managing local events',
      category: 'ios',
      image: '/portfolio/app-1.jpg',
      technologies: ['Swift', 'SwiftUI', 'Firebase'],
    },
    {
      id: 2,
      title: 'LiveIt Event App',
      description: 'Native Android version with real-time event updates',
      category: 'android',
      image: '/portfolio/app-2.jpg',
      technologies: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    },
    {
      id: 3,
      title: 'School Management SaaS',
      description: 'Comprehensive school administration mobile platform',
      category: 'saas',
      image: '/portfolio/branding-1.jpg',
      technologies: ['React Native', 'Node.js', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'Electronic Health Record SaaS',
      description: 'HIPAA-compliant mobile health records management',
      category: 'saas',
      image: '/portfolio/product-1.jpg',
      technologies: ['Swift', 'Kotlin', 'AWS Health'],
    },
    {
      id: 5,
      title: 'School Management iOS',
      description: 'Native iOS app for teachers and administrators',
      category: 'ios',
      image: '/portfolio/branding-2.jpg',
      technologies: ['Swift', 'Core Data', 'CloudKit'],
    },
    {
      id: 6,
      title: 'School Management Android',
      description: 'Native Android app with offline-first architecture',
      category: 'android',
      image: '/portfolio/branding-3.jpg',
      technologies: ['Kotlin', 'Room DB', 'Work Manager'],
    },
    {
      id: 7,
      title: 'EHR Mobile Dashboard',
      description: 'Real-time patient monitoring and data visualization',
      category: 'enterprise',
      image: '/portfolio/product-2.jpg',
      technologies: ['Flutter', 'GraphQL', 'HL7 FHIR'],
    },
    {
      id: 8,
      title: 'Event Analytics Platform',
      description: 'Mobile analytics dashboard for event organizers',
      category: 'enterprise',
      image: '/portfolio/app-3.jpg',
      technologies: ['React Native', 'Chart.js', 'AWS Lambda'],
    },
    {
      id: 9,
      title: 'Healthcare Provider Portal',
      description: 'Native mobile app for healthcare professionals',
      category: 'ios',
      image: '/portfolio/product-3.jpg',
      technologies: ['SwiftUI', 'HealthKit', 'Core ML'],
    },
  ];

  const filteredProjects = activeFilter === '*' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
                  <span className="section-subtitle">Portfolio</span>
        <h2 className="section-heading">Our Native Mobile App Projects</h2>
        <p className="section-description">
          Discover our portfolio of successful native mobile applications that have transformed businesses and delighted users
        </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-500 shadow-sm'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="portfolio-card group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-primary-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
                        <MagnifyingGlassIcon className="w-6 h-6 text-white" />
                      </button>
                      <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors duration-300">
                        <LinkIcon className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-800 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-50 text-primary-600 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
