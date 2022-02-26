import React from 'react';
import "./intro.css"
import me from "../../img/pic2.png"

const intro = () => {
  return (
    
      <div className='i'>
        <div className="i-left">
          <div className="i-left-wrapper">
            <h1 className='i-intro'>Hello!, I'm</h1>
            <h1 className='i-name'>Godwin</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Software Engineer</div>
                <div className="i-title-item">Mobile App Developer</div>
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">DevOp Engineer</div>
                <div className="i-title-item">UI/UX Designer</div>
              </div>
            </div>
            <div className="i-desc">
              An Experienced Software Engineer, vastly inclined in Web App Development with an exceptional expertise in Mobile App development and IoT, skilled in DevOp technology and Frontend UI/UX.
            </div>

            <div className='i-button'>
              <button id="#c">Start a Project</button>
            </div>
          </div>

          
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
            <img src={me} alt="" className="i-img" />
        </div>
      </div>
    
    )
};

export default intro;
