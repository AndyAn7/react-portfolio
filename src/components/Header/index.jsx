import React from 'react';
import { Link } from 'react-router-dom';
import home from '../Home'
import './index.scss';
import AuthIMG from '../../assets/images/profilePic.png';

const Header = () => {
    return (
        <>
            <div className='header'>
                <section className='logo'>
                <Link to={home}>
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

export default Header;