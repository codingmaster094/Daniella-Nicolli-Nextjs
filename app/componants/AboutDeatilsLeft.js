
import React from 'react'
import Image from 'next/image'
const AboutDeatilsLeft = ({title,description1,description2,description3,description4,Images}) => {
  return (
      <section className="pb-10 md:py-[70px] md:pt-0 lg:py-[100px]">
               <div className="container px-[15px] mx-auto">
                 <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-10 2xl:gap-[100px]">
                     <div className="flex gap-5 flex-col w-full  justify-center lg:w-[60%] ps-0 lg:px-4 lg:gap-[25px]">
                         <div className="flex relative pb-4 lg:pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[2px] after:bg-Teal">
                             <h2>{title}</h2>
                         </div>
                         <div className="flex flex-col gap-6">
                         <p>{description1}</p>
                                <p>{description2}</p>
                                 <div className="flex p-4 border border-Teal flex-col gap-2">
                                     <p>{description3}</p>
                                     <p>{description4}</p>
                                 </div>
                         </div>
                     </div>
                     <div className="flex items-center flex-col text-black-800 w-full lg:w-[35%] lg:flex-row p-0 lg:ps-16 lg:pb-16 relative after:none lg:after:absolute lg:after:left-0 lg:after:top-12 lg:after:border lg:after:border-Teal lg:after:w-[calc(100%-48px)] lg:after:h-[calc(100%-48px)] lg:after:-z-10">
                         <div className="flex w-auto lg:w-full  h-full sm:h-[550px] 2xl:h-[578px] object-top">
                             <Image src={Images} alt="About-img"  objectFit="cover" className='w-full h-full object-contain lg:object-cover '/>
                         </div>
                     </div>
                 </div>
               </div>
      </section>
  )
}

export default AboutDeatilsLeft