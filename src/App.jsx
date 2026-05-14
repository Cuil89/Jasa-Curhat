import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { MoodLab } from './components/MoodLab';
import { Navbar } from './components/Navbar';
import { Packages } from './components/Packages';
import { Rhythm } from './components/Rhythm';
import { Services } from './components/Services';
import { StatStrip } from './components/StatStrip';
import { Testimonials } from './components/Testimonials';
import { useHashScroll } from './hooks/useHashScroll';

export default function App() {
  useHashScroll();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <StatStrip />
        <Services />
        <MoodLab />
        <Packages />
        <Rhythm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
