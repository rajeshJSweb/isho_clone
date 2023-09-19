import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation} from 'swiper/modules';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


const BestSeelingCat = () => {
    const {products, isLoading, isError} = useSelector(state => (state.products))
    const navigate = useNavigate()


    const filteredProducts=products.filter(product=>product.title.includes('Jacket'))

    const handleProductClick=(productId)=>{
        navigate(`/products/${productId.id}`)
    }

    return (
        <div className='relative mt-[100px] z-0'>
            <div className='px-[20px] md:mx-[76px] md:px-[30px] '>
            <h1 className='text-center text-[25px] md:text-[36px] font-semibold mb-[45px]'>All Jackets</h1>
            <div className='my-10'>
                <Swiper 
                    spaceBetween={15}
                    pagination={{clickable: true,}}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        575: {
                            slidesPerView: 3,
                        },
                        990: {
                            slidesPerView: 4,
                        }
                    }}
                   modules={[Autoplay]}
                   
                   >
                    {
                       filteredProducts&& filteredProducts.map(product => <SwiperSlide 
                        className='grid justify-center items-center'
                       key={product.id}
                       product={product}>
                               <div onClick={()=> handleProductClick(product)}>
                                    <div className='p-7 flex justify-center'>
                                        <img className='h-[142px]' src={product.image} alt="" />
                                    </div>
                                    <div className='text-center text-[16px] '>
                                        <h1>{product.title.slice(0,15)}</h1>
                                        <p className='font-semibold'>${product.price}</p>
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

export default BestSeelingCat;