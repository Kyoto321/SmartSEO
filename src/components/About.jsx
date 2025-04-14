import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='md:mx-24'>

      <div className='my-10 flex flex-col md:flex-row gap-20'>
        <div class="inline-block relative">
          <img className='w-full md:max-w-full cursor-pointer hover:translate-y-[-10px] transition-all duration-500' src={assets.laptop} alt="" />
          <img className='w-max md:max-w-[360px]' src={assets.plus_ball} alt="" />
          
        </div>

        
        <div className=' flex flex-col gap-6'>
          <div className='text-left text-2xl pt-10 text-gray-600'>
            <p className='text-sm text-blue-950 font-medium'>ABOUT US</p>
          </div>
          
          <b className='text-left text-blue-950 text-3xl font-medium lg:text-6xl md:text-6xl'>Our experts are ready to help</b>
          <p className="text-left text-sm text-gray-600">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
        
            <div className='flex flex-col gap-10 md:flex-row'>
              <div className='text-left text-2xl pt-10'>
                <p className='text-blue-950 font-medium'>Years</p>
                <p className='text-blue-950 font-medium text-6xl'>12+</p>
              </div>

              <div className='text-left text-2xl pt-10'>
                <p className='text-blue-950 font-medium'>People</p>
                <p className='text-blue-950 font-medium text-6xl'>100+</p>
            </div>
          </div>

        </div> 
      </div>


    </div>
  )
}

export default About
