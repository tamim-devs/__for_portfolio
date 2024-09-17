import React from 'react'
import nav_logo from "../../../assets/Nav__Logo.png"
function Footer() {
  return (
    <>
      <div className='pt-16 bg-slate-800'>
        <div className='container mx-auto bg-slate-800'>
            <div className='flex justify-around bg-slate-800'>
                    <div className='bg-slate-800 flex flex-col gap-4'>
                      <h2 className='text-white  text-4xl font-Raleway font-semibold'>Get an update every week</h2>
                      <p className='text-base font-Raleway text-gray-500 h-12 w-[501px]'>We ensure that your product is delivered in the safest possible manner, at the correct location, at the right time.</p>
                    </div>
                    <div className='flex flex-col gap-6'>
                             <h2 className='text-orange-600 text-lg font-bold'>SUBSCRIBE TO NEWSLETTER</h2>

                             <input class="placeholder:text-slate-400 block bg-transparent w-[386px] border border-[#C5C5D2] rounded-md  h-12    focus:border-black " placeholder="  Enter your mail" type="text" name="search"/>                      

                             <button></button>
                    </div>
            </div>
        </div>
      </div>


      <div className='pt-16 pb-6 bg-slate-950 ' >
          <div className='max-w-container mx-auto '>
              <div className='flex justify-between '>
          <div className='flex flex-col gap-4'><img src={nav_logo} alt="" /><p className='text-gray-500 font-Raleway text-base font-semibold w-[13rem]'>The most trusted Courier
          company in your area.</p></div>

                  <div className='flex gap-4'>
                  <div className='py-6 px-4  flex flex-col gap-4'>
                      <h2 className='text-xl font-Oxanium font-bold text-white'>Other links</h2>
                      <div className='list-none'>
                        <li className='text-base text-gray-500 font-Raleway font-semibold'>Blogs</li>
                        <li className='text-base text-gray-500 font-Raleway font-semibold'>Movers website</li>
                        <li className='text-base text-gray-500 font-Raleway font-semibold'>Traffic Update</li>
                      </div>
                    </div>
                    <div className='py-6 px-4  flex flex-col gap-4'>
                      <h2 className='text-xl font-Oxanium font-bold text-white'>Services</h2>
                      <div className='list-none'>
                        <li className='text-base text-gray-500 font-Raleway font-semibold'>Corporate goods</li>
                        <li className='text-base text-gray-500 font-Raleway font-semibold'>Artworks</li>
                        <li className='text-base text-gray-500 font-Raleway font-semibold'>Documents</li>
                      </div>
                    </div>
                    <div className='py-6 px-4  flex flex-col gap-4'>
                      <h2 className='text-xl font-Oxanium font-bold text-white'>Customer Care </h2>
                      <div className='list-none'>
                        <li className='text-base text-gray-500 font-Raleway font-semibold'>About Us</li>
                        <li className='text-base text-gray-500 font-Raleway font-semibold'>Contact US</li>
                        <li className='text-base text-gray-500 font-Raleway font-semibold'>Get Update</li>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Footer