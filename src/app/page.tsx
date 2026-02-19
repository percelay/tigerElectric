import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Welcome from '@/components/Welcome';
import Difference from '@/components/Difference';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Difference />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
