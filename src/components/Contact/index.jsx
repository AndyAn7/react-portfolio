import React from 'react';
import './index.sass';
import Auth from '../Auth';

const Contact = () => {
    return (
        <>
           <div className='authStyle'>

                <Auth />

                <div className='showcase'>
                    <h1>Contact</h1>
                </div>

            </div>                
        </>
    )
}

export default Contact;