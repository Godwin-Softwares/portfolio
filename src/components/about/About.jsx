import React, { useContext} from 'react';
import "./about.css"
import work from '../../img/work.jpg'
import award from '../../img/award.png'
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
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
                <p className='a-sub'>Creative software engineer with 6+ years of experience in software engineering with a hands-on, high energy approach, well-developed skills in Agile methodology, and an unapologetically user focused philosophy.</p>
                <p className="a-desc">
                Developed several ecommerce web apps, social networking web apps, Logistic apps, Food delivery apps using Laravel framework , python Django framework and MERN stack technology , in addition to building auto garage management system, school management system and result management system apps among others, not excluding hands on mobile apps with React Native and Flutter technology which is captured on my portfolio and github account respectively.
                </p>
                
                <div className="a-award">
                  <img src={award} alt="" className='a-award-img'/>
                  <div className="a-award-text">
                    <h3 style={{color:darkMode && 'white'}} className="a-award-title">Software Engineers Award</h3>
                    <p className='a-award-desc'>
                    Award for contribution to development and deployment of highly efficient and robust softwares to organisations around the state and nation.
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
