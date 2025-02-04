import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Maps = ({main_title  , map_url , map_image}) => {
  return (
      <section className="py-10 md:py-[70px] lg:py-[100px]">
            <div className="flex  flex-col gap-6 md:gap-8  lg:gap-12  text-center ">
              <div className="flex flex-col gap-6">
                   <h2>{main_title}</h2>
              </div>
              <div className="flex w-full">
              {
                map_url && 
                <Link href={map_url} target='blank' className='block w-full min-h-96' aria-label='map-image' role='link'>
                  <Image src={map_image?.url} alt='map_image'  width={map_image?.width} height={map_image?.height} className='h-full w-full object-cover'/>
                   </Link>
              }       
              </div>
            </div>
      </section>
  )
}

export default Maps