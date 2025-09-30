import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ThemeContextProvider from './Context/ThemeContext';
import { Toaster } from 'react-hot-toast';
import { useEffect, useRef } from 'react';

const App = () => {
  const outlineRef = useRef(null);
  const dotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMuseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener('mousemove', handleMuseMove);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef && outlineRef) {
        dotRef.current.style.transform = `translate(${mouse.current.x - 6}px,${
          mouse.current.y - 6
        }px)`;
        outlineRef.current.style.transform = `translate(${
          position.current.x - 20
        }px,${position.current.y - 20}px)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener('mousemove', handleMuseMove);
    };
  }, []);

  return (
    <ThemeContextProvider>
      <Toaster />
      <div className="dark:bg-black relative">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Services />
        <OurWork />
        <Teams />
        <ContactUs />
        <Footer />

        {/* outline cursor ring */}
        <div
          ref={outlineRef}
          className="fixed top-0 left-0 h-10 w-10 rounded-full border border-gray-600 pointer-events-none z-[9999]"
          style={{ transition: 'transform 0.1s ease-out' }}
        ></div>

        {/* dot cursor */}
        <div
          ref={dotRef}
          className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
        ></div>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
