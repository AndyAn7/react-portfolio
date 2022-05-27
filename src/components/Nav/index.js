import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AuthIMG from '../../assets/images/profilePic.png';
import backgroundImage from '../../assets/images/bg.jpg';



const Nav = () => (

    <div className='backgroundImage'
    style={{ minWidth: '100%', minHeight:'100%',backgroundImage: `url(${backgroundImage} )`,  
    backgroundSize:'100%', display: 'fixed',backgroundRepeat: 'no-repeat' }}>

        <div className='nav-bar'>
            <section className='logo' to='/'>
            <Link>
                <img className='sub-logo' src={AuthIMG} alt='author' />
             </Link>

                <p className="authName">
                    Andrew M. An
                </p>

            </section>
        </div>
    </div>
);

export default Nav;