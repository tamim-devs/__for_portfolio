import React from 'react'
import section2img from "../../assets/Section2.png"

function Section2() {
  return (
    <>
      <div className='bg-[#FFEDC9] pb-6'>
        <div className='container mx-auto'>
            <div className='flex justify-center items-center gap-x-14'>
                <div className='flex flex-col gap-4'>
                    <div> <img src={section2img} alt="" /></div>
                    <div className='flex flex-col gap-4'>
                       <h2 className='text-orange-600 text-2xl font-bold '>REQUEST A CALLBACK</h2>
                       <h3 className='text-5xl w-[412px] font-Raleway font-bold text-gray-800 '>We will contact in the shortest time.</h3>
                       <h2 className='text-gray-600 text-3xl font-semibold '>Monday to Friday, 9am-5pm.</h2>
                       </div>
                    </div>

                    <div className='flex mt-32  flex-col gap-4'>
                    <input class="placeholder:text-slate-400 block bg-transparent w-[424px] border border-black rounded-md  h-12    focus:border-black " placeholder="  Name" type="text" name="search"/>                      
                    <input class="placeholder:text-slate-400 block bg-transparent w-[424px] border border-black rounded-md  h-12    focus:border-black " placeholder="  Email" type="text" name="search"/>                      
                      <textarea class="placeholder:text-slate-400 block bg-transparent pt-3 pb-32 pl-1 pr-52 border border-black rounded-md   focus:border-black " placeholder="Message" type="text" name="search" ></textarea>
                    </div>
                <div></div>
            </div>
        </div>

      </div>
    </>
  )
}

export default Section2