import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const usefulLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Terms of service', href: '#' },
  ];

  const services = [
    { name: 'Web Design', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'Cloud Solutions', href: '#services' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'Facebook', href: '#', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
    { name: 'Instagram', href: '#', icon: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01' },
    { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
  ];

  return (
    <footer className="bg-secondary-800 text-white">
      {/* Newsletter Section */}
      <div className="bg-secondary-700 py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-2xl font-bold mb-4">Join Our Newsletter</h4>
            <p className="text-secondary-300 mb-8">
              Subscribe to our newsletter and receive the latest news about our software development services and tech insights!
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-secondary-800 placeholder-secondary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold gradient-text">TKH TECH</h3>
            </Link>
            <div className="space-y-2 text-secondary-300">
              <p>777 Boulevard Le Corbusier</p>
              <p>Montreal, QC, Canada</p>
              <p className="mt-4">
                <strong>Phone:</strong> +1 (438) 887-1040
              </p>
              <p>
                <strong>Email:</strong> info@tkhtech.com
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <p className="text-secondary-300 mb-6">
              Stay connected with TKH TECH for the latest in software development and technology innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-secondary-700 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <svg
                    className="w-5 h-5 text-secondary-300 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={social.icon}
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-700 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-center md:text-left">
              © <span>Copyright</span>{' '}
              <strong className="text-white">TKH TECH</strong>{' '}
              <span>All Rights Reserved</span>
            </p>
            <div className="text-secondary-400 text-sm mt-4 md:mt-0">
              Designed with ❤️ by TKH TECH Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
