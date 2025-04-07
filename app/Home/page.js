"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
// const imageSrc = defaultImage;

const ClientCarousel = dynamic(() => import("../componants/client"), {
  ssr: false,
});
const Aboutdetails = dynamic(() => import("../componants/Aboutdetails"), {
  ssr: false,
});
const Categories = dynamic(() => import("../componants/Categories"), {
  ssr: false,
});
const AboutLambsheim = dynamic(() => import("../componants/AboutLambsheim"), {
  ssr: false,
});
const Fermentum = dynamic(() => import("../componants/Fermentum"), {
  ssr: false,
});
const Serviceslider = dynamic(() => import("../componants/Serviceslider"), {
  ssr: false,
});
const Comment = dynamic(() => import("../componants/Comment"), { ssr: false });
const Slidehover = dynamic(() => import("../componants/Slidehover"), {
  ssr: false,
});
const BannerCarousel = dynamic(() => import("../componants/Banner"), {
  ssr: false,
});
const Accordian = dynamic(() => import("../componants/Accordian"), {
  ssr: false,
});

const page = () => {
  const [HomePageData, setHomePageData] = useState(null);
  const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  const fetchHomeData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/home"
      );
      setHomePageData(response.data);
    } catch (error) {
      setError("Failed to load data");
    }
    finally{
      setLoading(true);
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
        loading={loading}
      />

      {HomePageData && (
        <ClientCarousel
          main_title={HomePageData?.partners_section_main_title.value}
          section_all_partners={HomePageData?.partners_section_all_partners}
          activate_deactivate={HomePageData?.enabledisable_partner_logos?.value}
          loading={loading}
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
        loading={loading}
      />

      <Categories
        title={HomePageData?.home_anfrage_1_main_title.value}
        description={HomePageData?.home_anfrage_1_content.value}
        BTN={HomePageData?.home_anfrage_1_button.value}
        bg_img={HomePageData?.home_anfrage_1_image?.value}
        loading={loading}
      />

      <AboutLambsheim
        main_title={HomePageData?.home_standorte_main_title?.value}
        standorte_content={HomePageData?.home_standorte_content?.value}
        BTN={HomePageData?.home_standorte_button?.value}
        standorte_image={HomePageData?.home_standorte_image?.value}
        Small_image_show={HomePageData?.display_small_image?.value}
        loading={loading}
      />

      {HomePageData && (
        <Fermentum
          main_title={HomePageData?.home_vorteile_main_title.value}
          all_vorteile={HomePageData?.home_all_vorteile}
          loading={loading}
        />
      )}

      <Categories
        title={HomePageData?.home_anfrage_2_main_title.value}
        description={HomePageData?.home_anfrage_2_content.value}
        BTN={HomePageData?.home_anfrage_2_button.value}
        bg_img={HomePageData?.home_anfrage_2_image?.value}
        loading={loading}
      />

      {HomePageData && (
        <Serviceslider
          main_title={HomePageData?.home_ablauf_main_title.value}
          all_ablauf={HomePageData?.home_all_ablauf}
          enabledisable_referenz={HomePageData?.enabledisable_referenz?.value}
          loading={loading}
        />
      )}

      <Comment
        main_title={HomePageData?.bewertungen_main_title?.value}
        content={HomePageData?.bewertungen_content?.value}
        loading={loading}
      />

      {HomePageData && (
        <Slidehover
          main_title={HomePageData?.referenzen_main_title.value}
          all_referenzen={HomePageData?.all_referenzen}
          enabledisable_referenz={HomePageData?.enabledisable_referenz?.value}
          bg_image={HomePageData?.referenzen_background_image?.value}
        />
      )}

      <Accordian
        main_title={HomePageData?.faq_main_title?.value}
        all_faqs={HomePageData?.all_faqs?.value}
        show_section={HomePageData?.faq_main_faq_show.value}
        loading={loading}
      />
    </>
  );
};

export default page;

