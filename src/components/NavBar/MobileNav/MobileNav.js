import React from 'react'
import './MobileNav.css'

const MobileNav = ({isOpen,toggleMenu,heroRef, skillsRef, projectsRef, contactRef,scrollToRef,downloadResume}) => {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "active":""}`}
      onClick={toggleMenu}>
        <div className='mobile-menu-container'>
            <img className='logo' src='./assets/images/backend-icon.png'/>
            <ul>
                <li>
                    <a className='menu-item' onClick={() => scrollToRef(heroRef)} >Home</a>
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
        </div>

      </div>
    </>
  )
}

export default MobileNav
