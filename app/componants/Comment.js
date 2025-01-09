"use client"
import Image from 'next/image'
import React from 'react'
import CommitImage from '../../public/images/comment-img.png'
import ReviewDetails from './ReviewDetails'
const Comment = ({main_title , content}) => {
  return (
    <section className="py-10 md:py-[70px] lg:py-[100px] bg-Bgslate">
    <div className="container mx-auto px-[15px]">
        <div className="flex w-full max-w-[1440px] flex-col gap-6 md:gap-8  lg:gap-12 mx-auto text-center ">
          <div className="flex flex-col gap-6">
               <h2>{main_title}</h2>
               <p dangerouslySetInnerHTML={{ __html: content?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&amp;/g, '&')}}></p>
          </div>
          <div className="flex w-full shadow-shadow">
          {/* <ReviewDetails/> */}
            <Image src={CommitImage} alt='commitImage' className='w-full'/> 
          </div>
        </div>
    </div>
  </section>
  )
}

export default Comment