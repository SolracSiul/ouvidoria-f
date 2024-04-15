import React from 'react';
import Button from './Button';
import { AiOutlineWhatsApp } from "react-icons/ai";

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
            <div className=' w-3/4 flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-2 ml-8'>
                <div className='bg-[#d3dbe5a8] w-[420px] h-[150px] flex gap-[18px] rounded-md'>
                    <div className='pl-8 py-4 flex items-center justify-center'>
                        <AiOutlineWhatsApp size={52} color='green' />
                    </div>
                    <div className='flex flex-col p-4 gap-2'>
                        <h1 className='font-bold text-[32px] text-blue-800'>WhatsApp</h1>
                        <span>83 8105-4461</span>
                        <Button title='Chat' color='blue-300' width={120} textColor='white'/>
                    </div>
                </div>
                <div className='bg-[#D3DBE5] w-[420px] h-[150px] flex gap-6 rounded-md'>
                    <div className='pl-8 py-4 flex items-center justify-center'>
                        <AiOutlineWhatsApp size={52} color='green' />
                    </div>
                    <div className='flex flex-col p-4 gap-2'>
                        <h1 className='font-bold text-[32px] text-blue-800'>WhatsApp</h1>
                        <span>83 8105-4461</span>
                        <Button title='Chat' color='blue-300' width={120} textColor='white'/>
                    </div>
                </div>
                <div className='bg-[#D3DBE5] w-[420px] h-[150px] flex gap-6 rounded-md'>
                    <div className='pl-8 py-4 flex items-center justify-center'>
                        <AiOutlineWhatsApp size={52} color='green' />
                    </div>
                    <div className='flex flex-col p-4 gap-2'>
                        <h1 className='font-bold text-[32px] text-blue-800'>WhatsApp</h1>
                        <span>83 8105-4461</span>
                        <Button title='Chat' color='blue-300' width={120} textColor='white'/>
                    </div>
                </div>
                <div className='bg-[#D3DBE5] w-[420px] h-[150px] flex gap-6 rounded-md'>
                    <div className='pl-8 py-4 flex items-center justify-center'>
                        <AiOutlineWhatsApp size={52} color='green' />
                    </div>
                    <div className='flex flex-col p-4 gap-2'>
                        <h1 className='font-bold text-[32px] text-blue-800'>WhatsApp</h1>
                        <span>83 8105-4461</span>
                        <Button title='Chat' color='blue-300' width={120} textColor='white'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Infos;
