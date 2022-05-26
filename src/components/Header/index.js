import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav';
import { jhip, eel, about, contact } from '../../assets/images';

const Header = () => (
    
    <>
        <Nav />

            <div className='header'>
            
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
            </div>
        </>
    );

export default Header;