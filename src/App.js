import React, { useRef } from 'react';
import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <NavBar 
        heroRef={heroRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className='container'>
        <Hero ref={heroRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <ContactMe ref={contactRef} />
      </div>
    </>
  );
}

export default App;
