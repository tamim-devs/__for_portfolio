import React, { useState } from 'react'
import nav__logo from "../../assets/Nav__Logo.png"
import { IoSearch } from "react-icons/io5";
import { FaBars } from 'react-icons/fa6';

export default function Navbar() {
  const [show, SetShow] = useState(false)

  return (
    <>
      <div className='py-4 bg-white'>
          <div className='container mx-auto px-3 sm:px-0'>
              <div className='flex items-center justify-between px-3 sm:px-0 '>
              <div className="nav__logo">
                <img src={nav__logo} alt="" />
              </div>
             <div className='hidden sm:block'>
             <div className="list-none flex gap-6 items-center">
                <li className='text-black cursor-pointer hover:text-[#F95C19] duration-700 text-base font-semibold'>Home</li>
                <li className='text-black cursor-pointer hover:text-[#F95C19] duration-700 text-base font-semibold'>Our services</li>
                <li className='text-black cursor-pointer hover:text-[#F95C19] duration-700 text-base font-semibold'>About Us</li>
                <li className='text-black cursor-pointer hover:text-[#F95C19] duration-700 text-base font-semibold'>What’s new?</li>
              <div className="flex  gap-2 ml-11 items-center">
                <a className='bg-[#FFEDC9] py-4 px-4 text-orange-600 '><IoSearch /></a>
                <a href="" className='py-3 px-5 bg-[#FFE4D9] text-orange-500 font-bold'>Contact us</a>
              </div>
              </div>
             </div>
             <div href="" className='py-3 px-5 bg-white text-black font-bold block sm:hidden'>
             <FaBars onClick={()=> SetShow(!show)}   className='text-black text-2xl btn_bar ' />

             </div>

            
              </div>
              <div className={`md:hidden flex  mt-12 flex-col gap-y-4 items-start   list-none cursor-pointer ${show ? "block": "hidden"}`}>
                <li className='text-black cursor-pointer hover:text-[#F95C19] duration-700 text-base font-semibold'>Home</li>
                <li className='text-black cursor-pointer hover:text-[#F95C19] duration-700 text-base font-semibold'>Our services</li>
                <li className='text-black cursor-pointer hover:text-[#F95C19] duration-700 text-base font-semibold'>About Us</li>
                <li className='text-black cursor-pointer hover:text-[#F95C19] duration-700 text-base font-semibold'>What’s new?</li>
              <div className="flex  gap-2 items-center">
                <a href="" className='py-3 px-5 bg-[#FFE4D9] text-orange-500 font-bold'>Contact us</a>
              </div>
              </div>
          </div>
      </div>
    </>
  )
}
