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
                <p className="pl-desc"> We have built and deployed a number of amazing projects to 
                clients and organisation. Kindly have a tour on some of our existing projects. 
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
