import React from 'react'
import BannerCarousel from '../componants/Banner';
import Categories from '../componants/Categories';
import HeroImage from '../../public/images/Rateger-template-banner.png'

const page = (props) => {
         const slides = [
            {
              title: "Montes nascetur ridiculus",
              backgroundImage: HeroImage,
              description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"  ,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
              ],
              buttonText: "TERMIN BUCHEN",
            },
            {
              title: "Montes nascetur ridiculus",
              backgroundImage:HeroImage,
              description: [
                "Schönheit liegt im Auge des Betrachters.",
                "Pflege und Aufmerksamkeit sind der Schlüssel.",
              ],
              buttonText: "TERMIN BUCHEN",
            },
          ];
          const RateTitleData1 =[
              {
                title:"1.Paturient Venenatis Etiam",
                paragraph1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                paragraph2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                 
                 contentbox:[
                  {
                    Smalltitle:"Parturient Lorem",
                    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum augue ac nisi ",
                    description:[
                      "Schmerztherapie",
                      "Allergien ",
                      "Klassische Homöopathie"
                  ],
                  },
                  {
                    Smalltitle:"Fringilla Fusce Elit",
                    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum augue ac nisi ",
                    description:[
                      "Schmerztherapie",
                      "Allergien ",
                      "Klassische Homöopathie"
                  ],
                  }
                 ],
                 Smalltitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
                 description:[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                ],

              },
              {
                title:"2.In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. ",
                paragraph1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                paragraph2:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                 contentbox:[
                  {
                    Smalltitle:"Parturient Lorem",
                    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum augue ac nisi ",
                    description:[
                      "Schmerztherapie",
                      "Allergien ",
                      "Klassische Homöopathie"
                  ],
                  },
                  {
                    Smalltitle:"Fringilla Fusce Elit",
                    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum augue ac nisi ",
                    description:[
                      "Schmerztherapie",
                      "Allergien ",
                      "Klassische Homöopathie"
                  ],
                  }
                 ],
              },
          ]
           
  return (
    <>
        <BannerCarousel slidesData={slides} className="custom-class-name"/>
        <section className="py-10 md:py-[70px] lg:py-[100px]">
          <div className="container px-[15px] mx-auto">
              <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
                    <div className="flex justify-between gap-4 flex-wrap items-center">
                          <p className='text-body'><span>M / W / D</span>&nbsp;&nbsp;<span>Zuletzt aktualisiert</span></p>
                          <div className="flex border border-Border w-auto lg:w-[35%] justify-between items-center">
                          <input type="search" placeholder="Wonach suchen Sie?" className='border-none outline-none p-2 w-full placeholder:text-black-900'/>
                          <button className='flex self-start flex-shrink-0 text-center bg-Teal text-white hover:bg-teal-600 font-normal font-secondary-font px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in' role="button">Job finden</button>
                     </div>
                   </div>
                    <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
                        <h2 className='text-a  sm:text-h3'>Das Wichtigste in Kürze:</h2>
                        <ul className="menu flex flex-col gap-3 [&_li]:font-secondary-font [&_li]:text-a [&_li]:font-normal">
                           <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                           <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                           <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                        </ul>
                    </div>
              </div>
           </div>
         </section>
         <Categories title="Popular Categories" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum augue ac nisi feugiat, et facilisis libero ultrices. Maecenas a suscipit nisl. Curabitur ut blandit"/>
        <section className="py-10  lg:py-[80px]">
        <div className="container px-[15px] mx-auto">
            <div className="flex flex-col gap-6 ">
            <div className="flex relative pb-6 lg:pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[1px] after:bg-black-800">
                  <h2>Lorem ipsum dolor sit amet</h2>
              </div>
              <ul className='flex flex-col gap-3 text-a font-medium'>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ?</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ?</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ?</li>
              </ul>
            </div>
        </div>
        </section>
        <section className='pb-10 md:pb-[70px] lg:pb-[100px]'>
         <div className="container px-[15px] mx-auto">
                 <div className="flex flex-col border border-Teal p-5 md:p-10 lg:p-20 gap-12">
                       <div className="flex flex-col gap-5  sm:gap-6 md:gap-8">
                        {RateTitleData1.map((item,index) => (
                       <div key={index}>
                         <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
                        <div className="flex relative pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[1px] after:bg-black-800">
                           <h2 className=" font-bold">{item.title}</h2>
                        </div>
                        <p>{item.paragraph1}</p>
                        <p>{item.paragraph2}</p>
                          <div className="flex gap-2 flex-wrap flex-col sm:flex-row"> 
                              {item.contentbox.map((content, idx) => (
                                  <div key={idx} className='flex flex-col  w-full md:w-[47%]  2xl:w-[33%] border border-Teal p-5 md:p-6 lg:p-8 gap-4'>
                                        <h3>{content.Smalltitle}</h3>
                                        <p>{content.paragraph}</p>
                                        <ul className='menu flex flex-col gap-3 text-a'>
                                          {content.description.map((desc, index) => (
                                            <li key={index}>{desc}</li>
                                          ))}
                                        </ul>
                                  </div>
                              ))}
                          
                        </div>
                        {index  === 0 && 
                           <div className="flex flex-col gap-4">
                           <div className="flex gap-2 flex-col">
                                      <h3 className='text-xl sm:text-h4 font-normal'>{item.Smalltitle}</h3>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                           </div>
                           <div>
                            <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>        
                                 {item.description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                   ))}
                             </ul>
                             </div>
                           </div>
                          }
                         </div>
                      </div>
                      ))}
                      </div>  
                       <div className="flex flex-col gap-5  sm:gap-6 md:gap-8">
                                  <div className="flex relative pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[1px] after:bg-black-800">
                                    <h2 className=''>3.Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est </h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                </ul>
                       </div>
                       <div className="flex flex-col gap-5  sm:gap-6 md:gap-8">
                                <div className="flex relative pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[1px] after:bg-black-800">
                                    <h2>4.Interdum et malesuada fames ac ante ipsum primis in faucibus.</h2>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    <h3 className='text-xl sm:text-h4'>Lorem ipsum dolor sit amet,</h3>
                                    <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className='text-xl sm:text-h4 '>Lorem ipsum dolor sit amet,</h3>
                                    <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>     
                                      </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className='text-xl sm:text-h4 '>Lorem ipsum dolor sit amet,</h3>
                                    <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>     
                                      </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className='text-xl sm:text-h4 '>Lorem ipsum dolor sit amet,</h3>
                                    <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>     
                                      </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className='text-xl sm:text-h4 '>Lorem ipsum dolor sit amet,</h3>
                                    <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>     
                                      </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className='text-xl sm:text-h4 '>Lorem ipsum dolor sit amet,</h3>
                                    <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>     
                                      </ul>
                                </div>
                        </div>
                        <div className="flex flex-col gap-5  sm:gap-6 md:gap-8">
                                    <h3>Lorem ipsum dolor sit amet,</h3>
                                      <div className="flex flex-col gap-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>     
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                      </ul>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    </div>     
                        </div>
                        <div className="flex flex-col gap-5  sm:gap-6 md:gap-8">
                                <div className="flex relative pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[1px] after:bg-black-800">
                                    <h2>5.Interdum et malesuada fames ac ante ipsum primis in faucibus? </h2>
                                  </div>
                                  <div className="flex flex-col gap-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                  </div>
                                  <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>     
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                  </ul>
                        </div>
                        <div className="flex flex-col gap-5  sm:gap-6 md:gap-8">
                              <div className="flex relative pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[1px] after:bg-black-800">
                                    <h2>6.Proin id ligula dictum, convallis enim ut, facilisis massa  Mauris</h2>
                              </div>
                              <div className="flex flex-col gap-3">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco .</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                <div className='overflow-auto'>
                                <table className='border border-Teal w-full 2xl:w-[1080px]'>
                                <thead>
                                    <tr>
                                      <th>Parturient Lorem</th>
                                      <th>Pflegesachleistung</th>
                                      <th>Pflegegeld</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>0 €</td>
                                      <td>0 €</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>761 €</td>
                                      <td>332 €</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>1.432 €</td>
                                      <td>573 €</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>1.778 €</td>
                                      <td>765 €</td>
                                    </tr>
                                    <tr>
                                      <td>5</td>
                                      <td>2.200 €</td>
                                      <td>947 €</td>
                                    </tr>
                                    </tbody>
                                    
                                </table>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <div className="flex flex-col gap-3">
                                    <h3>Lorem ipsum dolor sit amet,</h3>
                                      <div className="flex flex-col gap-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>     
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                      </ul>
                                       
                                    </div>     
                                 </div>
                                 <div className="flex flex-col gap-3">
                                    <h3>Lorem ipsum dolor sit amet,</h3>
                                      <div className="flex flex-col gap-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>     
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                      </ul>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <h4>Lorem ipsum dolor sit amet,</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <button className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal font-secondary-font px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in" aria-label='button' role='button'>
                                           JETZT PFLEGEKRAFT FINDEN
                                       </button>
                                    </div>     
                                 </div>
                        </div>
                        <div className="flex flex-col gap-5  sm:gap-6 md:gap-8">
                                <div className="flex relative pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[1px] after:bg-black-800">
                                      <h2>7.Proin id ligula dictum, convallis enim ut, facilisis massa  Mauris </h2>
                                </div>
                                  <div className="flex flex-col gap-3 border border-Teal p-6 sm:p-8">
                                    <h3>Was zählt alles zur Pflege von Angehörigen?</h3>
                                      <div className="flex flex-col gap-3">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        <ul className='menu flex flex-col gap-3 [&_li]:font-secondary-font text-a [&_li]:font-normal'>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>     
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                      </ul>
                                       
                                    </div>     
                                 </div>
                                 <div className="flex flex-col gap-3 border border-Teal p-6 sm:p-8">
                                    <h3>Was zählt alles zur Pflege von Angehörigen?</h3>
                                      <div className="flex flex-col gap-3">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>     
                                 </div>
                                 <div className="flex flex-col gap-3 border border-Teal p-6 sm:p-8">
                                    <h3>Was zählt alles zur Pflege von Angehörigen?</h3>
                                      <div className="flex flex-col gap-3">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>     
                                 </div>
                                 <div className="flex flex-col gap-3 border border-Teal p-6 sm:p-8">
                                    <h3>Was zählt alles zur Pflege von Angehörigen?</h3>
                                      <div className="flex flex-col gap-3">
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>     
                                 </div>
                        </div>
                    </div>
           </div>
        </section>
     </>
  )
}

export default page