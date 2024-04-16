"use client"
import React, { useState } from 'react';
import Icon from './Icon';

interface DropProps {
  title: string; // Troquei String para string para manter consistência
}

interface DropProps {
  title: string;
  isOpen: boolean; 
  toggleDropDown: () => void; 
  words: string[];
  onMouseLeave: () => void;
}

const Dropdown = ({ title, isOpen, onMouseLeave , toggleDropDown, words }: DropProps) => {
  return (
    <div className='relative' onMouseLeave={onMouseLeave}>
      <div onClick={toggleDropDown} className='px-2 pt-2 flex items-center gap-2 cursor-pointer'>
        <h1 className='text-[#3046be]'>{title}</h1>
        <Icon/>
      </div>
      {isOpen && (
        <div className='absolute z-50 right-[5px] top-[30px] w-[200px] bg-[#f4f4f4] p-2 flex flex-col gap-2 rounded-b-md' id='dropdown'>
          {words.map((word, index) => (
            <div key={index} className='p-1 cursor-pointer hover:bg-gray-300'>{word}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;