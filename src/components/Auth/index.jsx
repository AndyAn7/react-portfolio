import React from 'react';
import { Link } from 'react-router-dom';
import './index.sass';
import AuthIMG from '../../assets/images/profilePic.png';

const Auth = () => {
    return (
        <>
            <div className='auth'>

                <section className='logo'>

                    <Link to='/'>
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

export default Auth;