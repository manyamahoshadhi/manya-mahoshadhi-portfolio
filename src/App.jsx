import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Publications />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
