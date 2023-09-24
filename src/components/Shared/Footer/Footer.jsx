import React from 'react';
import { Link } from 'react-router-dom';
import {BsFacebook,BsLinkedin,BsYoutube} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
    return (
       <div className='bg-blue-50 pt-[67px] pb-[33px]'>
        <div className='md:flex md:mx-7 px-7'>
            <div className='md:w-3/12 items-start flex justify-between md:flex-col'>
                <div className='flex flex-col gap-5'>
                    <div>
                        <h1 className='text-[36px] font-semibold'>iSHO</h1>
                    </div>
                    <div>
                        <h1 className='font-semibold'>Delivery Quary</h1>
                        <p className='text-sm'>+88017141164</p>
                    </div>
                    <div>
                        <h1 className='font-semibold'>Sales and Consultency</h1>
                        <p className='text-sm'>sale@isho.com</p>
                        <p className='text-sm'>+0128287</p>
                    </div>
                    <div>
                        <h1 className='font-semibold'>Customer Support</h1>
                        <p className='text-sm'>0125887963</p>
                        <p className='text-sm'>support@isho.com</p>
                    </div>
                </div>
                <div className='flex gap-2 md:mt-5'>
                    <BsFacebook className='text-4xl cursor-pointer text-blue-400 rounded-full border-2 border-red-300 p-[1px]'/>
                    <AiFillInstagram className='text-4xl cursor-pointer rounded-full text-blue-400 border-2 border-red-300 p-[1px]'/>
                    <BsLinkedin className='text-4xl border-2 border-red-300 cursor-pointer p-[1px] rounded-full text-blue-400'/>
                    <BsYoutube className='text-4xl cursor-pointer text-blue-400 border-2 rounded-full border-red-300 p-[1px]'/>
                </div>
            </div>
        <div className='grid grid-cols-2 gap-7 md:flex md:w-full mt-10 md:mt-0'>
            <div className='md:w-3/12'>
                <h1 className='py-3 font-semibold'>Company</h1>
                <div className='flex flex-col gap-4 text-sm'>
                    <Link>About Us</Link>
                    <Link>Design Studio</Link>
                    <Link>Platforms</Link>
                    <Link>Press</Link>
                    <Link>Campaigns</Link>
                    <Link>Sustainability Commitment</Link>
                    <Link>Internship</Link>
                    <Link>EWMP</Link>
                </div>
            </div>
            <div className='md:w-3/12'>
                <h1 className='py-3 font-semibold'>Explore</h1>
                    <div className='flex flex-col gap-4 text-sm'>
                        <Link>Store Location</Link>
                        <Link>Services</Link>
                        <Link>FAQ'S</Link>
                        <Link>Loyalty Program</Link>
                        <Link>Contact Us</Link>
                    </div>
            </div>
            <div className='md:w-3/12'>
                <h1 className='py-3 font-semibold'>iSHOFY</h1>
                <div className='flex flex-col gap-4 text-sm'>
                        <Link>Events</Link>
                        <Link>Innovations</Link>
                        <Link>Idea's</Link>
                        <Link>DormBox</Link>
                        <Link>iSHO Trend Report</Link>
                    </div>
            </div>
            <div className='md:w-3/12'>
                <h1 className='py-3 font-semibold'>Legal</h1>
                <div className='flex flex-col gap-4 text-sm'>
                        <Link>Delivery And Assembly</Link>
                        <Link>Privacy & Policy</Link>
                        <Link>Cancelation And Refund</Link>
                        <Link>Term And Conditions</Link>
                    </div>
            </div>
            </div>
        </div>
       </div>
    );
};

export default Footer;