import React from 'react'
import Image from 'next/image'
const UberAboutDeatilsleft = ({main_title,content,image}) => {
  return (
    <section className="py-10  md:py-[70px] lg:py-[100px]">
    <div className="w-full max-w-[1780px] px-[15px] lg:px-0 ms-auto">
    <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-8  py-0 lg:py-[30px] relative after:none lg:after:absolute lg:after:left-[15px]  lg:ps-[15px] lg:after:top-0 lg:after:border lg:after:border-Teal lg:after:w-[60%] lg:after:h-full lg:after:-z-10 ">
       <div className="flex gap-5 flex-col w-full justify-center lg:w-[50%] px-0  lg:px-4  lg:gap-8 2xl:px-[100px]">
            <div className="flex relative pb-4 lg:pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[2px] after:bg-Teal">
            <h2>{main_title}</h2>
            </div>
            <div className="flex flex-col gap-4 md:gap-6" dangerouslySetInnerHTML={{ __html: content}}></div>
      
       </div>
       <div className="flex items-center flex-col w-full sm:w-2/3  lg:w-[55%]  md:flex-row  bg-white h-full lg:h-[600px] 2xl:h-[804px]">
        {image && 
        <Image src={image} width={908} height={804} alt="about-right.png" className="w-full sm:w-auto object-contain lg:object-cover  h-full"/>
        }
       </div>
    </div>
    </div>
 </section>
)
}

export default UberAboutDeatilsleft