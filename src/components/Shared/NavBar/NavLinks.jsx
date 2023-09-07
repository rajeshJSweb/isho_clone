import axios from 'axios';
import React, { useEffect, useState } from 'react';

const NavLinks = () => {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        axios.get('/menuData.json')
            .then(res => {
                setMenuData(res.data.menu);
            })
            .catch(error => {
                console.log(error.message);
            });
    }, []);

    const [openCategory, setOpenCategory] = useState(null);
    const [openSubcategory, setOpenSubcategory] = useState(null);

    let subcategoryTimeout;

    const handleCategoryEnter = (index) => {
        clearTimeout(subcategoryTimeout);
        setOpenSubcategory(null);
        setOpenCategory(index);
    };

    const handleSubcategoryEnter = (subcategory) => {
        clearTimeout(subcategoryTimeout);
        setOpenSubcategory(subcategory);
    };

    const handleSubcategoryLeave = () => {
        subcategoryTimeout = setTimeout(() => {
            setOpenSubcategory(null);
        }, 300);
    };

    const handleCategoryLeave = () => {
        clearTimeout(subcategoryTimeout);
        setOpenCategory(null);
        setOpenSubcategory(null);
    };

    return (
        <div>
            <div className='flex gap-4 relative'>
                {menuData.map((category, index) => (
                    <div
                        key={category.name}
                        onMouseEnter={() => handleCategoryEnter(index)}
                        onMouseLeave={handleCategoryLeave} // Handle category mouse leave
                    >
                        {category.name}
                        {openCategory === index && (
                            <div className='w-full bg-slate-50 absolute flex gap-3 top-full left-0 rounded-md shadow-md'>
                                {category.subcategories.map(subcategory => (
                                    <div
                                        className='w-full mt-4 px-2'
                                        key={subcategory.name}
                                        onMouseEnter={() => handleSubcategoryEnter(subcategory.name)}
                                        onMouseLeave={handleSubcategoryLeave} // Handle subcategory mouse leave
                                    >
                                        <h1>{subcategory.name}</h1>
                                        {openSubcategory === subcategory.name && (
                                            <div className='w-full flex flex-col gap-5 p-3'>
                                                {subcategory.items.map(item => (
                                                    <div 
                                                    className='pl-5'
                                                     key={item}>{item}</div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavLinks;
