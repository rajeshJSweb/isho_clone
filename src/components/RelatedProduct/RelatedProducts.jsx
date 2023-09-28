import React, { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductsByIdQuery } from '../../features/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../features/productsSlice';
import {GrNext,GrPrevious} from 'react-icons/gr'

import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay,} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const RelatedProducts = () => {
    const {productId}= useParams()
    const {data:product} = useGetProductsByIdQuery(productId)
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const swiperRef = useRef()

    useEffect(()=>{
        dispatch(fetchProductsAsync())
    },[])

    const singleProdcutTitle = product.title
    const checkProductKeyword = singleProdcutTitle.split(/[ ,-]+/)

    const relatedProduct = products.filter(product => {
        const allProductKeyWord = product.title.split(/[ ,-]+/)

        return checkProductKeyword.some(keyword=> allProductKeyWord.includes(keyword)) && product.title!=checkProductKeyword.title
    })

    const hadnleSingleProduct = (productId)=>{
        navigate(`/products/${productId.id}`)
    }

    const handleNext=()=>{
        swiperRef.current.slideNext()
    }
    const handlePrev=()=>{
        swiperRef.current.slidePrev()
    }
     
    return (
        <div className='md:mx-[64px] md:px-[30px]'>
            <div className='mb-[50px]'>
                <div className='pt-3 pb-2 text-[26px] font-semibold text-center'>Related Products</div>
            </div>
            <div className='mb-[64px]'>
                <Swiper
                spaceBetween={15}
                ref={swiperRef}
                pagination= {{clickable:true}}
                loop={true}
                autoplay={{delay:3000}}
                modules={[Autoplay]}
                navigation={false}
                breakpoints={
                    {
                        400:{
                            slidesPerView: 1
                        },
                        600:{
                            slidesPerView:2,
                            spaceBetween:10
                        },
                        768:{
                            slidesPerView:5,
                            spaceBetween:20
                        }
                    }
                }
                >
                {
                    relatedProduct&& relatedProduct.map(product=> <SwiperSlide key={product.id} product={product}>
                        <div onClick={()=>hadnleSingleProduct(product)} className='flex flex-col items-center p-2 cursor-pointer shadow-md h-[350px]'>
                            <div className='w-[230px] h-[230px] flex justify-center items-center'>
                                <img className='h-[230px]' src={product.image} alt="" />
                            </div>
                            <div className='px-10 flex items-center flex-col'>
                                <h1>{product.title.slice(0,30)}</h1>
                                <h1 className='text-xl font-semibold'>${product.price}</h1>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                </Swiper>
                
            </div>
        </div>
    );
};

export default RelatedProducts;