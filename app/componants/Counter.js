import React from 'react'

const Counter = ({main_title , all_leistungen}) => {
  return (
    <section className='py-10 md:py-[70px] lg:py-[100px] bg-Teal'>
         <div className="container  mx-auto px-[15px] sm:px-[30px] lg:px-[61px]">
              <div className="flex text-center items-center justify-center flex-col gap-6 sm:gap-8 flex-wrap *:text-white">
                   <div className="flex pb-[25px] *:text-white relative after:absolute after:bottom-0 after:w-20 after:left-1/2 after:h-[1px] after:bg-white">
                         <h2>{main_title}</h2>
                   </div>
                   <div className="flex justify-between flex-col md:flex-row gap-8">
                   {all_leistungen &&
                          all_leistungen?.map((item, index) => (
                         <div key={index} className="text-center gap-6 flex flex-col font-primry-font ">
                              <span className="text-5xl font-bold counter ">
                                    {item.ueber_all_leistungen_counter}
                              </span>
                              <p className="mt-2  text-a" dangerouslySetInnerHTML={{ __html: item.ueber_all_leistungen_content?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&amp;/g, '&')}}></p>
                         </div>
                     ))}
                  </div>
              </div>
         </div>
    </section>
  )
}

export default Counter