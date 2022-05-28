import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav';
import jhip from '../../assets/images/집.png';
import eel from '../../assets/images/projex.png';
import about from '../../assets/images/about.png';
import contact from '../../assets/images/contact.png';

const Header = () => {
    return (
        <>
            <Nav />

                <nav className='navLinks'>

                    <NavLink to='../Home' className='home'><img className='jhip' src={jhip} alt=''/>
                    </NavLink>

                    <NavLink to='../Project' className='projex'><img className='eel' src={eel} alt=''/>
                    </NavLink>

                    <NavLink to='../About' className='about'><img className='about' src={about} alt=''/>
                    </NavLink>

                    <NavLink to='../Contact' className='contact'><img className='contact' src={contact} alt=''/>
                    </NavLink>

                </nav>
        </>
    )
}

export default Header;