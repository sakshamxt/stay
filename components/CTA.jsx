'use client'

import { FaFire } from 'react-icons/fa'

const CTA = () => {
  return (
    <div className='w-full px-20 h-[6.5rem] mt-12 mb-10'>
        <div className='w-full h-full border-[1px] rounded-md px-6 flex items-center justify-between'>
            <div className='flex items-center gap-8'>
                <div className='flex items-center justify-center text-[#e92626] w-14 h-14 bg-[#ffefd6] rounded-full'>
                    <FaFire size={28} />
                </div>
                <div>
                    <h1 className='text-xl font-bold tracking-tight '>Get access to exclusive deals</h1>
                    <h2 className='text-base opacity-65'>Only the best deals reach your inbox</h2>
                </div>
            </div>
            <div className='flex items-center gap-4 mr-10'>
                <input type="text" placeholder='Your email' className='outline-none border-[1px] px-3 py-3 w-80 rounded-md' />
                <button className='h-12 px-10 text-sm bg-[#e92626] text-white rounded-md font-semibold'>Notify me</button>
            </div>
        </div>
    </div>
  )
}

export default CTA
