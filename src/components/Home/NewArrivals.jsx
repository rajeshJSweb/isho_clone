import React, { useEffect} from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../../features/productsSlice';

const NewArrivals = () => {
    const { products, isLoading, isError } = useSelector(state => (state.products));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if(isError){
        return <div>Product is not found....</div>
    }

    useEffect(() => {
        dispatch(fetchProductsAsync());
    }, []);

    const handleProductClick = (productId) => {
        navigate(`/products/${productId.id}`);
    };

    return (
        <div className='relative mt-[100px] z-0'>
            <div className='px-[20px] md:mx-[76px] md:px-[30px] '>
                <h1 className='text-center text-[25px] md:text-[36px] font-semibold mb-[45px]'>New Arrivals</h1>
                <div className='my-10'>
                {isLoading && <div className='flex justify-center items-center'>
                    <h1 className='text-2xl'>Loading.....</h1>
                    </div>}
                    <Swiper 
                        spaceBetween={15}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
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
                        modules={[Autoplay, Navigation]}
                    >
                        {products && products.map(product => (
                            <SwiperSlide
                                key={product.id}
                                product={product}
                            >
                                <div onClick={()=> handleProductClick(product)}>
                                    <div className='p-7 flex justify-center'>
                                        <img className='h-[142px]' src={product.image} alt="" />
                                    </div>
                                    <div className='text-center'>
                                        <h1 className='text-[16px]'>{product.title.slice(0,15)}</h1>
                                        <p className='text-[16px] font-semibold'>${product.price}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
                <div className='mb-10 flex justify-center items-center'>
                    <Link to='/all_products' className='bg-blue-400 py-2 md:py-5 px-5 md:px-10 md:font-semibold text-white rounded-full'>View All Items</Link>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
