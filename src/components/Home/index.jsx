import React from 'react';
import './index.sass';
import Auth from '../Auth';

const Home = () => {
  return (
    <>
        <Auth />
    <div className='welcomePage'>
        <h1 className='Port'>
          Portfolio
        </h1>
      </div>
    </>
  )
}

export default Home;