import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Difference from '@/components/Difference';
import Welcome from '@/components/Welcome';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Difference />
        <Welcome />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
