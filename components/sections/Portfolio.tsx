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
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'cloud', label: 'Cloud Solutions' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack React/Node.js e-commerce solution',
      category: 'web',
      image: '/portfolio/app-1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'FinTech Mobile App',
      description: 'React Native financial management application',
      category: 'mobile',
      image: '/portfolio/product-1.jpg',
      technologies: ['React Native', 'Firebase', 'Stripe'],
    },
    {
      id: 3,
      title: 'Enterprise CRM System',
      description: 'Custom Python Django CRM for enterprise clients',
      category: 'enterprise',
      image: '/portfolio/branding-1.jpg',
      technologies: ['Python', 'Django', 'PostgreSQL'],
    },
    {
      id: 4,
      title: 'AWS Cloud Migration',
      description: 'Scalable cloud infrastructure deployment',
      category: 'cloud',
      image: '/portfolio/books-1.jpg',
      technologies: ['AWS', 'Docker', 'Kubernetes'],
    },
    {
      id: 5,
      title: 'SaaS Dashboard',
      description: 'Vue.js analytics and reporting platform',
      category: 'web',
      image: '/portfolio/app-2.jpg',
      technologies: ['Vue.js', 'Chart.js', 'Express'],
    },
    {
      id: 6,
      title: 'Healthcare Mobile App',
      description: 'Flutter cross-platform health monitoring app',
      category: 'mobile',
      image: '/portfolio/product-2.jpg',
      technologies: ['Flutter', 'Firebase', 'REST API'],
    },
    {
      id: 7,
      title: 'Manufacturing ERP',
      description: 'Enterprise resource planning system',
      category: 'enterprise',
      image: '/portfolio/branding-2.jpg',
      technologies: ['Java', 'Spring Boot', 'Oracle'],
    },
    {
      id: 8,
      title: 'Kubernetes Deployment',
      description: 'Containerized microservices architecture',
      category: 'cloud',
      image: '/portfolio/books-2.jpg',
      technologies: ['Kubernetes', 'Docker', 'Jenkins'],
    },
    {
      id: 9,
      title: 'Real Estate Platform',
      description: 'Angular property management web application',
      category: 'web',
      image: '/portfolio/app-3.jpg',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
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
          <h2 className="section-heading">Our Software Development Projects</h2>
          <p className="section-description">
            Explore our diverse portfolio of successful software solutions across web, mobile, and enterprise applications
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
