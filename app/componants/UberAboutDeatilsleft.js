import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const UberAboutDeatilsleft = ({main_title,content,image}) => {
  return (
    <section className="py-10  md:py-[70px] lg:py-[100px]">
    <div className="w-full max-w-[1780px] px-[15px] lg:px-0 ms-auto">
    <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-8  py-0 lg:py-[64px] relative after:none lg:after:absolute lg:after:left-[15px]  lg:ps-[15px] lg:after:top-0 lg:after:border lg:after:border-Teal lg:after:w-[60%] lg:after:h-full lg:after:-z-10 ">
       <div className="flex gap-5 flex-col w-full justify-center lg:w-[50%] px-0  lg:px-4  lg:gap-8 2xl:px-[100px]">
            <div className="flex relative pb-4 lg:pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[1px] after:bg-black-800">
            <h2>{main_title}</h2>
            </div>
            <div className="flex flex-col gap-4 md:gap-6" dangerouslySetInnerHTML={{ __html: content}}></div>
         
           <Link href="#" className="flex self-start text-center bg-Teal text-white hover:bg-teal-600  font-normal  px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in" aria-label='link-button' role='link'>
                  MEHR ERFAHREN
           </Link>
       </div>
       <div className="flex items-center flex-col w-auto  lg:w-[55%]  md:flex-row py-0 lg:py-[30px] bg-white h-[600px] lg:h-[804px]">
        {image && 
        <Image src={image} width={908} height={804} alt="about-right.png" className="w-full object-contain lg:object-cover  h-full"/>
        }
       </div>
    </div>
    </div>
 </section>
)
}

export default UberAboutDeatilsleft