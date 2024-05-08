import React, { useState } from 'react';
import './NavBar.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MobileNav from './MobileNav/MobileNav';

const NavBar = ({ heroRef, skillsRef, projectsRef, contactRef }) => {
  const [openMenu,setOpenMenu] = useState(false);

  const toggleMenu = () =>{
    setOpenMenu(!openMenu);
  }

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const downloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'MAKKOUR-Mouad.pdf'; 
    anchor.click();
  };

  return (
    <>
      <MobileNav isOpen={openMenu} 
                toggleMenu={toggleMenu}
                heroRef={heroRef}
                skillsRef={skillsRef}
                projectsRef={projectsRef}
                contactRef={contactRef}
                scrollToRef={scrollToRef}
                downloadResume={downloadResume}/>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src='./assets/images/backend-icon.png'  />
            <ul>
                <li>
                    <a className='menu-item' onClick={() => scrollToRef(heroRef)}>Home</a>
                </li>
                <li>
                    <a className='menu-item' onClick={() => scrollToRef(skillsRef)}>Skills</a>
                </li>
                <li>
                    <a className='menu-item' onClick={() => scrollToRef(projectsRef)}>Projects</a>
                </li>
                <li>
                    <a className='menu-item' onClick={() => scrollToRef(contactRef)}>Contact Me</a>
                </li>
                <button className='contact-btn' onClick={downloadResume}>Download Resume</button>
            </ul>
            <button className='menu-btn' onClick={toggleMenu}>
            {openMenu ? (
                <CloseIcon style={{ fontSize: '1.8rem' }} />
            ) : (
                <MenuOutlinedIcon style={{ fontSize: '1.8rem' }} />
            )}
            </button>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
