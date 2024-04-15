import React from 'react';
import Image from 'next/image';
import unifacisa from '../../../public/assets/images/unifacisaLogo.png';
import { MdDehaze } from 'react-icons/md';
import Button from './Button';
import Dropdown from './Dropdown';
import { RiMailSendLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { LuFlag } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { BsChatLeftText } from "react-icons/bs";


function Header() {
  return (
    <header className='mx-auto md:max-w-[1400px]'>
        <nav>
            <ul className='px-4 py-4 md:hidden'>
                <li className='flex justify-between'>
                    <img src="/images/unifacisaLogo.png" alt="" width={190} height={52}/>
                    <MdDehaze size={42} />
                </li>
                <li className='flex justify-center items-center w-full'>
                <button className={`bg-green-300 text-[#3f3d3d] px-4 py-2 rounded-lg font-bold w-[250px] `}>
                Sign up
                </button>
                </li>
            </ul>
            <div className='hidden md:flex flex-col container mx-auto h-[105px] py-4'>
                <div className='flex justify-between'>
                    <div>
                        <ul className='flex gap-4'>
                            <li className='flex items-center gap-1'><BsChatLeftText />Contact Us</li>
                            <li className='flex items-center gap-1'> <FaUser />I am Unifacisa</li>
                            <li className='flex items-center gap-1'><LuFlag />Track your application</li>
                            <li className='flex items-center gap-1'><CiSearch />SearchBar</li>
                        </ul>
                    </div>
                    <div>
                    <button className={`bg-green-300 text-[#3f3d3d] px-4 py-2 rounded-lg font-bold w-[250px] `}>
                Sign up
                </button>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src="/images/unifacisaLogo.png" alt="" width={190} height={52}/>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                              <Dropdown title="Courses"/>
                              <Dropdown title="Scholarships and Discounts"/>
                              <Dropdown title="Scholarships and Discounts"/>
                              <Dropdown title="Unifacisa"/>
                        </div>
                        </div>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;
