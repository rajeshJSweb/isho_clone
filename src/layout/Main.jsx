import React from 'react';
import Header from '../components/Shared/NavBar/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='w-full overflow-hidden'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;