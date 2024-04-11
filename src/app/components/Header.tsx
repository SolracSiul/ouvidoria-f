import React from 'react'
import Image from 'next/image'
import unifacisa from '../../../public/assets/images/unifacisaLogo.png'
import { MdDehaze } from "react-icons/md";
import Button from './Button';
import Dropdown from './Dropdown';
function Header() {
  return (
    <header>
        <nav>
            <ul className='px-4 py-4 md:hidden'>
                <li className='flex justify-between'>
                    <img src="/images/unifacisaLogo.png" alt="" width={190} height={52}/>
                    <MdDehaze size={42} />
                </li>
                <li className='flex justify-center items-center w-full'>
                    <Button title='Inscreva-se' color="red-700" textColor='black' width={350}/>
                </li>
            </ul>
            <div className='hidden md:flex flex-col container mx-auto  h-[105px] py-4'>
                <div className='flex justify-between'>
                    <div>
                        <ul className='flex gap-4'>
                            <li>Fale conosco</li>
                            <li>Sou Unifacisa</li>
                            <li>Acompanhe sua inscrição</li>
                            <li>SearchBar</li>
                        </ul>
                    </div>
                    <div>
                        <Button title='Inscreva-se' color="red-700" textColor='black' width={250}/>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <img src="/images/unifacisaLogo.png" alt="" width={190} height={52}/>
                    </div>
                    <div>
                        <div className='flex gap-4'>
                              <Dropdown/>
                              <Dropdown/>
                              <Dropdown/>
                              <Dropdown/>
                        </div>
                        </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header