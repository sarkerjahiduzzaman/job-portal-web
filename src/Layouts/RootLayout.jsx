import React from 'react';
import Navbar from '../pages/Home/shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../pages/Home/shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;