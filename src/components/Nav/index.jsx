import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/images/profilePic.png'
import './index.scss';
import AuthIMG from '../../assets/images/profilePic.png';

const Nav = () => {
    return (
        <>
            <div className='navbar'>
                <section className='logo'>
                <Link to={profilePic}>
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