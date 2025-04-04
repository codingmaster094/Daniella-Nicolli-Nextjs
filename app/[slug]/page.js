"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";


const BannerCarousel = dynamic(() => import("../componants/Banner"), {
  ssr: false,
});
const LandingAboutSection = dynamic(
  () => import("../componants/LandingAboutSection"),
  { ssr: false }
);
const LendingAbout = dynamic(() => import("../componants/LendingAbout"), {
  ssr: false,
});
const LeandingCategories = dynamic(
  () => import("../componants/LeandingCategories"),
  { ssr: false }
);
const Leanding_AboutLambsheim = dynamic(
  () => import("../componants/Leanding_AboutLambsheim"),
  { ssr: false }
);
const Loader = dynamic(() => import("../componants/Loader"),
{ ssr: false });

const page = () => {
  const [LendiangPageData, setLendiangPageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const slug = params?.slug;
  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `https://daniella.blog-s.de/wp-json/wp/v2/landing?slug=${slug}`
      );
      setLendiangPageData(response.data.acf);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    } finally {
      setLoading(false); // Hide loader when data is fetched
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);


  return (
    <>
      <BannerCarousel
        title={LendiangPageData?.hero_slider_main_title}
        img={LendiangPageData?.hero_slider_image}
        content={LendiangPageData?.hero_slider_content?.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={LendiangPageData?.hero_slider_button}
        loading={loading}
      />

      <LandingAboutSection
        main_title={LendiangPageData?.landing_page_1_main_title}
        section_image={LendiangPageData?.landing_page_1_image}
        section_content={LendiangPageData?.landing_page_1_content}
        section_sub_content={
          LendiangPageData?.home_leistungen_section_sub_content
        }
        BTN={LendiangPageData?.landing_page_1_termin_buchen}
        section_show={LendiangPageData.landing_ubersicht_1_section_show}
        Small_image_show={LendiangPageData.landing_ubersicht_image_show}
      />

      <LendingAbout
        title={LendiangPageData.landing_aesthetic_treatments_title}
        content={LendiangPageData.landing_aesthetic_treatments_content}
        allData={LendiangPageData.landing_aesthetic_treatments_details}
        BTN={LendiangPageData.landing_aesthetic_treatments_button}
        section_show={LendiangPageData.landing_aesthetic_section_show}
      />

      <Leanding_AboutLambsheim
        main_title={LendiangPageData?.home_anfrage_1_main_title}
        standorte_content={LendiangPageData?.home_standorte_content}
        BTN={LendiangPageData?.home_standorte_button}
        standorte_image={LendiangPageData?.home_standorte_image?.url}
        section_show={LendiangPageData.landing_standorte_section_show}
        Small_image_show={LendiangPageData.landing_standorte_image_show}
      />

      <LeandingCategories
        title={LendiangPageData?.home_anfrage_1_main_title}
        description={LendiangPageData?.home_anfrage_1_content}
        BTN={LendiangPageData?.home_anfrage_1_button}
        bg_img={LendiangPageData?.home_anfrage_1_image?.url}
        section_show={LendiangPageData.landing_anfrage_1_section_show}
      />
    </>
  );
};

export default page;
