import React from 'react'
import { services1, services2 } from '../assets/assets';

const Services = () => {
  return (
    <div className='bg-gray-950'>
      <div className='md:mx-20 my-10 md:flex-row md:flex lg:flex gap-12'>
          <div className=' flex flex-col mt-20 gap-6'>
            <div className='text-left text-2xl pt-10'>
              <p className='text-white text-sm font-medium'>WHAT WE DO</p>
            </div>
            <b className='text-left text-white font-medium text-5xl'>Get a full suite of SEO sevices</b>
          </div>

          <div className='flex flex-col items-center gap-4 my-6 md:mx-10'>     
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-5 gap-y-6 mb-10 mt-10 px-3 sm:px-0'>
              {services1.slice(0,2).map((item, index)=>(
                  <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer' key={index}>
                      
                      <div className='mb-10 mt-10 p-4'>
                              <p className='text-white text-lg font-medium'>{item.name}</p>
                              <p className='text-gray-500 text-sm'>{item.about}</p>
                          
                      </div>
                    
                  </div>
              ))}
              
            </div>
            
          </div>
      </div>
      <div className='border border-b-gray-500 md:mx-20'></div>

      <div className='md:mx-20 my-10 md:flex-row md:flex lg:flex gap-12'>
          
          <div className='flex flex-col items-center gap-4 my-6 md:mx-10'>     
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
              {services2.slice(0,10).map((item, index)=>(
                  <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer' key={index}>
                      
                      <div className='p-4 mb-10 mt-10'>
                          <p className='text-white text-lg font-medium'>{item.name}</p>
                          <p className='text-gray-500 text-sm'>{item.about}</p>               
                      </div>    
                  </div>
              ))}             
            </div>
          </div>
            
            <div className='flex flex-col gap-6'>
              <p className='text-gray-500 mt-5'>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
              <div className='text-left text-2xl pt-10'>
                <p className='text-white font-medium'>Video presentation</p>
              </div>
            </div>
            
          
      </div>
    </div>
  )
}

export default Services
