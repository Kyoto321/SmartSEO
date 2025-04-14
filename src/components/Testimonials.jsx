import React from 'react'
//import { testimonials } from '../assets/assets';
import {assets} from '../assets/assets';

const Testimonials = () => {

  return (
    <div className='md:mx-20 flex mt-10'>
      <div className='flex flex-col mb-5 gap-6 mt-20'>
        <div className='text-left text-2xl pt-10 text-gray-600'>
          <p className='text-sm text-blue-950 font-medium'>TESTIMONIALS</p>
        </div>
        
        <b className='text-left text-blue-950 font-medium text-3xl lg:text-6xl md:text-6xl'>Feedback from our clients</b>
        <p className="text-left text-2xl my-5 text-gray-600">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
      
        <button className='bg-blue-700 text-white px-8 py-3 rounded-full font-light md:block'>About Us</button>
      
      
      </div>
          <div className='flex flex-col items-center gap-4 my-6 text-gray-500 md:mx-10'>
        
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>

              <div className='bg-white border border-blue-200 rounded-xl overflow-hidden cursor-pointer mt-20'>
                  <img className='m-auto mt-10 rounded-full' src={assets.person1} alt="" />
                  <div className='p-4'>
                      <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <p className='text-gray-900 text-lg font-medium'>John Doe</p>
                      <p className='text-gray-500 mb-10'>Expert</p>                   
                  </div>
                </div>

                <div className='bg-white border border-blue-200 rounded-xl overflow-hidden cursor-pointer'>
                  <img className='m-auto mt-10 rounded-full' src={assets.person2} alt="" />
                  <div className='p-4'>
                      <p className='text-gray-600 text-sm'>Adipiscing elit vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.</p>
                      <p className='text-gray-900 text-lg font-medium'>Sandy Williams</p>
                      <p className='text-gray-500'>CEO, Business Co.</p>                   
                  </div>
                </div>
            </div> 


            
          </div>
    </div>
  )
}

export default Testimonials
