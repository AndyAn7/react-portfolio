import React from 'react';
import { Link } from 'react-router-dom';
import AuthIMG from '../../assets/images/profilePic.png';
import './index.sass';
import Project from '../Project';
const jsonProjects = require('../../assets/projects.json')

const Projects = () => {
  return (
    <>
      <p className="authNamePro">
        Andrew M. An
      </p>

      <Link to='/'>
        <img className='sub-logoPro' src={AuthIMG} alt='author' />
      </Link>

      <div className='showcasePro'>
        <h1>Projects</h1>
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