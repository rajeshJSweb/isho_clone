import React from 'react';
import { Link } from 'react-router-dom';

const BuyBYRoom = () => {
    return (
        <div>
            <div className='md:mx-[76px] md:px-[30px]'>
                <div className='md:mb-[15px] mb-[30px] text-[25px] md:text-[36px] text-center font-semibold'>BUY NOW</div>
                <p className='text-center text-[18px] mb-[15px] leading-6 md:px-0 px-[30px]'>Discover the global taste of lifestyle with our curated room setups priced under 15000 BDT, for your work and relaxation.</p>
                <div className='flex w-full mx-auto justify-center'>
                    <div className='w-[436px] h-[547px] bg-blue-300'>1</div>
                    <div className='w-[436px] h-[547px] bg-yellow-400'>1</div>
                    <div className='w-[436px] h-[547px] bg-pink-400'>1</div>
                </div>
            </div>
        </div>
    );
};

export default BuyBYRoom;