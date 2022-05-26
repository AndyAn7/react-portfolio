import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import jhip from '../../assets/images/집.png';
import { FontAwesomeIcon } from 
'@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact } from 
'@fortawesome/free-brands-svg-icons';
import Nav from '../Nav';


const Header = () => (
    
    <>
        <Nav />
            <nav className='navLinks'>

                <NavLink to='../Home' className='homeLink'><a href='../../assets/images/집.png' className='jhip'><img ClassName='jhip' src={jhip} alt=''/></a>
                </NavLink>

                <NavLink exact='true' ClassName='active' to='../Project'>
                    <FontAwesomeIcon icon='' />
                </NavLink>

                <NavLink exact='true' ClassName='active' to='../About'>
                    <FontAwesomeIcon icon='' />
                </NavLink>

                <NavLink exact='true' ClassName='active' to='../Contact'>
                    <FontAwesomeIcon icon='' />
                </NavLink>

            </nav>
    </>
);

export default Header;