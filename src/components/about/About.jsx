import React from 'react';
import "./about.css"
import work from '../../img/work.jpg'
import award from '../../img/award.png'

const About = () => {
  return (
  <div>
      <div className="a">
            <div className="a-left">
              <div className="a-card bg"></div>
              <div className="a-card">
                <img src={work} alt="" className="a-img"/>
              </div>
            </div>
            <div className="a-right">
             <div className="a-right-wrapper">
             <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
                <p className="a-desc">
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy isplaceholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
                </p>
                
                <div className="a-award">
                  <img src={award} alt="" className='a-award-img'/>
                  <div className="a-award-text">
                    <h3 className="a-award-title">National Award</h3>
                    <p className='a-award-desc'>
                    on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is
                    </p>
                  </div>
                </div>
             </div>

            </div>
          
          
      </div>
  </div>
  )
};

export default About;
