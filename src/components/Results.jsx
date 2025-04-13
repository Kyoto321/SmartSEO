import React from 'react'
import { useNavigate } from 'react-router-dom'
import { results } from '../assets/assets'
import { assets } from '../assets/assets'


const Results = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center gap-4 my-6 md:mx-24'>
  
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 pt-5 gap-y-6 px-3 sm:px-0'>
        {results.slice(0,3).map((item, index)=>(
            <div className='bg-white border border-gray-200 rounded-xl overflow-hidden' key={index}>
                <img className='m-auto mt-12' src={item.image} alt="" />
                <div className='p-4'>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.about}</p>
                </div>
                <button onClick={()=>{navigate('#'); scrollTo(0,0)}} ><img className='mx-5 cursor-pointer' src={assets.arrow} alt="" /></button>
            </div>
        ))}
      </div>
    </div>
  )
}


export default Results
