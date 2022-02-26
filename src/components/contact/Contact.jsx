import React, { useRef, useContext, useState } from 'react';
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Location from "../../img/location.png"
import { ThemeContext } from "../../context";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [done, setDone] = useState(false);

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_n7lz6kq', 'template_m1gm6np', formRef.current, 'user_w1W6IC5piDfplbD7tEeIN')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });

    }
  return (
  <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title">
                  Lets discuss your project
              </h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img src={Phone} alt="" className="c-img" />
                      +234 813 944 4402
                  </div>
                  <div className="c-info-item">
                      <img src={Email} alt="" className="c-img" />
                      godwin.softwares@gmail.com
                  </div>
                  <div className="c-info-item">
                      <img src={Location} alt="" className="c-img" />
                      24 Bode Thomas, Surulere, Lagos Nigeria.
                  </div>
              </div>
          </div>
          <div className="c-right">
              <p className="c-desc">
                  <b>What's your story?</b> Get in touch, always freelancing once the right project comes along 
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                  <input style={{backgroundColor:darkMode && 'darkgray'}}  type="text" name="user_name" placeholder="username"/>
                  <input style={{backgroundColor:darkMode && 'darkgray'}} type="text" name="user_subject" placeholder="Subject"/>
                  <input style={{backgroundColor:darkMode && 'darkgray'}} type="text" name="user_email" placeholder="email"/>
                  <textarea style={{backgroundColor:darkMode && 'darkgray'}}  rows="5" placeholder="Message"/>
                  <button>Submit</button>
                  {done && 'Message Sent'}
              </form>
          </div>
      </div>
  </div>
  );
};

export default Contact;
