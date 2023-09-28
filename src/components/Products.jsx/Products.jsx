import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { Autoplay } from "swiper/modules";
import { useGetProductsByIdQuery } from "../../features/apiSlice";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  buyNowProduct,
  decrementItem,
  incrementItem,
} from "../../features/addCartSlice";
import RelatedProducts from "../RelatedProduct/RelatedProducts";

const Products = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductsByIdQuery(productId);
  const [selectedDetail, setSelectedDetail] = useState("description");

  const addCart = useSelector((state) => state.addCart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Processing...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

  const handleIncrement = (productId) => {
    dispatch(incrementItem({ id: productId }));
  };

  const handleDecreament = (productId) => {
    dispatch(decrementItem({ id: productId }));
  };

  const handleBuyNow = (product) => {
    dispatch(
      buyNowProduct({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    );
    navigate("/carts");
  };

  const specificProductInCart = addCart.find((item) => item.id === product.id);

  const filterDetails = (selected) => {
    setSelectedDetail(selected);
  };

  return (
    <div className="w-full">
      <div className="md:mx-[64px] px-[20px] md:px-[30px] md:flex mt-10 md:border-none border-t-[1px] border-gray-200 gap-10 mb-[100px]">
        <div className="md:w-6/12 flex justify-center items-center relative pt-2">
          {product && (
            <img
              className="w-[200px] transition-transform transform hover:scale-110"
              src={product.image}
              alt={product.title}
            />
          )}
        </div>
        <div className="md:ml-[40px] md:w-6/12">
          <div>
            <div className="text-[12px] font-semibold">
              <Link to="/">WORK CHAIR</Link>
            </div>
          </div>
          <div className="flex justify-between pb-[30px]">
            <div className="text-[16px]">
              <h1 className="text-[16px] md:text-[22px] md:font-bold">
                {product.title}
              </h1>
              <h1 className="md:text-[26px] font-bold">${product.price}</h1>
            </div>
            <div>
              <FiShare2 className="w-[40px] h-[40px] border-[1px] cursor-pointer border-gray-400 rounded-full p-2" />
            </div>
          </div>
          <div>
            <div className="md:flex items-center gap-5">
              <div className="mb-[40px] md:mb-0 flex justify-start items-center gap-10">
                <h1 className="md:hidden">Quantity:</h1>
                <div className="flex py-2 px-5 border-[1px] border-gray-500 rounded-full gap-5 justify-center items-center">
                  <AiOutlineMinus
                    className="cursor-pointer"
                    onClick={() => handleDecreament(product.id)}
                  />
                  <h1>
                    {specificProductInCart ? specificProductInCart.quantity : 0}
                  </h1>
                  <AiOutlinePlus
                    className="cursor-pointer"
                    onClick={() => handleIncrement(product.id)}
                  />
                </div>
              </div>
              <div className="flex w-full overflow-visible justify-center items-center gap-5">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="px-10 border-[1px] border-pink-600 rounded-full py-4 font-bold hover:bg-slate-100"
                >
                  ADD CART
                </button>
                <button
                  onClick={() => handleBuyNow(product)}
                  className="px-10 border-[1px] border-pink-600 rounded-full py-4 bg-pink-500 text-white font-bold hover:bg-pink-400"
                >
                  BUY NOW
                </button>
              </div>
            </div>
            <div className="md:w-6/12">
              <h1 className="mt-[30px] py-[5px] px-[15px] bg-yellow-100 text-gray-500">
                Est. Delivery between 10 - 14 days
              </h1>
            </div>
            <div className="mt-[40px] flex flex-col gap-5">
              <div className="flex justify-between">
                <h1>Payment Method:</h1>
                <p className="md:hidden">EMI Bank Details</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="md:w-8/12 w-full pb-[28px]">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                  >
                    <SwiperSlide className="w-[40px] h-[30px] md:w-[60px] rounded-md md:h-[50px] border-2 border-green-700">
                      1
                    </SwiperSlide>
                    <SwiperSlide className="w-[60px] rounded-md h-[50px] border-2 border-green-700">
                      1
                    </SwiperSlide>
                    <SwiperSlide className="w-[60px] rounded-md h-[50px] border-2 border-green-700">
                      1
                    </SwiperSlide>
                    <SwiperSlide className="w-[60px] rounded-md h-[50px] border-2 border-green-700">
                      1
                    </SwiperSlide>
                    <SwiperSlide className="w-[60px] rounded-md h-[50px] border-2 border-green-700">
                      1
                    </SwiperSlide>
                    <SwiperSlide className="w-[60px] rounded-md h-[50px] border-2 border-green-700">
                      1
                    </SwiperSlide>
                    <SwiperSlide className="w-[60px] rounded-md h-[50px] border-2 border-green-700">
                      1
                    </SwiperSlide>
                  </Swiper>
                </div>
                <h1 className="hidden md:block">EMI Bank Details</h1>
              </div>
            </div>
            <div className="md:mt-[50px] mb-[40px] md:mb-0 flex flex-col gap-5">
              <div className="flex gap-7 md:gap-14 text-[16px] font-semibold">
                <button
                  onClick={() => filterDetails("description")}
                  className={`underline cursor-pointer ${
                    selectedDetail === "description" ? "text-pink-500" : ""
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => filterDetails("materials")}
                  className={`underline cursor-pointer ${
                    selectedDetail === "materials" ? "text-pink-500" : ""
                  }`}
                >
                  Materials
                </button>
                <button
                  onClick={() => filterDetails("dimension")}
                  className={`underline cursor-pointer ${
                    selectedDetail === "dimension" ? "text-pink-500" : ""
                  }`}
                >
                  Dimension
                </button>
              </div>
              <div className="">
                {selectedDetail === "description" && (
                  <p className="">{product.description}</p>
                )}
                {selectedDetail === "materials" && (
                  <p className="">{product.materials}</p>
                )}
                {selectedDetail === "dimension" && (
                  <p className="">{product.dimension}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default Products;
