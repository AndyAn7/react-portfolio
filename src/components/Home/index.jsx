import React from 'react';
import { Link } from 'react-router-dom';
import './index.sass';
import AuthIMG from '../../assets/images/profilePic.png';

const Home = () => {
  return (
    <>
      <Link to='/'>
        <img className='sub-logoHome' src={AuthIMG} alt='author' />
      </Link>

      <p className="authNameHome">
        Andrew M. An
      </p>

      <div className='welcomePage'>
        <h1 className='Port'>
          Portfolio
        </h1>
      </div>
    </>
  )
}

export default Home;