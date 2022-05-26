import React from 'react';
import './index.scss';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import Home from '../Home';
import Footer from '../Footer';

const Layout = () => {
    return (
        <>
            <Nav />
                <Home />
                    <Outlet />
            <Footer />
        </>
    )
}

export default Layout;