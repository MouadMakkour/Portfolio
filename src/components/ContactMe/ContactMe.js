import React from 'react'
import './ContactMe.css'

const ContactMe = React.forwardRef((props, ref) => {
        const redirectToGitHub = () => {
          window.open('https://github.com/MouadMakkour', '_blank');
        };

        const redirectToLinkedIn = () => {
          window.open('https://www.linkedin.com/in/mouad-makkour-a7a99a261', '_blank');
          };
        const redirectToInsta = () => {
          window.open('https://www.instagram.com/mouadmakkour', '_blank');
          };
        return (
            <section ref={ref} className='contact-container'>
                <h5>Contact Me</h5>
                <div className='contact-content'>
                    <div>
                        <img src='./assets/images/github.svg' onClick={redirectToGitHub} />
                    </div>
                    <div>
                    <img src='./assets/images/linkedin.svg' onClick={redirectToLinkedIn} />
                    </div>
                    <div>
                    <img src='./assets/images/instagram.svg' onClick={redirectToInsta} />
                    </div>

                </div>
            </section>
        )
});

export default ContactMe
