import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import { motion } from 'framer-motion';

// Featured Services Component
const FeaturedServices = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and technologies for optimal performance and user experience',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and DevOps solutions to optimize your application deployment and management',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="service-card group text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-6 text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-4">
                {service.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Call to Action Component
const CallToAction = () => {
  return (
    <section className="section-padding bg-orange-500 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>
                      <p className="text-xl mb-8 text-orange-100">
            Transform your ideas into powerful software solutions. Let TKH TECH Inc. help you build 
            the technology that will drive your business forward. Contact us today for a free consultation.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-orange-500 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Get Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedServices />
      <About />
      <Services />
      <Portfolio />
      <CallToAction />
      <Contact />
    </Layout>
  );
}
