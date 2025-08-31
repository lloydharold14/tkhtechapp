import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-amber-50 pt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="gradient-text">Innovative Software Solutions</span>
              <br />
              <span className="text-secondary-800">for the Digital Age</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-secondary-600 mb-8 leading-relaxed"
            >
              Specializing in native mobile app development for iOS and Android, powered by robust cloud infrastructure and backend solutions. 
              We create high-performance mobile experiences that engage users and drive business success.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#about" className="btn-primary">
                Start Your Project
              </Link>
              
              <Link
                href="#portfolio"
                className="btn-outline flex items-center"
              >
                <CodeBracketIcon className="w-5 h-5 mr-2" />
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <Image
                  src="/hero-img.png"
                  alt="TKH TECH Software Development"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-10 left-10 w-16 h-16 bg-orange-500/20 rounded-full blur-xl"
              />
              
              <motion.div
                animate={{ 
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-20 right-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
