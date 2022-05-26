import React from 'react';
import './index.scss';
import { Outlet } from 'react-router-dom';
import { Header, Home, Footer } from '../../components';

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