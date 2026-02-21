import Link from 'next/link';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Custom SaaS Development', href: '#services' },
    { name: 'MVP Prototyping', href: '#services' },
    { name: 'Product Design', href: '#services' },
    { name: 'Ongoing Support', href: '#services' },
  ];

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
    },
    {
      name: 'GitHub',
      href: '#',
      icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
    },
  ];

  return (
    <footer className="bg-secondary-800 text-white">
      {/* CTA Banner */}
      <div className="bg-orange-500 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Ready to build your SaaS?</h4>
              <p className="text-orange-100">
                Submit your project idea and we'll get back to you within 24 hours.
              </p>
            </div>
            <Link
              href="#request-project"
              className="px-8 py-4 bg-white text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition-colors duration-300 whitespace-nowrap"
            >
              Request a Project
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <h3 className="text-2xl font-bold gradient-text">TKH TECH</h3>
            </Link>
            <p className="text-secondary-300 text-sm mb-4 leading-relaxed">
              Your on-demand software group. We build the SaaS you need — custom, fast, and production-ready.
            </p>
            <div className="space-y-1 text-secondary-300 text-sm">
              <p>777 Boulevard Le Corbusier</p>
              <p>Montreal, QC, Canada</p>
              <p className="mt-3"><strong className="text-white">Phone:</strong> +1 (438) 887-1040</p>
              <p><strong className="text-white">Email:</strong> info@tkhtech.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center text-sm"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 flex items-center text-sm"
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
            <p className="text-secondary-300 mb-6 text-sm">
              Stay connected with TKH TECH for the latest in SaaS development and tech innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-secondary-700 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5 text-secondary-300 group-hover:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} <strong className="text-white">TKH TECH Inc.</strong> All Rights Reserved
            </p>
            <p className="text-secondary-400 text-sm">
              Built by TKH TECH Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
