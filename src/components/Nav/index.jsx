import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AuthIMG from '../../assets/images/profilePic.png';
import backgroundImage from '../../assets/images/bg.jpg';

const Nav = () => {
    return (
        <>
            <div className='backgroundImage'
            style={{ minWidth: 'cover', minHeight:'cover',backgroundImage: `url(${backgroundImage} )`,  
            backgroundSize:'cover', display: 'cover',
            backgroundPosition:'center',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX:'12%',
            backgroundPositionY:'' }}>

                <div className='nav-bar'>
                    <section className='logo'>
                    <Link to='../Project'>
                        <img className='sub-logo' src={AuthIMG} alt='author' />
                    </Link>

                        <p className="authName">
                            Andrew M. An
                        </p>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Nav;