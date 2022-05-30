import React from 'react';
import './index.sass';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import Home from '../Home';
import Footer from '../Footer';

const Layout = () => {
    return (
        <>
            <Home />
                <Nav />
                        <Outlet />    
                <Footer />
        </>
    )
}

export default Layout;