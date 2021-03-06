import React from 'react';
import { Link } from 'react-router-dom';
import AuthIMG from '../../assets/images/profilePic.png'
import './index.sass';

function About() {
    return (
        <>
            <p className="authNameAbout">
                Andrew M. An
            </p>

            <Link to='/'>
                <img className='sub-logoAbout' src={AuthIMG} alt='author' />
            </Link>

            <div className='showcase-about'>
                <h1>About</h1>
            </div>


            <section className='aboutText'>
                <p>Welcome to my portfolio!</p>

                <p>I've recently begun the process of immersing myself in computer science with an aim to take part in the advance of humanity via technology and the data derived within. In time, I intend on entering into the field of technology upon the foundation of Full-Stack development; thenceforth, I plan to study and perform my way into the field of data science to take part in the apex of technology as is current, Artificial Intelligence.</p>

                <p>Here, at this juncture of my path into computer science, I present basic assignments and projects I've completed, or taken part in completing, during my time as a student at the University of Washington's Full-Stack Boot Camp program.</p>

                <p>Though these are all works of progress towards my ultimate goal within Tech, I hope that you find yourself within good-impression as you peruse through my portfolio.</p>

                <p>Thanks!</p>
            </section>

            <div className='langTop'>
                {'<>'}
            </div>

            <div className='langBot'>
                {'</>'}
            </div>
        </>
    )
}

export default About;