import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DesktopDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubcategory, setActiveSubcategory] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [subMenu, setSubMenu]= useState([])

    useEffect(() => {
        fetch('/menuData.json')
            .then((res) => res.json())
            .then((data) => setMenuItems(data.menu));
    }, []);

    useEffect(()=>{
        fetch('/subMenu.json')
        .then(res=> res.json())
        .then(data=> setSubMenu(data.menu))
    },[])

    const handleToggle = () => {
        setIsOpen(true);
    };

    const handleMouseEnterSubcategory = (subcategory) => {
        setActiveSubcategory(subcategory);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
        setActiveSubcategory(null);
    };

    return (
        <div>
            <div onMouseLeave={handleMouseLeave}>
            <div>
                <ul className='flex gap-4 pl-10 text-[12px] font-semibold leading-6 tracking-wider'>
                    <li onMouseEnter={handleToggle}>PRODUCT</li>
                    <div className='flex gap-3 '>
                        {subMenu.map(item =>(
                            <Link to={item.links}>{item.name}</Link>
                        ))}
                    </div>
                </ul>
            </div>
            {isOpen && (
                <div className='bg-white absolute w-full left-0 top-[98px] z-10 py-3'>
                    <div className='mx-[180px] flex flex-col gap-2'>
                        <div className='flex gap-4 bg-white px-10 py-2'>
                        {menuItems.map(menu => (
                            menu.subcategories.map(item => (
                               <div>
                                    <ul className='text-[12px] font-semibold leading-10 tracking-wide'>
                                        <li
                                        className='cursor-pointer hover:text-pink-600 leading-5 text-black'
                                            onMouseEnter={() =>
                                            handleMouseEnterSubcategory(item.name)}>
                                        {item.name}
                                        </li>
                                 </ul>
                                 <div className='absolute w-11/12 left-0'>
                                    {activeSubcategory === item.name && (
                                        <div className='pt-5 mx-[180px]'>
                                            <div className=' bg-white px-10 text-[13px]'>
                                                <h1>{item.name}</h1>
                                                <div className='grid grid-cols-3 gap-4 py-5'>
                                                    {item.items.map((subItem) => (
                                                       <ul>
                                                            <li key={subItem} className='cursor-pointer leading-6'>
                                                            {subItem}
                                                        </li>
                                                       </ul>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                     )}
                                 </div>
                               </div>
                            ))
                        ))}
                        </div>
                        
                    </div>
                    
                </div>
            )}
            </div>
        </div>
    );
};

export default DesktopDropDown;