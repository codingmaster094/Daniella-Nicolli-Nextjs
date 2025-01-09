import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Maps = ({main_title , image}) => {
  return (
      <section className="py-10 md:py-[70px] lg:py-[100px]">
            <div className="flex  flex-col gap-6 md:gap-8  lg:gap-12  text-center ">
              <div className="flex flex-col gap-6">
                   <h2>{main_title}</h2>
              </div>
              <div className="flex w-full">
              {
                image && 
                <Link href={image} target={image.target} className='block w-full' aria-label='map-image' role='link'>
                   <iframe 
                    src={image}
                    className='object-cover w-full h-full xl:h-[663px]'
                    width="1920" 
                    height="663" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy">
                  </iframe>
                   </Link>
              }       
              </div>
            </div>
      </section>
  )
}

export default Maps