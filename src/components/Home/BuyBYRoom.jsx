import React from 'react';
import {BsArrowRightShort} from 'react-icons/bs'
import { Link } from 'react-router-dom';

const BuyBYRoom = () => {
    return (
        <div className='md:mt-[100px]'>
            <div className='md:mx-[76px] px-[20px] md:px-[30px]'>
            <h1 className='text-center text-[25px] md:text-[36px] font-semibold mb-[15px]'>Buy by Room</h1>
            <p className='text-center text-[18px] mb-[15px] leading-6'>Discover the global taste of lifestyle with our curated room setups priced under 15000 BDT, for your work and relaxation.</p>
            <div className='flex justify-center'>
                <div className='hidden md:block md:w-[436px] h-[500px] bg-blue-400 p-10'>
                    <img className='h-[350px] ' src="https://i.ibb.co/BgTf2sd/r-Fb8-V3-V9-An-Fo3i-Hw-J6pi-Fydp1-P8jr-Qb97-Epquz2a.jpg" alt="" />
                    <div className='flex justify-between items-center relative top-10 text-[18px]'>
                        <h1 className='text-[18px] font-semibold text-white'>Personal Wrokspace</h1>
                        <Link><BsArrowRightShort className='bg-blue-200 rounded-full text-white text-[50px] hover:bg-white hover:text-blue-400'/></Link>
                    </div>
                </div>
                <div className='w-4/12 md:w-[436px] h-[500px] bg-yellow-400 p-10'>
                    <img className='h-[350px] ' src="https://i.ibb.co/7xhpfPr/Al-HLXm-CRFg-HUFe-UVSDL0-Nypp-MSczfp4f3-MC6x0-JP.jpg" alt="" />
                    <div className='flex justify-between items-center relative top-10 text-[18px]'>
                        <h1 className='text-[18px] font-semibold text-white'>Personal Wrokspace</h1>
                        <Link><BsArrowRightShort className='bg-blue-200 rounded-full text-white text-[50px] hover:bg-white hover:text-yellow-400'/></Link>
                    </div>
                </div>
                <div className='w-8/12 md:w-[436px] h-[500px] bg-pink-400 p-10'>
                    <img className='h-[350px] ' src="https://i.ibb.co/kH4Xrqr/Byg-ZNCk-HOi-Kq4pqm-Ri-I7nuoi-C7h3fm-Uao8-W1-Lfe4.jpg" alt="" />
                    <div className='flex justify-between items-center relative top-10 text-[18px]'>
                        <h1 className='text-[18px] font-semibold text-white'>Personal Wrokspace</h1>
                        <Link><BsArrowRightShort className='bg-blue-200 rounded-full text-white text-[50px] hover:bg-white hover:text-blue-400'/></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BuyBYRoom;