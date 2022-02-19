import React, { useRef } from 'react';
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Location from "../../img/location.png"
const Contact = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault()
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
                  <input type="text" name="user_name" placeholder="username"/>
                  <input type="text" name="user_subject" placeholder="Subject"/>
                  <input type="text" name="user_email" placeholder="email"/>
                  <textarea rows="5" placeholder="Message"/>
                  <button>Submit</button>
              </form>
          </div>
      </div>
  </div>
  );
};

export default Contact;
