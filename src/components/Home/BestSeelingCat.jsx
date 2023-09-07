import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation} from 'swiper/modules';
import { useSelector } from 'react-redux';


const BestSeelingCat = () => {
    const [products, setProducts]= useState([])

    useEffect(()=>{
        fetch('/products.json')
        .then(res => res.json())
        .then(data => setProducts(data.products))
    },[])
    
    return (
        <div className='mt-[100px]'>
            <div className='md:mx-[76px] md:px-[30px]'>
            <h1 className='text-center text-[25px] md:text-[36px] font-semibold mb-[75px]'>Best Selling Categories</h1>
            <div className='mt-10 mb-7'>
            <Swiper 
                    slidesPerView={6}
                    spaceBetween={15}
                    pagination={{clickable: true,}}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        '@0.00': {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        '@1.5': {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                      }}
                   modules={[Navigation,Autoplay]}>
                    {products && products.map(product => <SwiperSlide 
                    key={product.id}
                    product={product}>
                        <div className='w-[213px] md:w-[297px] cursor-pointer'>
                                    <img  src='' alt="" />
                                    <div className='flex flex-col justify-center items-center leading-6'>
                                        <h1 className='mb-[10px] text-[16px] text-center leading-6'></h1>
                                        <h1 className='text-[16px] font-semibold'>$</h1>
                                    </div>
                               </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
            <div className='mb-10 flex justify-center items-center'>
                <button className='bg-blue-400 py-2 md:py-5 px-5 md:px-10 md:font-semibold text-white rounded-full'>View All Categories</button>
            </div>
        </div>
        </div>
    );
};

export default BestSeelingCat;