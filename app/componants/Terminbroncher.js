import Link from 'next/link'
import React from 'react'

const Terminbroncher = (props) => {
  {
    const {title ,BTN , columns } = props
  return (
    <section className="pb-10 md:pb-[70px] lg:pb-[100px]  w-full ">
    <div className="w-full container mx-auto px-[15px]">
        <div className="flex flex-col border border-Teal gap-6 sm:gap-8 mx-auto text-center p-6 lg:p-[50px]">
          <h2 className='relative pb-4 lg:pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:bg-black-800 w-full max-w-[500px] mx-auto'>{title}</h2>
          <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row text-left">
          {
            columns && 
            columns?.map((val , index) => (
              <p  key={index} dangerouslySetInnerHTML={{ __html: val.aesthetik_grundsätze_content?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&amp;/g, '&')}}></p>
            ))
          }
          </div>
          
          {
            BTN && 
            <Link href="/" className='flex self-center text-center bg-Teal text-white hover:bg-teal-600  font-normal  px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in' aria-label='link-button' role='link'>
                {BTN}
              </Link>
          }
              
        </div>
    </div>
    </section>
  )
}
}

export default Terminbroncher