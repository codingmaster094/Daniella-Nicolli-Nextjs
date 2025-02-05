"use client";
import React, { useEffect, useState } from "react";
import BannerCarousel from "../componants/Banner";
import ClientCarousel from "../componants/client";
import Aboutdetails from "../componants/Aboutdetails";
import Categories from "../componants/Categories";
import AboutLambsheim from "../componants/AboutLambsheim";
import Fermentum from "../componants/Fermentum";
import Serviceslider from "../componants/Serviceslider";
import Comment from "../componants/Comment";
import Accordian from "../componants/Accordian";
import Slidehover from "../componants/Slidehover";
import axios from "axios";
import Link from "next/link";

let username = 'nicolli_praxis_fuer_aesthetik/'
const page = () => {
  const [HomePageData, setHomePageData] = useState(null);
  

  const fetchHomeData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/home"
      );
      setHomePageData(response.data); // The result is in response.data with Axios
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  return (
    <>
    {
      HomePageData && 
      <section>
        <div className={`Banner`}>
          <div className="Banner-sliders relative">
                <div className="item">
                  <div
                    className="bg-banner bg-banner-img bg-cover px-[15px]  2xl:ps-[148px]"
                    style={{
                    backgroundImage: HomePageData?.hero_slider_image?.value
                      ? `url(${HomePageData?.hero_slider_image?.value})`
                      : "none",
                  }}
                  >
                    <div className="flex flex-col bg-Bgwhite  p-6 lg:p-12 gap-4 lg:gap-8 w-full md:w-[845px] ">
                      <h1>{HomePageData?.hero_slider_main_title?.value}</h1>
                      <ul
                        className="menu"
                        dangerouslySetInnerHTML={{
                          __html: HomePageData?.hero_slider_content?.value.replace(/<\/?ul[^>]*>/g, ""),
                        }}
                      ></ul>
                      {HomePageData?.hero_slider_button && (
                        <Link
                          href={HomePageData?.hero_slider_button?.value?.url}
                          target={HomePageData?.hero_slider_button?.value?.target}
                          className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                          aria-label={HomePageData?.hero_slider_button?.value?.title || "button link"}
                        >
                          {HomePageData?.hero_slider_button?.value?.title}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    }

      
      {HomePageData && (
        <ClientCarousel
          main_title={HomePageData?.partners_section_main_title.value}
          section_all_partners={
            HomePageData?.partners_section_all_partners
          }
        />
      )}

      <Aboutdetails
        main_title={HomePageData?.home_leistungen_section_main_title?.value}
        section_image={HomePageData?.home_leistungen_section_image?.value}
        section_content={HomePageData?.home_leistungen_section_content?.value}
        section_sub_content={HomePageData?.home_leistungen_section_sub_content}
      />

      <Categories
        title={HomePageData?.home_anfrage_1_main_title.value}
        description={HomePageData?.home_anfrage_1_content.value}
        BTN={HomePageData?.home_anfrage_1_button.value}
      />

      <AboutLambsheim
        main_title={HomePageData?.home_standorte_main_title?.value}
        standorte_content={HomePageData?.home_standorte_content?.value}
        BTN={HomePageData?.home_standorte_button?.value}
        standorte_image={HomePageData?.home_standorte_image?.value}
      />

      {HomePageData && (
        <Fermentum
          main_title={HomePageData?.home_vorteile_main_title.value}
          all_vorteile={HomePageData?.home_all_vorteile}
        />
      )}

      <Categories
        title={HomePageData?.home_anfrage_2_main_title.value}
        description={HomePageData?.home_anfrage_2_content.value}
        BTN={HomePageData?.home_anfrage_2_button.value}
      />

      {HomePageData && (
        <Serviceslider
          main_title={HomePageData?.home_ablauf_main_title.value}
          all_ablauf={HomePageData?.home_all_ablauf}
        />
      )}

      <Comment
        main_title={HomePageData?.bewertungen_main_title?.value}
        content={HomePageData?.bewertungen_content?.value}
      />

      {/* <Categories
        title={HomePageData?.home_anfrage_3_main_title.value}
        description={HomePageData?.home_anfrage_3_content.value}
        BTN={HomePageData?.home_anfrage_3_button.value}
      /> */}

      {HomePageData && (
        <Slidehover
          main_title={HomePageData?.referenzen_main_title.value}
          all_referenzen={HomePageData?.all_referenzen}
        />
      )}

      {/* <Accordian
        main_title={HomePageData?.faq_main_title?.value}
        all_faqs={HomePageData?.all_faqs?.value}
      /> */}
    </>
  );
};

export default page;
