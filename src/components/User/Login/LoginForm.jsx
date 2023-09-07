import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [form, setForm]= useState({
        email:'',
        password:''
    })

    const handleSubmitForm=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    console.log(form)
    return (
        <div className='h-full w-full bg-blue-500 overflow-hidden'>
            <div className='md:py-20 pb-20'>
                <div className='md:mx-[76px] px-[20px] md:px-[30px]'>
                <h1 className='text-white text-[25px] md:text-[45px] font-semibold text-center pt-2 md:pt-0 mb-[40px]'>Welcome To ISHO, Please Sign in!</h1>
                <div className='md:flex justify-center'>
                    <div className='p-[40px] w-full md:w-[470px] bg-white'>
                        <h1 className='mb-[5px] text-[18] text-center font-semibold'>I Am Already a Registered ISHO User</h1>
                        <p className='mb-[40px] text-[14px] text-center'>Enter your mobile number and password to sign in</p>
                        <form onSubmit={handleSubmitForm} className='mx-[35px] flex justify-center items-center flex-col gap-5' action="">
                            <input name='email' className='outline-none p-3 bg-slate-50 border-[1px] border-gray-200 md:w-[320px] rounded-full' type="text" placeholder='Phone'/>
                            <input name='password' className='outline-none p-3 bg-slate-50 border-[1px] border-gray-200 md:w-[320px] rounded-full' type="text" placeholder='Password'/>
                            <Link className='text-center text-sm text-blue-500 mt-[10px] mb-[30px]'>Forgot Password?</Link>
                            <input className='p-3 bg-blue-500 font-semibold text-white rounded-full w-full' type="submit" value='Login'/>
                        </form>
                    </div>
                    <div className='p-[40px] w-full md:w-[470px] bg-yellow-400'>
                        <h1 className='mb-[5px] text-[18] text-center font-semibold'>I Want a ISHO User Account.</h1>
                        <p className='mb-[40px] text-[14px] text-center'>If you still don’t have an account isho.com, use this option to access the registration form. Provide your details to create an account on isho.com</p>
                        <form className='mx-[35px] flex justify-center items-center flex-col gap-5' action="">
                            <input className='p-3 bg-white font-semibold sm:text-base text-black rounded-full w-full' type="submit" value='CREATE AN ACCOUNT'/>
                        </form>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default LoginForm;