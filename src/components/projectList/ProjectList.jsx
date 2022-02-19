import React from 'react';
import "./projectList.css"
import Project from '../project/Project';
import {projects} from '../../data'

const ProjectList = () => {
  return(
    <div>
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Create & Inspire. It's Godwin</h1>
                <p className="pl-desc"> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                </p>
            </div>
            <div className='pl-list'>
              {projects.map((item) => (
                <Project key={item.id} img={item.img} link={item.link}/>
              ))}
            </div>
        </div>
        
    </div>
  ) ;
};

export default ProjectList;
