import React from 'react';
import Title from '../title/Title';
import calender from '../../assets/calendar.png';
import github from '../../assets/social/github.png';
import linkedin from '../../assets/social/linkedin.png';
import instagram from '../../assets/social/instagram.png';
import twitter from '../../assets/social/twitter.png';
import con1 from '../../assets/social/con1.png';
import con2 from '../../assets/social/con2.png';
import con3 from '../../assets/social/con3.png';
import './contact.css';

const Contact = () => {
  return (
    <>
    <Title title="Contact"/>
    <div className="contact">
      <div className='contact_email_area section'>
        <h3>Email:</h3>
        <div className="emailBox">
          <p>trishaDas13@gmail.com</p>
          <button 
            onClick={() => {navigator.clipboard.writeText("trishaDas13@gmail.com")}}
          >Copy</button>
        </div>
      </div>
      <div className="calender section">
        <h3>Schedule Video Call With Me:</h3>
        <img src={calender} alt="calendely" width="150px" />
      </div>
      <div className="socials section">
        <h3>Socials:</h3>
        <div className="social_box">
          <a href="https://github.com/trishaDas13" target="_blank"><img src={github} alt="github" /></a>
          <a href="https://www.linkedin.com/in/trisha-das1308/" target="_blank"><img src={linkedin} alt="linked in" /></a>
          <a href="https://www.instagram.com/oktay.shakirov/" target="_blank"><img src={instagram} alt="instagram" /></a>
          <a href="https://twitter.com/oktayshakirov" target="_blank"><img src={twitter} alt="twitter" /></a>
        </div>
      </div>
      <div className="support section">
        <h3>Support My Work:</h3>
        <p>Your support fuels my development journey! With every small donation, you contribute to hostings, domains and other essential costs. All my work is open source and free for everyone to use.</p>
       
        <div className="support_image">
        <a href="https://www.buymeacoffee.com/oktayshakirov" target="_blank"><img src={con1} alt="" /></a>
        <a href="https://github.com/sponsors/oktayshakirov" target="_blank"><img src={con2} alt="" /></a>
        <a href="https://www.paypal.com/paypalme/OShakirov" target="_blank"><img src={con3} alt="" /></a>
      </div>
      </div>
    </div>
    </>
    
  )
}

export default Contact
