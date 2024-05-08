import React from 'react'
import './Hero.css'

const Hero = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className='hero-container'>
        <div className='hero-content'>
            <h2>Hi, i am Mouad Makkour</h2>
            <p>
            4th year student in Computer Science at the 
            <span> National School of Applied Sciences</span>
            </p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src='./assets/images/react-js-icon.svg' width={"70px"}/>
                </div>
                <img src='./assets/images/robot.jpg' />
            </div>
            <div>
                <div className='tech-icon'>
                    <img src='./assets/images/icons-html.svg' width={"70px"}/>
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/icons-javascript.svg' width={"70px"}/>
                </div>
                <div className='tech-icon'>
                    <img src='./assets/images/icons-css.svg' width={"70px"}/>
                </div>
            </div>
        </div>
    </section>
  )
});

export default Hero
