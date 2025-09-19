import Header from '@/components/header';
import Hero from '@/components/hero';
import ServicesOverview from '@/components/services-overview';
import About from '@/components/about';
import DetailedServices from '@/components/detailed-services';
import Benefits from '@/components/benefits';
import FAQ from '@/components/faq';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <ServicesOverview />
      <About />
      <DetailedServices />
      <Benefits />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
