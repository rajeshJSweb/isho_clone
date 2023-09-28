import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { BiSolidCartDownload } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import axios from "axios";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    axios
      .get("/menuData.json")
      .then((response) => {
        setMenuData(response.data.menu);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
      });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryToggle = (category) => {
    const updatedMenuData = menuData.map((item) => {
      if (item.name === category.name) {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      }
      return item;
    });
    setMenuData(updatedMenuData);
  };

  const handleMouseEnter = (subcategory) => {
    subcategory.isSubOpen = true;
    setMenuData([...menuData]);
  };

  const handleMouseLeave = (subcategory) => {
    subcategory.isSubOpen = false;
    setMenuData([...menuData]);
  };

  return (
    <div className="block md:hidden">
      <div className="absolute w-full z-10 bg-white">
        <div className="float-right text-2xl mx-5">
          {isOpen ? (
            <RxCross1 onClick={toggleMenu} />
          ) : (
            <GiHamburgerMenu onClick={toggleMenu} />
          )}
        </div>
        {!isOpen ? (
          <div className="flex justify-between text-2xl">
            <Link to="/" className="font-semibold text-2xl pl-5">
              iSHO
            </Link>
            <BiSolidCartDownload className="" />
          </div>
        ) : (
          <div className="">
            <div className="flex flex-col items-center">
              <h1 className="py-2 font-semibold text-4xl">Menu</h1>
              <input
                className="p-2 border-[1px] outline-none rounded-full"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="">
              <div className="right-0 bg-white w-full shadow-md py-5 h-[500px] overflow-y-scroll z-10">
                <ul className="py-2">
                  {menuData.map((category) => (
                    <div
                      key={category.name}
                      className="px-4 py-3 font-semibold border-b-[1px] border-slate-200"
                    >
                      <div
                        className="bg-slate-50 flex justify-between w-full"
                        onClick={() => handleCategoryToggle(category)}
                      >
                        <h1>{category.name}</h1>
                        {!category.isOpen ? (
                          <MdKeyboardArrowDown className="text-2xl" />
                        ) : (
                          <MdKeyboardArrowUp className="text-2xl" />
                        )}
                      </div>
                      {category.isOpen && (
                        <ul className="pl-5">
                          {category.subcategories.map((subcategory) => (
                            <li
                              key={subcategory.name}
                              className="py-2"
                              onMouseEnter={() => handleMouseEnter(subcategory)}
                              onMouseLeave={() => handleMouseLeave(subcategory)}
                            >
                              <div className="flex items-center justify-between font-medium">
                                {subcategory.name}
                                {subcategory.items.length > 0 && (
                                  <button
                                    className="text-gray-400"
                                    onClick={() => {}}
                                  >
                                    {subcategory.isSubOpen ? (
                                      <MdKeyboardArrowUp />
                                    ) : (
                                      <MdKeyboardArrowDown />
                                    )}
                                  </button>
                                )}
                              </div>
                              {subcategory.isSubOpen && (
                                <div className="pl-5 flex flex-col font-normal text-sm">
                                  {subcategory.items.map((item) => (
                                    <Link
                                      key={item}
                                      to={`/category/${item}`}
                                      className="py-2"
                                    >
                                      {item}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
