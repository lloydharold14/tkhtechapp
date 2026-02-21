import Layout from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import HowItWorks from '@/components/sections/HowItWorks';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import RequestProject from '@/components/sections/RequestProject';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <Portfolio />
      <RequestProject />
      <Contact />
    </Layout>
  );
}
