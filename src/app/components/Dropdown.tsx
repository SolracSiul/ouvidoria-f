"use client"
import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface DropProps{
  title: String;
}
const Dropdown = ({title}: DropProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsOpen(true);
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
      setIsHovered(false);
    };
  
    return (
      <div className="relative inline-block text-left">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            type="button"
            className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium ${isHovered ? 'text-blue-400' : 'text-gray-700'} `}
          >
            {title}
            {isOpen ? (
              <IoMdArrowDropup className="w-5 h-5 ml-2" />
            ) : (
              <IoMdArrowDropdown className="w-5 h-5 ml-2" />
            )}
          </button>
        </div>
  
        {isOpen && (
          <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Item 1</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Item 2</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Item 3</a>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Dropdown;
