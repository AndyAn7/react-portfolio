import React from 'react';
import './index.sass';
import InstaAndy from '../../assets/images/insta.webp';
import AndyFace from '../../assets/images/face.webp';
import LinkyPink from '../../assets/images/linkd.webp';
import GitHub from '../../assets/images/gh.webp';

const Footer = () => {
    return (
        <>
            <div className='iconLinks'>
                <a target='_blank' rel='noreferrer' 
                href='https://instagram.com/ghengisan' >
                <img src={InstaAndy} alt='instagram' />
                </a>
                <a target='_blank' rel='noreferrer' 
                href='https://facebook.com/andyrooh22' >
                <img src={AndyFace} alt='facebook' />
                </a>
                <a target='_blank' rel='noreferrer' 
                href='https://linkedin.com/in/andyrooh/' >
                <img src={LinkyPink} alt='linkedin' />
                </a>
                <a target='_blank' rel='noreferrer' 
                href='https://github.com/AndyAn7' >
                <img src={GitHub} alt='github' /></a>
            </div>
        </>
    )
}

export default Footer;