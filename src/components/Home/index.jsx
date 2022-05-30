import React from 'react';
import './index.sass';
// import Header from '../Header';
import Auth from '../Auth';

const Home = () => {
  return (
    <>
        <Auth />
    <div className='welcomePage'>
        <h1>
          Portfolio
        </h1>
      </div>
    </>
  )
}

export default Home;