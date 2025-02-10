'use client'
import React, { useEffect, useState } from 'react'
import ClientCarousel from '../componants/client'
import Comment from '../componants/Comment'
import Accordian from '../componants/Accordian'
import Slidehover from '../componants/Slidehover'
import Terminbroncher from '../componants/Terminbroncher'
import axios from 'axios'
import MultipleAboutdetails from '../componants/MultipleAboutdetails'
import Link from 'next/link'

const page = () => {

  const [AesthetikData, setAesthetikData] = useState(null);
  const fetchAesthetikData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/aesthetik"
      );
      setAesthetikData(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchAesthetikData();
  }, []);
  return (
    <>
    {
      AesthetikData && 
      <section>
        <div className={`Banner`}>
          <div className="Banner-sliders relative">
                <div className="item">
                  <div
                    className="bg-banner bg-banner-img bg-cover px-[15px]  2xl:ps-[148px]"
                    style={{
                    backgroundImage: AesthetikData?.hero_slider_image?.value
                      ? `url(${AesthetikData?.hero_slider_image?.value})`
                      : "none",
                  }}
                  >
                    <div className="flex flex-col bg-Bgwhite  p-6 lg:p-12 gap-4 lg:gap-8 w-full md:w-[845px] ">
                      <h1>{AesthetikData?.hero_slider_main_title?.value}</h1>
                      <ul
                        className="menu"
                        dangerouslySetInnerHTML={{
                          __html: AesthetikData?.hero_slider_content?.value.replace(/<\/?ul[^>]*>/g, ""),
                        }}
                      ></ul>
                      {AesthetikData?.hero_slider_button && (
                        <Link
                          href={AesthetikData?.hero_slider_button?.value?.url}
                          target={AesthetikData?.hero_slider_button?.value?.target}
                          className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                          aria-label={AesthetikData?.hero_slider_button?.value?.title || "button link"}
                        >
                          {AesthetikData?.hero_slider_button?.value?.title}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    }

      {AesthetikData && (
        <ClientCarousel
          main_title={AesthetikData?.partners_section_main_title?.value}
          section_all_partners={
            AesthetikData?.partners_section_all_partners
          }
        />
      )}
     <Terminbroncher 
          title={AesthetikData?.aesthetik_grundsätze_main_title?.value}
          BTN={AesthetikData?.aesthetik_grundsätze_button.value}
          columns={AesthetikData?.aesthetik_grundsätze_all_contents?.value}
      />
     <Comment 
       main_title={AesthetikData?.bewertungen_main_title?.value}
       content={AesthetikData?.bewertungen_content?.value}
     />

      <MultipleAboutdetails 
        MultipleAboutdeta={AesthetikData?.aesthetik_all_anfrage_faltenunterspritzung}
        />
      {AesthetikData && (
        <Slidehover
          main_title={AesthetikData?.referenzen_main_title?.value}
          all_referenzen={AesthetikData?.all_referenzen}
        />
      )}
      <Accordian
        main_title={AesthetikData?.faq_main_title?.value}
        all_faqs={AesthetikData?.all_faqs?.value}
      />
   </>
  )
}

export default page