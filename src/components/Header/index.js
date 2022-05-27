import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav';
import jhip from '../../assets/images/집.png';
import eel from '../../assets/images/projex.png';
import about from '../../assets/images/about.png';
import contact from '../../assets/images/contact.png';

const Header = () => (
    
    <>
        <Nav />
        
            <div className='header'>
                <nav className='navLinks'>

                    <NavLink to='../Home' className='home'><a href='../../assets/images/집.png' className='homeNav'><img ClassName='jhip' src={jhip} alt=''/></a>
                    </NavLink>

                    <NavLink to='../Project' className='projex'><a href='../../assets/images/projex.png' className='homeNav'><img ClassName='eel' src={eel} alt=''/></a>
                    </NavLink>

                    <NavLink to='../About' className='about'><a href='../../assets/images/about.png' className='homeNav'><img ClassName='about' src={about} alt=''/></a>
                    </NavLink>

                    <NavLink to='../Contact' className='contact'><a href='../../assets/images/contact.png' className='homeNav'><img ClassName='contact' src={contact} alt=''/></a>
                    </NavLink>

                </nav>
            </div>
        </>
);

export default Header;