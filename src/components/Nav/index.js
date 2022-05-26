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
            <Link className='logo' to='/'>

                <img className='sub-logo' src={AuthIMG} alt='author' />

                <p className="authName">
                    Andrew M. An
                </p>

            </Link>
        </div>
    </div>
);

export default Nav;