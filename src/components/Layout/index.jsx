import React from 'react';
import './index.scss';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import Footer from '../Footer';

const Layout = () => {
    return (
        <>
            <Header />
                <Home />      
                    <Outlet />    
            <Footer />
        </>
    )
}

export default Layout;