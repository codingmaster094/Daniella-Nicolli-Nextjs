"use client";
import React, { useEffect, useState } from "react";
import BannerCarousel from "../componants/Banner";
import Comment from "../componants/Comment";
import ClientCarousel from "../componants/client";
import Terminbroncher from "../componants/Terminbroncher";
import Slidehover from "../componants/Slidehover";
import Accordian from "../componants/Accordian";
import MultipleAboutdetails from "../componants/MultipleAboutdetails";
import axios from "axios";
import Link from "next/link";

const page = () => {
    const [Naturheilmedizin, setNaturheilmedizin] = useState(null);
    const fetchNaturheilmedizin = async () => {
      try {
        const response = await axios.get(
          "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/naturheilmedizin"
        );
        setNaturheilmedizin(response.data);
      } catch (error) {
        console.error("Error fetching content data", error);
      }
    };
  
    useEffect(() => {
      fetchNaturheilmedizin();
    }, []);
    return (
      <>
      {/* {Naturheilmedizin && (
        <BannerCarousel slidesData={Naturheilmedizin?.hero_slider} />
      )} */}

      {
      Naturheilmedizin && 
      <section>
        <div className={`Banner`}>
          <div className="Banner-sliders relative">
                <div className="item">
                  <div
                    className="bg-banner bg-banner-img bg-cover px-[15px]  2xl:ps-[148px]"
                    style={{
                    backgroundImage: Naturheilmedizin?.hero_slider_image?.value
                      ? `url(${Naturheilmedizin?.hero_slider_image?.value})`
                      : "none",
                  }}
                  >
                    <div className="flex flex-col bg-Bgwhite  p-6 lg:p-12 gap-4 lg:gap-8 w-full md:w-[845px] ">
                      <h1>{Naturheilmedizin?.hero_slider_main_title?.value}</h1>
                      <ul
                        className="menu"
                        dangerouslySetInnerHTML={{
                          __html: Naturheilmedizin?.hero_slider_content?.value.replace(/<\/?ul[^>]*>/g, ""),
                        }}
                      ></ul>
                      {Naturheilmedizin?.hero_slider_button && (
                        <Link
                          href={Naturheilmedizin?.hero_slider_button?.value?.url}
                          target={Naturheilmedizin?.hero_slider_button?.value?.target}
                          className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                          aria-label={Naturheilmedizin?.hero_slider_button?.value?.title || "button link"}
                        >
                          {Naturheilmedizin?.hero_slider_button?.value?.title}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    }
  
      {Naturheilmedizin && (
        <ClientCarousel
          main_title={Naturheilmedizin?.partners_section_main_title.value}
          section_all_partners={Naturheilmedizin?.partners_section_all_partners}
        />
      )}
      <Terminbroncher
        title={Naturheilmedizin?.aesthetik_grundsätze_main_title.value}
        BTN={Naturheilmedizin?.aesthetik_grundsätze_button.value}
        columns={Naturheilmedizin?.aesthetik_grundsätze_all_contents.value}
      />
  
      <Comment
        main_title={Naturheilmedizin?.bewertungen_main_title?.value}
        content={Naturheilmedizin?.bewertungen_content?.value}
      />
  
      <MultipleAboutdetails
        MultipleAboutdeta={
          Naturheilmedizin?.aesthetik_all_anfrage_faltenunterspritzung
        }
      />
  
      {Naturheilmedizin && (
        <Slidehover
          main_title={Naturheilmedizin?.referenzen_main_title.value}
          all_referenzen={Naturheilmedizin?.all_referenzen}
        />
      )}
  
      <Accordian
        main_title={Naturheilmedizin?.faq_main_title?.value}
        all_faqs={Naturheilmedizin?.all_faqs?.value}
      />
    </>
    )
}

export default page

