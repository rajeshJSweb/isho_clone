import React, { useEffect, useState } from 'react';

const DesktopMenu = () => {
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
        <div className='pl-5 w-full'>
            <div className='flex gap-2 text-[14px]'>
                <div onMouseLeave={handleMouseLeave} className='relative'>
                    <ul className=''>
                        <li
                            className='cursor-pointer hover:text-pink-600 leading-6'
                            onMouseEnter={handleToggle}
                            
                        >
                            PRODUCT
                        </li>
                        <div className='flex gap-3 absolute py-5 z-10 bg-white w-full'>
                            {isOpen &&
                                menuItems.map((menu) => (
                                    menu.subcategories.map((item) => (
                                        <ul className='p-2 px-4' key={item.name}>
                                            <li
                                                className='font-semibold cursor-pointer hover:text-pink-600 leading-5 text-black tracking-tight'
                                                onMouseEnter={() =>
                                                    handleMouseEnterSubcategory(item.name)
                                                }
                                            >
                                                {item.name}
                                            </li>
                                            {activeSubcategory === item.name && (
                                                <div className='pt-5 relative'>
                                                  <div className=' bg-white absolute w-full'>
                                                    <h1 className='font-semibold text-lg'>{item.name}</h1>
                                                    <ul className='pl-5 flex flex-col gap-3 w-full'>
                                                        {item.items.map((subItem) => (
                                                            <li key={subItem} className='cursor-pointer leading-6'>
                                                                {subItem}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                  </div>
                                                </div>
                                            )}
                                        </ul>
                                    ))
                                ))}
                        </div>
                    </ul>
                </div>
                <div className='flex gap-4'>
                    {
                        subMenu.map(sub => (
                            <ul className='flex'>
                                <li className='cursor-pointer hover:text-pink-600 leading-6'>{sub.name}</li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default DesktopMenu;
