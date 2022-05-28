import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../Project'
import './index.scss';
import AuthIMG from '../../assets/images/profilePic.png';

const Nav = () => {
    return (
        <>
            <div className='nav-bar'>
                <section className='logo'>
                <Link to={Project}>
                    <img className='sub-logo' src={AuthIMG} alt='author' />
                </Link>

                    <p className="authName">
                        Andrew M. An
                    </p>

                </section>
            </div>
        </>
    )
}

export default Nav;