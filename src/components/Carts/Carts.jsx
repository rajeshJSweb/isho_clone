import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../features/addCartSlice';

const Carts = () => {
    const carts = useSelector(state => (state.addCart.cart))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [orderConfirmed, setOrderConfirmed] = useState(false)
    const [isEmptyCart, setIsEmptyCart] = useState(false)

    const shippingCharge = 30;
    const subTotal = carts.reduce((total, item)=> total+item.quantity* item.price, 0)
    const totalAmount = subTotal + shippingCharge;


    const handleRemove=(productId,subTotal)=>{
        if(productId || subTotal===0){
            const confirmed = window.confirm('Are are want to remove from cart')
            if(confirmed){
                dispatch(removeFromCart(productId))
            }
            navigate('/')
        }
        console.log(productId)
    }


    const handleConfirmOrder = (subTotal) => {
        
        if(subTotal>0){
            setOrderConfirmed(true)
            navigate('/login')
        }
        else{
            setIsEmptyCart(true)
            setTimeout(()=>{
                navigate('/')
            },3000)

        }
    
    }    

    return (
       <div className=''>
            {orderConfirmed && (
                <div className='bg-green-200 text-green-800 p-2 text-center mt-4'>
                    Order confirmed successfully! You will be redirected to the home page.
                </div>
            )}
            {
                isEmptyCart && (
                    <div className='bg-red-400 text-red-800 p-2 text-center mt-4'>
                    Your Cart is Empty! You will be redirected to the home page.
                </div>
                )
            }
        <div className='md:mx-[76px] md:px-[30px]'>
        <div className='md:flex w-full gap-2 my-[100px]'>
            <div className='md:w-8/12'>
                <h1 className='text-lg font-semibold py-3'>Delivery Information</h1>
                <div className='bg-slate-100 p-3'>
                    <label htmlFor="">Name</label>
                </div>
            </div>
            <div className='md:w-4/12'>
                <h1 className='text-lg font-semibold py-3'>Order Summery</h1>
                <div className='bg-slate-100'>
                    <div className='w-full flex flex-col gap-5 p-3'>
                        {
                            carts.map(item => <div className='flex gap-3' item={item}>
                               <div className='w-8/12 flex gap-3 items-center'>
                                    <div className='w-2/12'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='pl-2 w-10/12'>
                                        <h1 className='font-semibold'>{item.title.substring(0,25)}</h1>
                                        <h1 className='text-slate-400 text-base'>{item.category}</h1>
                                        <h1 className='font-semibold text-xl'>${item.price}</h1>
                                    </div>
                               </div>
                               <div className='w-4/12 flex justify-center flex-col items-center gap-2'>
                                <div className='flex items-center justify-center gap-5'>
                                    <h1 className='py-1 px-2 outline outline-slate-300 text-xs'>{item.quantity}</h1>
                                </div>
                                <button onClick={()=> handleRemove(item.id, subTotal)} className='text-xs bg-red-200 text-white py-1 px-2 rounded-sm'>Remove</button>
                               </div>
                            </div>)
                        }
                        <div className='flex p-3 mt-14'>
                           <div className='w-8/12 flex flex-col gap-4'>
                                <h1 className='font-semibold'>Total:</h1>
                                <h1>Shipping:</h1>
                                <h1 className='text-xl font-semibold'>Total(USD):</h1>
                           </div>
                           <div className='w-4/12 flex items-end flex-col gap-4'>
                                <h1 className='font-semibold'>${subTotal.toFixed(2)}</h1>
                                <h1>${shippingCharge}</h1>
                                <h1 className='text-xl font-semibold'>${totalAmount.toFixed(2)}</h1>
                           </div>
                           
                        </div>
                        <button onClick={()=>handleConfirmOrder(subTotal)} className='bg-indigo-950 py-2 font-semibold text-white'>Confirm Order</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
       </div>
    );
};

export default Carts;