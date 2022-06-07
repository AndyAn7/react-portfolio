import React from 'react';
import { Link } from 'react-router-dom';
import './index.sass';
import AuthIMG from '../../assets/images/profilePic.png';

const Author = () => {
    return (
        <>
            <div className='auth'>

                <section className='logo'>

                    <Link to='/'>
                        <img className='sub-logoAuth' src={AuthIMG} alt='author' />
                    </Link>

                    <p className="authName">
                        Andrew M. An
                    </p>

                </section>
            </div>
        </>
    )
}

export default Author;