import React from 'react';
import './index.scss';
import { faGithub } from 
'@fortawesome/free-brands-svg-icons';
import { faLinkedin } from 
'@fortawesome/free-brands-svg-icons';
import { faReact } from 
'@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from 
'@fortawesome/react-fontawesome';

const Contact = () => {
    return (
        <>
            <ul className='ProLinks'>
                <div className='prolink'>
                    <li>
                        <a 
                            target='_blank'  
                            rel='noreferrer' 
                            href='https://www.linkedin.com/in/andyrooh/'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a 
                            target='_blank'  
                            rel='noreferrer'                 
                            href='https://github.com/AndyAn7'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a 
                            target='_blank'  
                            rel='noreferrer' 
                            href='../Project'>
                            <FontAwesomeIcon icon={faReact} />
                        </a>
                    </li>
                </div>
            </ul>
        </>
    )
}

export default Contact;