import React from 'react';

const BottomBanner = () => {
    return (
        <div className='w-full relative'>
            <img src="https://i.ibb.co/8bWDZ23/banner.jpg" className='w-full h-full object-cover opacity-75' alt="" />
            <button className='absolute border-[1px] border-slate-300 bg-white shadow-lg py-2 md:py-5 px-5 md:px-14 top-[40%] left-[40%] md:top-[45%] md:left-[43%] rounded-full text-pink-500 font-semibold cursor-pointer'>SHOP NOW</button>
        </div>
    );
};

export default BottomBanner;