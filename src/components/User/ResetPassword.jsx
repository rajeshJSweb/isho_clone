import React from 'react';
import { Link } from 'react-router-dom';
import BottomBanner from '../Home/BottomBanner';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../features/resetPasswordSlice';

const ResetPassword = () => {
    const {user}= useSelector(state => state.password)

    const dispatch = useDispatch()

    const handleResetPassword=async(event)=>{
        event.preventDefault()
        const email= event.target.email.value
        await dispatch(resetPassword({email}))
    }

    console.log(user)

    return (
        <div>
            <div className='lg:py-20 pb-20 bg-[#3BC4F2]'>
                <div className='px-5 sm:px-9 md:mx-[76px] md:px-[30px]'>
                   <div className='flex flex-col lg:flex-row lg:justify-center items-center h-full lg:gap-0'>
                        <div className='w-full sm:w-[470px] lg:h-[405px] pt-5 px-2'>
                            <h1 className='text-[25px] lg:text-5xl text-white font-semibold mb-2'>Create your ISHO Account</h1>
                            <p className='text-base mb-7 text-white'>ISHO follows the philosophy of cumulative knowledge construction to develop the most valuable user experience, evolving customer needs while embracing the collaborative nature of design.</p>
                           
                        </div>
                        <div className='w-full lg:w-[470px] bg-white px-5 py-10 lg:p-10 flex flex-col items-center relative'>
                            <p className={`${user&& (user?.error || user?.message)? 'mb-5':'mb-10'}`}>Please enter your registered email</p>
                            {user&& (user?.error || user?.message)&& <div className='mb-5 border-2 border-pink-500 p-2'>
                                    <p>{user.error}</p>
                                    <p>{user.message}</p>
                                </div>}
                            <div className='absolute top-2'>
                            </div>
                            <div className='flex items-center flex-col'>
                                <form onSubmit={handleResetPassword} className='w-full flex flex-col items-center gap-3'>
                                    <input className='border-[1px] border-gray-300 outline-none w-full rounded-full py-3 px-5' type="email" name='email' placeholder='Enter Email'/>
                                    <input className='bg-[#3BC4F2] text-[10px] cursor-pointer lg:text-[14px] my-5 px-5 py-3 rounded-full w-full font-semibold text-white' type="submit" value="RESET PASSWORD" />
                                </form>
                                <Link to='/login' className='text-[#3BC4F2] cursor-pointer'>Back to Login page</Link>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <BottomBanner/>
        </div>
    );
};

export default ResetPassword;