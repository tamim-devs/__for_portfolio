import React from 'react'
import map from "../../assets/mep__emdad_1 1.png"
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { CiClock1, CiInstagram } from 'react-icons/ci'
import { IoMdMail } from 'react-icons/io'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaTwitterSquare } from 'react-icons/fa'
import { MdLocalPhone } from 'react-icons/md'


function Section3() {
  return (
    <>
      <div>
        <div className='pt-72 pb-10 bg-[#FFEDC9]'>
            <div className='container mx-auto'>
                  <div className='flex flex-col items-center justify-center'> 
                      <h2 className='text-orange-600 text-3xl font-bold text-center'>FIND US</h2>
                      <h3 className='text-6xl font-bold text-gray-800'>Our services for you</h3>
                      <div className='mt-12 flex gap-x-4'>
                          <div>
                                <img src={map} alt="" className='w-[460px] h-[460px]' />
                          </div>
                          <div className='w-[536px] h-[452px] justify-start  bg-white '>
                            <div className='mt-20 ml-6 flex flex-col'>
                                <p className='text-black text-xl font-Raleway font-semibold'>Contact with us</p>
                                <div className='flex flex-col gap-4 mt-14'>
                                  <div className='flex items-center gap-1'>
                                  <span className='text-2xl text-[#FFAF0F]'><HiOutlineLocationMarker /></span> <p className='text-base font-Raleway text-gray-500'>2277 Lorem Ave, San Diego, CA 22553</p>
                                  </div>
                                  <div className='flex items-center gap-1'>
                                  <span className='text-2xl text-[#FFAF0F]'><CiClock1 />
                                  </span> <p className='text-base font-Raleway text-gray-500'>Monday - Friday: 10 am - 10pm  Sunday: 11 am - 9pm</p>
                                  </div>
                                  <div className='flex items-center gap-1'>
                                  <span className='text-2xl text-[#FFAF0F]'> <IoMdMail /></span> <p className='text-base font-Raleway text-gray-500'>info@quriarbox.com</p>
                                  </div>
                                  <div className='flex gap-2 mt-14'>
                                    <span className='text-2xl hover:text-orange-600'><FaSquareFacebook /></span>
                                    <span className='text-2xl hover:text-orange-600'><CiInstagram /></span>
                                    <span className='text-2xl hover:text-orange-600'><FaTwitterSquare /></span>
                                  </div>
                            
                                </div>
                            </div>
                          </div>
                      </div>
                      <div className="banner__btn mt-10 flex items-center">
                           <div  className='py-3 flex items-center gap-4 cursor-pointer px-32 bg-orange-500 text-white font-bold text-base rounded-md'><MdLocalPhone />Call us to delivery  123-456789</div>
                      </div>
                  </div>
            </div>
        </div>
      </div>
    
    </>
  )
}

export default Section3