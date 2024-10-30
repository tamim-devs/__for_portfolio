import React from 'react'
import banner__logo from '../../assets/banner image.png'
function Banner() {
  return (
    <>
    <div className='py-40 bg-[#FFEDC9]'>
      <div className='container mx-auto px-3 sm:px-0'>
          <div className='flex items-center justify-around gap-6'>
              <div className='w-[516px] h-28 mb-24 '>
                <div className='xs:w-[20rem] sm:w-[32rem]'>
                  <h1 className='sm:text-5xl xs:text-4xl xs:font-bold'>A trusted provider of <span className='xs:text-4xl sm:text-6xl sm:font-bold '>courier services.</span></h1>
                </div>
                <div className='mt-4 '>
                <p className='text-[28px]'>We deliver your products safely to your home in a reasonable time.</p>
                </div>
                <div className="banner__btn mt-10">
                  <a href="#" className='py-3 px-5 bg-orange-500 text-white font-bold text-2xl rounded-md'>Get started </a>
                </div>
              </div>
              <div className='xs:hidden sm:w-[958px] sm:h-[518px] sm:block'>
               <img src={banner__logo}  alt=""  className=" w-[958px] h-[518px] top-0 left-0"/>
              </div>
          </div>
      </div>

    </div>
    </>
  )
}

export default Banner