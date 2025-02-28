"use client";
import React, { useEffect, useState } from "react";
import BannerCarousel from "../componants/Banner";
import ClientCarousel from "../componants/client";
import AboutDeatilsRight from "../componants/AboutDeatilsRight";
import Comment from "../componants/Comment";
import Categories from "../componants/Categories";
import Slidehover from "../componants/Slidehover";
import Accordian from "../componants/Accordian";
import axios from "axios";
import Link from "next/link";

const page = () => {
  const [LendiangPageData, setLendiangPageData] = useState(null);
  const fetchLendingData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/landing-page"
      );
      console.log("response.data", response.data);
      setLendiangPageData(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchLendingData();
  }, []);

  return (
    <>
      {/* {LendiangPageData && (
        <BannerCarousel slidesData={LendiangPageData?.hero_slider?.value} />
      )} */}

      {LendiangPageData && (
        <section>
          <div className={`Banner`}>
            <div className="Banner-sliders relative">
              <div className="item">
                <div
                  className="bg-banner bg-banner-img bg-cover px-[15px]  2xl:ps-[148px]"
                  style={{
                    backgroundImage: LendiangPageData?.hero_slider_image?.value
                      ? `url(${LendiangPageData?.hero_slider_image?.value})`
                      : "none",
                  }}
                >
                  <div className="flex flex-col bg-Bgwhite  p-6 lg:p-12 gap-4 lg:gap-8 w-full md:w-[845px] ">
                    <h1>{LendiangPageData?.hero_slider_main_title?.value}</h1>
                    <ul
                      className="menu"
                      dangerouslySetInnerHTML={{
                        __html:
                          LendiangPageData?.hero_slider_content?.value.replace(
                            /<\/?ul[^>]*>/g,
                            ""
                          ),
                      }}
                    ></ul>
                    {LendiangPageData?.hero_slider_button && (
                      <Link
                        href={LendiangPageData?.hero_slider_button?.value?.url}
                        target={
                          LendiangPageData?.hero_slider_button?.value?.target
                        }
                        className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                        aria-label={
                          LendiangPageData?.hero_slider_button?.value?.title ||
                          "button link"
                        }
                      >
                        {LendiangPageData?.hero_slider_button?.value?.title}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {LendiangPageData && (
        <ClientCarousel
          main_title={LendiangPageData?.partners_section_main_title?.value}
          section_all_partners={LendiangPageData?.partners_section_all_partners}
          activate_deactivate={LendiangPageData?.enabledisable_partner_logos?.value}
        />
      )}

      <AboutDeatilsRight
        className="custom-class"
        title={LendiangPageData?.landing_page_1_main_title?.value}
        Images={LendiangPageData?.landing_page_1_image?.value}
        description={LendiangPageData?.landing_page_1_content?.value}
      />

      <Comment
        main_title={LendiangPageData?.bewertungen_main_title?.value}
        content={LendiangPageData?.bewertungen_content?.value}
      />

      <Categories
        title={LendiangPageData?.anfrage_1_main_title?.value}
        description={LendiangPageData?.anfrage_1_content?.value}
        BTN={LendiangPageData?.anfrage_1_button?.value}
      />

      <AboutDeatilsRight
        className="custom-class"
        title={LendiangPageData?.landing_page_2_main_title?.value}
        Images={LendiangPageData?.landing_page_2_image?.value}
        description={LendiangPageData?.landing_page_2_content?.value}
      />

      {/* <Slidehover /> */}
      {LendiangPageData && (
        <Slidehover
          main_title={LendiangPageData?.referenzen_main_title?.value}
          all_referenzen={LendiangPageData?.all_referenzen}
        />
      )}

      {/* <Categories
        title={LendiangPageData?.anfrage_2_main_title?.value}
        description={LendiangPageData?.anfrage_2_content?.value}
        BTN={LendiangPageData?.anfrage_2_button?.value}
      /> */}

      <Accordian
        main_title={LendiangPageData?.faq_main_title?.value}
        all_faqs={LendiangPageData?.all_faqs?.value}
      />
    </>
  );
};

export default page;
