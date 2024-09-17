import React from 'react'
import icon1 from '../../assets/iCON1.png'
import icon2 from '../../assets/Icon2.png'
import icon3 from '../../assets/Icon3.png'
import Trophy from '../../assets/Trophy.png'
import Map from '../../assets/IconSpace_Map_24Px.png'
import Man from '../../assets/iconspace_Man_25px.png'
import Bag from '../../assets/iconspace_Business Bag_25px.png'
import Truck from '../../assets/iconspace_Cement Truck_25px.png'
import Rectangle from '../../assets/Rectangle 12.png'
import Iconplay from '../../assets/Iconplay.png'



function Section1() {
  return (
    <>
    <div className=' bg-[#FFEDC9] '>
        <div className='container mx-auto'>
            <div className='flex justify-center'>
              <div className='flex flex-col'>
                <h2 className='text-orange-600 text-3xl font-bold text-center'>SERVICES</h2>
                <h3 className='text-6xl font-bold text-gray-800'>Our services for you</h3>
              </div>
               </div>
            <div>
   {/* -------------------------bax----wraep// */}

              <div className='flex gap-x-8 justify-center'>

              <div className='w-[420px] h-[583px] bg-white flex flex-col items-center justify-center mt-32'>
                  <div className='flex justify-center'>
                    <img src={icon1} alt="" />
                  </div>
                  <div className='flex justify-center text-[25px] font-bold mt-7'>
                    <h2 className='font-tamim'>Business Services</h2>
                  </div>
                  <div className=' w-[301.813px;] h-[96px] mt-8 '>
                    <p className='text-base font-Raleway text-gray-600 font-[400]'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
                  </div>
                  <div className='flex flex-col mr-28 '>
                    <li className='text-xl text-gray-600'>Corporate goods</li>
                    <li className='text-xl text-gray-600'>Shipment</li>
                    <li className='text-xl text-gray-600'>Accesories</li>
                  </div>
                  <div className="py-3 px-24 border-2 rounded-md border-orange-500 hover:bg-orange-500 duration-500 hover:text-white cursor-pointer text-xl font-semibold text-orange-600 mt-16">Learn more</div>

                </div>

                <div className='w-[420px] h-[583px] bg-white flex flex-col items-center justify-center mt-32'>
                  <div className='flex justify-center'>
                    <img src={icon2} alt="" />
                  </div>
                  <div className='flex justify-center text-[25px] font-bold mt-7'>
                    <h2 className='font-tamim'>Statewide Services</h2>
                  </div>
                  <div className=' w-[301.813px;] h-[96px] mt-8 '>
                    <p className='text-base font-Raleway text-gray-600 font-[400]'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
                  </div>
                  <div className='flex flex-col mr-28 '>
                    <li className='text-xl text-gray-600'>Corporate goods</li>
                    <li className='text-xl text-gray-600'>Shipment</li>
                    <li className='text-xl text-gray-600'>Accesories</li>
                  </div>
                  <div className="py-3 px-24 border-2 rounded-md border-orange-500 hover:bg-orange-500 duration-500 hover:text-white cursor-pointer text-xl font-semibold text-orange-600 mt-16">Learn more</div>

                </div>

                <div className='w-[420px] h-[583px] bg-white flex flex-col items-center justify-center mt-32'>
                  <div className='flex justify-center'>
                    <img src={icon3} alt="" />
                  </div>
                  <div className='flex justify-center text-[25px] font-bold mt-7'>
                    <h2 className='font-tamim'>Personal Services</h2>
                  </div>
                  <div className=' w-[301.813px;] h-[96px] mt-8 '>
                    <p className='text-base font-Raleway text-gray-600 font-[400]'>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
                  </div>
                  <div className='flex flex-col mr-28 '>
                    <li className='text-xl text-gray-600'>Corporate goods</li>
                    <li className='text-xl text-gray-600'>Shipment</li>
                    <li className='text-xl text-gray-600'>Accesories</li>
                  </div>

                  <div className="py-3 px-24 border-2 rounded-md border-orange-500 hover:bg-orange-500 duration-500 hover:text-white cursor-pointer text-xl font-semibold text-orange-600 mt-16">Learn more</div>
                </div>


              </div>
               
                                

            </div>
{/* _____________________________icon team */}
          <div className='pt-40 pb-32  flex justify-center gap-x-48 '>
              <div className='flex flex-col justify-center'>
                <img src={Trophy} alt="" />
                <span className='text-center text-orange-500 text-4xl font-[800]'>26+</span>
                <p className='mt-1 font-Raleway text-xl font-se'>Awards  won</p>
              </div>
              <div className='flex flex-col justify-center'>
                <img src={Map} alt="" className='w-24 h-24 ml-4' />
                <span className='text-center flex justify-center text-orange-500 text-4xl font-[800]'>65+</span>
                <p className='mt-1 font-Raleway text-xl leading-9'>States covered</p>
              </div>
              <div className='flex flex-col justify-center'>
                <img src={Man} alt="" className='w-24 h-24'/>
                <span className='text-center text-orange-500 text-4xl font-[800]'>689K+</span>
                <p className='mt-1 font-Raleway text-xl '>Awards  won</p>
              </div>
              <div className='flex flex-col justify-center'>
                <img src={Truck} alt=""  />
                <span className='text-center text-orange-500 text-4xl font-[800]'>130M+</span>
                <p className='mt-1 font-Raleway text-xl '>Awards  won</p>
              </div>
              <div className='flex flex-col justify-center'>
                <img src={Bag} alt="" />
                <span className='text-center text-orange-500 text-4xl font-[800]'>130M+</span>
                <p className='mt-1 font-Raleway text-xl '>Awards  won</p>
              </div>
             
          </div>
            
            <div className='flex justify-center pb-4'>
                <div className='w-[1320px] h-[580px] bg-black bg-[Rectangle] relative flex justify-center items-center '>
                  <img src={Rectangle} alt="" className='absolute' />
                  <img src={Iconplay} alt="" className='absolute' />
                  <h2 className='text-orange-600 text-3xl font-bold text-center absolute mt-40'>FASTEST DELIVERY</h2>
                  <p className='text-white font-Raleway text-[16px] font-[700] leading-normal absolute w-[573px] text-center mt-80 h-[98px]'> You can get your valuable item in the fastest period of
                  time with safety. Because your emergency
                  is our first priority.</p>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Section1