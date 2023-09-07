// import React, { useState, useEffect } from 'react';
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { RxCross1 } from 'react-icons/rx';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const MobileDropdownMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [menuData, setMenuData] = useState([]);

//   useEffect(() => {
//     axios
//       .get('/menuData.json')
//       .then(response => {
//         setMenuData(response.data.menu);
//       })
//       .catch(error => {
//         console.error('Error fetching menu data:', error);
//       });
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleCategoryToggle = category => {
//     category.isOpen = !category.isOpen;
//     setMenuData([...menuData]);
//   };

//   const handleMouseEnter = subcategory => {
//     subcategory.isSubOpen = true;
//     setMenuData([...menuData]);
//   };

//   const handleMouseLeave = subcategory => {
//     subcategory.isSubOpen = false;
//     setMenuData([...menuData]);
//   };

//   return (
//     <div className="md:hidden block bg-white z-10">
//       {isOpen && (
//         <div className="absolute bg-slate-50 md:hidden flex border-b-2 pb-5 flex-col items-center gap-3 justify-center w-full z-10 transition-all ease-in-out duration-300">
//           <h1 className="text-2xl font-semibold">Menu</h1>
//           <input
//             className="outline-none border-2 p-2 rounded-full border-slate-300"
//             type="text"
//             placeholder="Search"
//           />

//           <div className="flex justify-end text-2xl px-5">
//             {isOpen ? (
//               <RxCross1 className="absolute z-10" onClick={toggleMenu} />
//             ) : (
//               <GiHamburgerMenu className="absolute z-10" onClick={toggleMenu} />
//             )}
//             <div>
//               {isOpen && (
//                 <div className="right-0 bg-white w-full shadow-md py-5 h-[500px] overflow-y-scroll z-10">
//                   <ul className="py-2">
//                     {menuData.map(category => (
//                       <div
//                         key={category.name}
//                         className="px-4 py-3 font-semibold border-b-[1px] border-slate-200"
//                       >
//                         <div
//                           className="bg-slate-50 flex justify-between w-full"
//                           onClick={() => handleCategoryToggle(category)}
//                         >
//                           <h1>{category.name}</h1>
//                           {!category.isOpen ? (
//                             <MdKeyboardArrowUp className="text-2xl" />
//                           ) : (
//                             <MdKeyboardArrowDown className="text-2xl" />
//                           )}
//                         </div>
//                         {category.isOpen && (
//                           <ul className="pl-5">
//                             {category.subcategories.map(subcategory => (
//                               <li
//                                 key={subcategory.name}
//                                 className="py-2"
//                                 onMouseEnter={() => handleMouseEnter(subcategory)}
//                                 onMouseLeave={() => handleMouseLeave(subcategory)}
//                               >
//                                 <div className="flex items-center justify-between font-medium">
//                                   {subcategory.name}
//                                   {subcategory.items.length > 0 && (
//                                     <button className="text-gray-400" onClick={() => {}}>
//                                       {subcategory.isSubOpen ? (
//                                         <MdKeyboardArrowUp />
//                                       ) : (
//                                         <MdKeyboardArrowDown />
//                                       )}
//                                     </button>
//                                   )}
//                                 </div>
//                                 {subcategory.isSubOpen && (
//                                   <div className="pl-5 flex flex-col font-normal text-sm">
//                                     {subcategory.items.map(item => (
//                                       <Link key={item} to={`/some-route/${item}`} className="py-2">
//                                         {item}
//                                       </Link>
//                                     ))}
//                                   </div>
//                                 )}
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </div>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MobileDropdownMenu;
