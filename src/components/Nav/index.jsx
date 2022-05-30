import React from 'react';
import './index.sass';
import { NavLink } from 'react-router-dom';
import jhip from '../../assets/images/집.png';
import eel from '../../assets/images/projex.png';
import about from '../../assets/images/about.png';
import contact from '../../assets/images/contact.png';

const Nav = () => {
    return (
        <>
            <nav className='navLinks'>

                <NavLink to='/' className='home'><img className='navg' src={jhip} alt=''/>
                </NavLink>

                <NavLink to='../About' className='about'><img className='navg' src={about} alt=''/>
                </NavLink>

                <NavLink to='../Projects' className='projex'><img className='navg' src={eel} alt=''/>
                </NavLink>

                <NavLink to='../Contact' className='contact'><img className='navg' src={contact} alt=''/>
                </NavLink>

            </nav>
        </>
    )
}

export default Nav;