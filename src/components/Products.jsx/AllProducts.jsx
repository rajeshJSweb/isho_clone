import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import AllProduct from './AllProduct';

const AllProducts = () => {
  const [isDivisionOpen, setIsDivisionOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const divisions = ['Dhaka', 'Chittagong', 'Khulna', 'Rangpur'];
  const categories = ["men's clothing", 'Women', 'electronics', 'Summer', 'Bed', 'Chair', 'Sofa', 'Table', 'Spring', 'Plastic'];

  const handleDivisionSelect = (division) => {
    setSelectedDivision(division);
    setIsDivisionOpen(false);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsCategoryOpen(false);
  };

  const all = 'All Category';

  // Refs to capture clicks outside the dropdowns
  const categoryRef = useRef(null);
  const divisionRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the category dropdown
    const handleCategoryClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };

    // Function to handle clicks outside the division dropdown
    const handleDivisionClickOutside = (event) => {
      if (divisionRef.current && !divisionRef.current.contains(event.target)) {
        setIsDivisionOpen(false);
      }
    };

    // Attach the event listeners
    document.addEventListener('mousedown', handleCategoryClickOutside);
    document.addEventListener('mousedown', handleDivisionClickOutside);

    // Cleanup the event listeners on component unmount
    return () => {
      document.removeEventListener('mousedown', handleCategoryClickOutside);
      document.removeEventListener('mousedown', handleDivisionClickOutside);
    };
  }, []);

  return (
    <div className='md:mx-[64px] md:px-[30px]'>
      <div className='pt-[30px] pb-[50px] md:flex mx-auto justify-between hidden'>
        <div className='w-auto border-2 border-gray-400 rounded-full py-2 px-5'>
          <div className='flex items-center gap-3'>
            <h1 onClick={() => setIsCategoryOpen(!isCategoryOpen)} className='hover:text-pink-700 cursor-pointer font-semibold'>
              {isCategoryOpen ? selectedCategory : all}
            </h1>
            <IoIosArrowDown />
          </div>
          {isCategoryOpen && (
            <div
              className='h-[200px] w-[125px] overflow-y-scroll left-[95px] z-10 bg-slate-100 mt-3 absolute pt-4 px-3 shadow-xl rounded-md'
              ref={categoryRef} // Assign the ref to the category dropdown
            >
              <ul className='flex flex-col gap-2'>
                {categories.map((category, index) => (
                  <li key={index} className='cursor-pointer' onClick={() => handleCategorySelect(category)}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className='w-8/12'>
          {/* Middle Section */}
          <div className='mx-auto rounded-full border-[1px] border-slate-900 px-10'>
            <div className='flex justify-between'>
              {/* ... (the rest of your code remains the same) */}
            </div>
          </div>
        </div>
        <div className='w-auto border-2 border-gray-400 rounded-full py-2 px-5 cursor-pointer'>
          <div className='flex items-center gap-3'>
            <h1 onClick={() => setIsDivisionOpen(!isDivisionOpen)} className='hover:text-pink-700'>All Divisions</h1>
            <IoIosArrowDown />
          </div>
          {isDivisionOpen && (
            <div
              className='h-[200px] w-[125px] overflow-y-scroll absolute z-10 mt-3 pt-4 bg-slate-100 right-[95px] px-3 shadow-xl rounded-md'
              ref={divisionRef} // Assign the ref to the division dropdown
            >
              <ul>
                {divisions.map((division, index) => (
                  <li key={index} onClick={() => handleDivisionSelect(division)}>
                    {division}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <AllProduct selectedCategory={selectedCategory} />
    </div>
  );
};

export default AllProducts;
