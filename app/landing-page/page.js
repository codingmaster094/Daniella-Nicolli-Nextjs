"use client";
import React, { useEffect, useState } from "react";
import HeroImage from "../../public/images/leading-banner.png";
import BannerCarousel from "../componants/Banner";
import ClientCarousel from "../componants/client";
import LeandingImageRight from "../../public/images/Leanding-right-image.jpg";
import LeandingImageRight1 from "../../public/images/leanding-right-img1.png";
import AboutDeatilsRight from "../componants/AboutDeatilsRight";
import Comment from "../componants/Comment";
import Categories from "../componants/Categories";
import Slidehover from "../componants/Slidehover";
import Accordian from "../componants/Accordian";
import axios from "axios";

const page = () => {
  const [LendiangPageData, setLendiangPageData] = useState(null);
  const fetchLendingData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/landing-page"
      );
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
      {LendiangPageData && (
        <BannerCarousel
          slidesData={LendiangPageData?.hero_slider}
        />
      )}
      {LendiangPageData && (
        <ClientCarousel
          main_title={LendiangPageData?.partners_section_main_title?.value}
          section_all_partners={LendiangPageData?.partners_section_all_partners}
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

      <Categories
        title={LendiangPageData?.anfrage_2_main_title?.value}
        description={LendiangPageData?.anfrage_2_content?.value}
        BTN={LendiangPageData?.anfrage_2_button?.value}
      />

      <Accordian
        main_title={LendiangPageData?.faq_main_title?.value}
        all_faqs={LendiangPageData?.all_faqs?.value}
      />

    </>
  );
};

export default page;
