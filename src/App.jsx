import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './componentes/Navbar'
import Offcanvas from './componentes/Offcanvas'
import Features from './componentes/Features'
import Hero from './componentes/Hero'
import Pricing from './componentes/Pricing'
import Faq from './componentes/Faq'
import Download from './componentes/Download'

function App() {
  const [bgColor, setBgColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get scroll position
      if (scrollPosition > 100) {
        setBgColor('rgba(0, 0, 0, 0.596)'); // Change background to lightblue after 100px
      } else {
        setBgColor('transparent'); // Reset to white if scrolled back up
      }
    };

    window.addEventListener('scroll', handleScroll); // Listen to scroll events

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener
  }, []);
  return (
    <>
      <header className='w-full fixed top-0 left-0 '
        style={{ backgroundColor: bgColor }}
      >
        <Navbar />
        <Offcanvas bgColor={bgColor} />
      </header>
      <Hero />
      <div className="outer_feature" id='section_feature'>
        <Features />
      </div>
      <div className="outer_pricing" id='section_pricing'>
        <Pricing />
      </div>
      <div className="outer_faq" id='section_faq'>
        <Faq />
      </div>
      <div className="outer_section g7" id='section_download'>
        <Download />
      </div>


    </>
  )
}

export default App
