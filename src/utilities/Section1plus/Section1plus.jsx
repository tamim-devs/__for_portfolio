import React from 'react'
import Quote from "../../assets/Quote icon.png"
import Star from "../../assets/Vector.png"
import Max_Ernst from "../../assets/1200px-Max_Ernst_1968 1.png"


function Section1plus() {
  return (
    <>
      <div className='py-44 bg-[#FFEDC9]'>
        <div className='container mx-auto'>
            <div className='flex justify-center items-center relative '>
                <img src={Quote} alt="" className='absolute mr-[700px]' />
                <div className='flex flex-col justify-center  gap-y-1 '>
                  <h2 className='text-orange-600 text-4xl font-bold text-center'>TESTIMONIAL</h2>
                  <h3 className='text-5xl font-bold font-Raleway text-gray-800'>Our Awesome Clients</h3>
                </div>
            </div>

         <div className='flex justify-center mt-20'>
              <div className='sm:w-[873px] sm:h-[304px] bg-white '>
                    <div className='ml-8 mt-6 flex flex-col gap-6'>
                      <h2 className='text-orange-600 text-lg font-bold '>Fantastic service!</h2>
                      <p className='text-base  font-Raleway text-gray-600 font-[400]'>I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
                      <div className=' xs:flex xs:flex-col xs:gap-4 sm:flex sm:flex-row  sm:items-center sm:justify-between'>
                         <div className='flex gap-2'>
                         <img src={Star} alt="" />  
                         <img src={Star} alt="" />  
                         <img src={Star} alt="" />  
                         <img src={Star} alt="" />  
                         <img src={Star} alt="" />  
                         </div>
                      <div className='flex gap-2'>
                          <div>
                           <p className='text-right text-base font-Raleway font-bold'>Yves Tanguy</p>
                           <p className='text-right text-base font-Raleway '>Chief Executive, DLF</p>
                          </div>
                          <div>
                            <img src={Max_Ernst} alt="" className='rounded-full mr-6' />
                          </div>
                      </div>
                      </div>
                      </div>
              </div>
         </div>

        </div>
      </div>
    
    </>
  )
}

export default Section1plus