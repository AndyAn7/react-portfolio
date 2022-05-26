import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav';
import jhip from '../../assets/images/집.png';
import eel from '../../assets/images/projex.png';
import about from '../../assets/images/about.png';
import contact from '../../assets/images/contact.png';
import { faGithub, faLinkedin, faReact } from 
'@fortawesome/free-brands-svg-icons';



const Header = () => (
    
    <>
        <Nav />
            <nav className='navLinks'>

                <NavLink to='../Home' className='home'><a href='../../assets/images/집.png' className='jhip'><img ClassName='jhip' src={jhip} alt=''/></a>
                </NavLink>

                <NavLink to='../Project' className='projex'><a href='../../assets/images/projex.png' className='eel'><img ClassName='eel' src={eel} alt=''/></a>
                </NavLink>

                <NavLink to='../About' className='about'><a href='../../assets/images/about.png' className='about'><img ClassName='about' src={about} alt=''/></a>
                </NavLink>

                <NavLink to='../Contact' className='contact'><a href='../../assets/images/contact.png' className='contact'><img ClassName='contact' src={contact} alt=''/></a>
                </NavLink>

            </nav>
    </>
);

export default Header;