import React, { useEffect } from 'react';
import { BiSolidUser } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { AiFillGift } from 'react-icons/ai';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../features/logOutSlice';

const TopNav = () => {
  const {user}= useSelector(state => state.login)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const items = [
    {
      icon: <BiSolidShoppingBags />,
      name: 'Corporate',
      link: '/',
    },
    {
      icon: <AiFillGift />,
      name: 'Gift',
    },
    {
      icon: <MdLocationOn />,
      name: 'Find Store',
    }
  ];

  const handleLogout=(event)=>{
    event.preventDefault()
    dispatch(logOut())
    .then(res=>{
      if(res){
        navigate('/login')
      }
    })
  }

  return (
    <div className="pt-3 pb-2 md:block hidden">
      <div className="flex justify-between">
        <div className="flex items-center justify-start gap-2 text-[12px]">
          <BsFillTelephoneFill />
          <p>+8801714121645</p>
        </div>
        <div className="middle-section">
         
        </div>
        <div className="flex gap-4">
          {items.map((item, index) => (
            <div className="flex items-center" key={index}>
              <Link to={item.link} className="flex items-center gap-2 text-[12px] cursor-pointer">
                    <h1 className='text-pink-500'>{item.icon}</h1>
                    <h1>{item.name}</h1>
              </Link>
            </div>
          ))}
          {user? <Link onClick={handleLogout} className="text-[12px] cursor-pointer">Logout</Link>:<Link to='/login' className="text-[12px] cursor-pointer">Login</Link>}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
