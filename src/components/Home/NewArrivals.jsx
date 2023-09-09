import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay,} from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../features/productsSlice';


const NewArrivals = () => {
    const {products, isLoading, isError} = useSelector(state => (state.products))
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProductsAsync())
    },[])

    const handleProductClick=(productId)=>{
        navigate(`/products/${productId.id}`)
    }

    return (
        <div className='relative mt-[100px] z-0'>
            <div className='px-[20px] md:mx-[76px] md:px-[30px] '>
            <h1 className='text-center text-[25px] md:text-[36px] font-semibold mb-[45px]'>New Arrivals</h1>
            <div className='my-10'>
                <Swiper 
                    spaceBetween={15}
                    pagination={{clickable: true,}}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                          },
                          600: {
                            slidesPerView: 2,
                          },
                          768: {
                            slidesPerView: 4,
                          },
                      }}
                   modules={[Autoplay]}
                   
                   >
                    {
                       products&& products.map(product => <SwiperSlide 
                        className='grid justify-center items-center'
                       key={product.id}
                       product={product}>
                               <div onClick={()=>handleProductClick(product)} className='cursor-pointer flex justify-center flex-col items-center h-[297px]'>
                                    <img className='h-[200px] object-contain'  src={product.image} alt="" />
                                    <div className='flex flex-col justify-center items-center leading-6'>
                                        <h1 className='mb-[10px] text-[16px] text-center leading-6'>{product.title}</h1>
                                        <h1 className='text-[16px] font-semibold'>${product.price}</h1>
                                    </div>
                               </div>
                        </SwiperSlide>
                        )}
                </Swiper>
            </div>
            <div className='mb-10 flex justify-center items-center'>
                <Link to='/all_products' className='bg-blue-400 py-2 md:py-5 px-5 md:px-10 md:font-semibold text-white rounded-full'>View All Items</Link>
            </div>
            </div>
        </div>
    );
};

export default NewArrivals;