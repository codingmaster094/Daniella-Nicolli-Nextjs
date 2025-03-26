"use client";
import React, { useEffect, useState } from "react";
import ClientCarousel from "../componants/client";
import Aboutdetails from "../componants/Aboutdetails";
import Categories from "../componants/Categories";
import AboutLambsheim from "../componants/AboutLambsheim";
import Fermentum from "../componants/Fermentum";
import Serviceslider from "../componants/Serviceslider";
import Comment from "../componants/Comment";
import Slidehover from "../componants/Slidehover";
import axios from "axios";
import Link from "next/link";
import BannerCarousel from "../componants/Banner";
import Accordian from "../componants/Accordian";

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
      <BannerCarousel
        title={HomePageData?.hero_slider_main_title?.value}
        img={HomePageData?.hero_slider_image?.value}
        content={HomePageData?.hero_slider_content?.value.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={HomePageData?.hero_slider_button?.value}
      />

      {HomePageData && (
        <ClientCarousel
          main_title={HomePageData?.partners_section_main_title.value}
          section_all_partners={HomePageData?.partners_section_all_partners}
          activate_deactivate={HomePageData?.enabledisable_partner_logos?.value}
        />
      )}

      <Aboutdetails
        main_title={HomePageData?.home_leistungen_section_main_title?.value}
        section_image={HomePageData?.home_leistungen_section_image?.value}
        section_content={HomePageData?.home_leistungen_section_content?.value}
        section_sub_content={
          HomePageData?.home_leistungen_section_sub_content.value
        }
        Small_image_show={HomePageData?.home_leistungen_image_show?.value}
      />

      <Categories
        title={HomePageData?.home_anfrage_1_main_title.value}
        description={HomePageData?.home_anfrage_1_content.value}
        BTN={HomePageData?.home_anfrage_1_button.value}
        bg_img={HomePageData?.home_anfrage_1_image?.value}
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
        bg_img={HomePageData?.home_anfrage_2_image?.value}
      />

      {HomePageData && (
        <Serviceslider
          main_title={HomePageData?.home_ablauf_main_title.value}
          all_ablauf={HomePageData?.home_all_ablauf}
          enabledisable_referenz={HomePageData?.enabledisable_referenz?.value}
        />
      )}

      <Comment
        main_title={HomePageData?.bewertungen_main_title?.value}
        content={HomePageData?.bewertungen_content?.value}
      />

      {HomePageData && (
        <Slidehover
          main_title={HomePageData?.referenzen_main_title.value}
          all_referenzen={HomePageData?.all_referenzen}
          enabledisable_referenz={HomePageData?.enabledisable_referenz?.value}
        />
      )}

      <Accordian
        main_title={HomePageData?.faq_main_title?.value}
        all_faqs={HomePageData?.all_faqs?.value}
        show_section={HomePageData?.faq_main_faq_show.value}
      />
    </>
  );
};

export default page;
