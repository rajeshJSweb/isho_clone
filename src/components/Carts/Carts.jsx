import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrementItem, incrementItem, removeFromCart } from "../../features/addCartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const Carts = () => {
  const carts = useSelector((state) => state.addCart.cart);
  const { user } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const subTotal = carts.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleIncrement=(productId)=>{
    dispatch(incrementItem({id:productId}))
  }

  const handleDecreament=(productId)=>{
    dispatch(decrementItem({id:productId}))
  }

  const handleRemove = (productId) => {
    const confirm = window.confirm("Are you want to remove this item");
    if (confirm) {
      dispatch(removeFromCart({ id: productId }));
    }
  };

  const handleConfirmOrder = () => {
    if (carts.length) {
      navigate('/checkout')
    }
  };

  return (
    <div className="">
      <div className="md:mx-[76px] md:px-[30px]">
        {carts.length > 0 ? (
          <div className="md:flex w-full gap-2 my-10 md:my-[100px]">
            <div className="md:w-8/12 px-2 hidden md:block">
            <h1 className="text-lg font-semibold py-3">Order Summery</h1>
              <div className="md:px-8">
                {carts.map(item => <div item={item} key={item.name}>
                    <div className="md:flex md:mt-5 md:py-5">
                      <div className="md:p-5"><img src={item.image} className="md:w-[100px] px-20 md:px-0" alt="" /></div>
                      <div className="w-full mt-5 md:mt-0">
                        <h1 className="font-semibold mb-2">{item.title}</h1>
                        <p className="text-gray-400 mb-2">ADNGSJG</p>
                        <p className="text-[12px] text-gray-600 mb-5">Product Code: </p>
                        <h1 className="font-semibold mb-7">Unit Price: ${item.price}</h1>
                        <div className="flex justify-between items-center">
                          <h1>Quantity:</h1>
                          <div className="flex justify-between gap-2 md:gap-5 items-center px-5 py-2 border-2 border-gray-500">
                            <FaMinus onClick={()=>handleDecreament(item.id)} className="cursor-pointer hover:text-red-600"/>
                            <p className="border-x-2 border-gray-500 px-5 text-red-600">{item.quantity}</p>
                            <FaPlus onClick={()=>handleIncrement(item.id)} className="cursor-pointer hover:text-green-600"/>
                          </div>
                          <button onClick={() => handleRemove(item.id, subTotal)} className="px-5 py-2 border-2 border-gray-500 hover:border-2 hover:border-red-600 hover:text-red-800">Remove</button>
                        </div>
                      </div>
                    </div>
                </div>)}
              </div>
            </div>
            <div className="md:w-4/12">
              
              <div className="bg-slate-100">
                <div className="w-full flex flex-col gap-5 p-3">
                  {carts.map((item) => (
                    <div className="md:hidden block">
                      <div key={item.id} className="gap-3 flex" item={item}>
                      <div className="w-8/12 flex gap-3 items-center">
                        <div className="w-2/12">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="pl-2 w-10/12">
                          <h1 className="font-semibold">
                            {item.title.substring(0, 25)}
                          </h1>
                          <h1 className="text-slate-400 text-base">
                            {item.category}
                          </h1>
                          <h1 className="font-semibold text-xl">
                            ${item.price}
                          </h1>
                        </div>
                      </div>
                      <div className="w-4/12 flex justify-center flex-col items-center gap-2">
                        <div className="flex items-center justify-center gap-5">
                          <h1 className="py-1 px-2 outline outline-slate-300 text-xs">
                            {item.quantity}
                          </h1>
                        </div>
                        <button
                          onClick={() => handleRemove(item.id, subTotal)}
                          className="text-xs bg-red-200 text-white py-1 px-2 rounded-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    </div>
                  ))}
                  <div className="flex p-3 mt-14">
                    <div className="w-8/12 flex flex-col gap-4">
                      <h1 className="font-semibold">Total:</h1>
                    </div>
                    <div className="w-4/12 flex items-end flex-col gap-4">
                      <h1 className="text-xl font-semibold">
                        ${subTotal.toFixed(2)}
                      </h1>
                    </div>
                  </div>
                  <button
                    onClick={handleConfirmOrder}
                    className="bg-indigo-950 py-2 font-semibold text-white"
                  >
                    Procced To Checkout
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <h1 className="text-red-500 bg-yellow-100 w-full text-center mb-10 py-5 text-lg">
              Your cart is empty
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carts;
