import React from 'react';
import './index.sass';
import Auth from '../Auth';

const Projects = () => {
  return (
    <>
        <div className='authStyle'>

          <Auth />

          <div className='showcase'>
            <h1>Projects</h1>
          </div>

        </div>
        
    </>
  )
}

export default Projects;