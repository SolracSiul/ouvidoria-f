import React from 'react';
import Button from './Button';
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

function Infos() {
  return (
    <div className='bg-[#f8f8f8] py-[66px]'>
        <div className='container mx-auto flex flex-col items-center justify-center  gap-6 md:flex-row md:justify-between md:max-w-[1400px]'>
            <div className='flex flex-col w-1/3 items-center justify-center gap-2'>
                <h1 className='text-[48px] font-semibold text-blue-800'>Have doubts?</h1>
                <span>We have a team ready to assist you!</span>
                <button
                style={{ width: `${220}px` }}
                className={`bg-blue-400 text-white px-4 py-2 rounded-lg font-bold `}
                >
                Explore more options
                </button>
            </div>
            <div className=' w-3/4 flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-4 ml-8'>
            <div className='bg-[#D3DBE5] hover:bg-[#d3dbe5b6] w-[390px] h-[170px] flex gap-6 rounded-md cursor-pointer'>
                    <div className='pl-8 py-4 flex items-center justify-center'>
                        <AiOutlineWhatsApp size={36} color='blue'  />
                    </div>
                    <div className='flex flex-col p-4 gap-2'>
                        <h1 className='font-bold text-[22px] text-blue-800'>WhatsApp</h1>
                        <span>83 8105-4461</span>
                        <button className='w-[140px] bg-blue-400 text-white rounded-md p-2'>Chat</button>
                    </div>
                </div>
                <div className='bg-[#D3DBE5] hover:bg-[#d3dbe5b6] w-[390px] h-[170px] flex gap-6 rounded-md cursor-pointer'>
                    <div className='pl-8 py-4 flex items-center justify-center'>
                        <FaPhoneAlt size={36} color='blue' /> 
                    </div>
                    <div className='flex flex-col p-4 gap-2'>
                        <h1 className='font-bold text-[22px] text-blue-800'>Call</h1>
                        <span>83 2101 8877</span>
                        <button className='w-[140px] bg-blue-400 text-white rounded-md p-2'>Call Now</button>
                    </div>
                </div>
                <div className='bg-[#D3DBE5] hover:bg-[#d3dbe5b6] w-[390px] h-[170px] flex gap-6 rounded-md cursor-pointer'>
                    <div className='pl-8 py-4 flex items-center justify-center'>
                    <FaFolder size={36} color='blue'/>
                    </div>
                    <div className='flex flex-col p-4 gap-2'>
                        <h1 className='font-bold text-[22px] text-blue-800'>Academic Repository</h1>
                        <span>Notices, portals, resolutions, and other documents </span>
                        <button className='w-[140px] bg-blue-400 text-white rounded-md p-2'>Access Now</button>
                    </div>
                </div>
                <div className='bg-[#D3DBE5] hover:bg-[#d3dbe5b6] w-[390px] h-[170px] flex gap-6 rounded-md cursor-pointer'>
                    <div className='pl-8 py-4 flex items-center justify-center'>
                    <FaUserAlt  size={36} color='blue'/>
                    </div>
                    <div className='flex flex-col p-4 gap-2'>
                        <h1 className='font-bold text-[22px] text-blue-800'>I'm unifacisa</h1>
                        <span>Access to main environments for students and collaborators</span>
                        
                        <button className='w-[140px] bg-blue-400 text-white rounded-md p-2'>Access Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Infos;
