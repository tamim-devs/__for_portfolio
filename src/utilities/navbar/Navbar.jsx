import React from 'react'
import nav__logo from "../../assets/Nav__Logo.png"
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <div className='py-4 bg-white '>
          <div className='container mx-auto'>
              <div className='flex items-center justify-between'>
              <div className="nav__logo">
                <img src={nav__logo} alt="" />
              </div>
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
          </div>
      </div>
    </>
  )
}
