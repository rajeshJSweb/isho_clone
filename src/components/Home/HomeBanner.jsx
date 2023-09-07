import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeBanner = () => {
    return (
        <div className='mt-[100px]'>
            <div className='md:w-auto md:mx-[76px] md:px-[30px]'>
            <Swiper>
                <SwiperSlide>
                    <div className='relative pb-[60px]'>
                        <img className='w-full' src="https://i.ibb.co/k9xXFXM/banner.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        </div>
    );
};

export default HomeBanner;