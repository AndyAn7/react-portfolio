import React from 'react';
import './index.sass';
import Auth from '../Auth';
import Project from '../Project';
const jsonProjects = require('../../assets/projects.json')

const Projects = () => {
  return (
    <>
      <div className='authStyle'>

        <Auth />

        <div className='showcase'>
          <h1>Projects</h1>
        </div>

      </div>

      <div className="project-page">

        <div className="projects-container">
          {jsonProjects.map((project) => (  
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects;