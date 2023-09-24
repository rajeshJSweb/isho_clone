import React from 'react';
import {BiSolidCartDownload} from 'react-icons/bi'
import { useSelector } from 'react-redux';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';
import DesktopDropDown from './DesktopDropDown';

const Nav = () => {
    const cart = useSelector(state => state.addCart.cart.length)
    return (
        <div className='pt-7 pb-5'>
            <div className='md:flex items-center justify-between hidden'>
                <div>
                    <Link to='/' className='font-semibold text-4xl'>iSHO</Link>
                </div>
                <div className='w-full'>
                    <DesktopDropDown/>
                </div>
                <div className='flex items-center gap-2'>
                    <input className='px-2 py-[6px] outline-none rounded-full border-[1px] border-gray-300' placeholder='Search' type="text" />
                    <Link to='/carts' className='flex justify-center flex-col items-center'>
                        <div className='absolute rounded-full top-[60px] right-[92px] bg-yellow-400 h-[20px] w-[20px]'>
                            <h1 className='text-center text-white text-sm font-semibold'>{cart}</h1>
                        </div>
                        <BiSolidCartDownload className='text-2xl'/>
                    </Link>
                </div>  
            </div>
            <MobileMenu/>
        </div>
    );
};

export default Nav;