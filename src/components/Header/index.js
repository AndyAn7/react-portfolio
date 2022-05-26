import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import jhip from '../../assets/images/집.png';

const Header = () => (

    <nav className='navLinks'>

        <NavLink to='../Home' className='homeLink'><a href='../../assets/images/집.png' className='jhip'><img ClassName='jhip' src={jhip} alt=''/></a>
        </NavLink>

        <NavLink exact='true' ClassName='active' to='../Project'>
            <FontAwesomeIcon icon='' />
        </NavLink>

        <NavLink exact='true' ClassName='active' to='../About'>
            <FontAwesomeIcon icon='' />
        </NavLink>

        <NavLink exact='true' ClassName='active' to='../../Contact'>
            <FontAwesomeIcon icon='' />
        </NavLink>

    </nav>

);

export default Header;