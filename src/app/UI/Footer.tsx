import React from 'react'

const Footer = () => {
  return (
    <div className='px-20 p-4  bg-gray-200 dark:bg-gray-900' >
      <div className="h-0.5 bg-gray-300 dark:bg-gray-700"></div>
      <div className='flex flex-row justify-between p-4 dark:text-white'>
        <span>2026</span>
        <span>Build with <span className='text-[#008d6d]'>NextJS</span></span>
      </div>
      
    </div>
  )
}

export default Footer
