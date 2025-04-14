import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        
        <div className='flex flex-col md:pl-20 items-center gap-6 md/:w-2/4 text-sm'>
          
          <b className='text-blue-950 font-medium text-5xl md:text-7xl'>Let us make your website stand out</b>
          <p className='text-2xl'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc.</p>

          <div className='my-10 flex flex-row content-center gap-2 md:flex-row'>
            <button className='bg-blue-700 text-white px-10 py-4 rounded-full font-light md:block'>View More</button>
            <button className='bg-blue-950 text-white px-10 py-4 rounded-full font-light md:block'>About Us</button>
          </div>
        </div> 

        <img className='w-full md:max-w-[500px] cursor-pointer hover:translate-y-[-10px] transition-all duration-500' src={assets.bgImage} alt="" />
      </div>



    </div>
  )
}

export default Hero
