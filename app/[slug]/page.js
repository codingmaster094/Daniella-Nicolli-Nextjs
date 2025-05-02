import React from "react";
import BannerCarousel from "../componants/Banner";
import LandingAboutSection from "../componants/LandingAboutSection";
import LendingAbout from "../componants/LendingAbout";
import LeandingCategories from "../componants/LeandingCategories";
import Leanding_AboutLambsheim from "../componants/Leanding_AboutLambsheim";
import Comment from "../componants/Comment";
import getLandingData from "../until/getLandingData";
import MetaDataAPIS from "../until/metadataAPI";
import Custom404 from "../not-found";
import HeaderDatas from "../until/HeaderData";

export default async function LandingPage({ params }) {
  const { slug } = await params;

     let ReviewData;
     let landingData;
     try {
        landingData = await getLandingData(`/landing?slug=${slug}`); 
       ReviewData = await HeaderDatas("/acf-options");
       if (!landingData || Object.keys(landingData).length === 0) {
         return <Custom404 />;
       }
     } catch (error) {
       console.error("Error fetching data:", error);
       return <div>Error loading data.</div>; 
     }
  
     if (!ReviewData) {
       return <div>No data available.</div>;
     }

  return (
    <>
      <BannerCarousel
        title={landingData?.hero_slider_main_title}
        img={landingData?.hero_slider_image}
        content={landingData?.hero_slider_content?.replace(/<\/?ul[^>]*>/g, "")}
        BTN={landingData?.hero_slider_button}
      />

      <LandingAboutSection
        main_title={landingData?.landing_page_1_main_title}
        section_image={landingData?.landing_page_1_image}
        section_content={landingData?.landing_page_1_content}
        section_sub_content={landingData?.home_leistungen_section_sub_content}
        BTN={landingData?.landing_page_1_termin_buchen}
        section_show={landingData?.landing_ubersicht_1_section_show}
        Small_image_show={landingData?.landing_ubersicht_image_show}
      />

      <LendingAbout
        title={landingData?.landing_aesthetic_treatments_title}
        content={landingData?.landing_aesthetic_treatments_content}
        allData={landingData?.landing_aesthetic_treatments_details}
        BTN={landingData?.landing_aesthetic_treatments_button}
        section_show={landingData?.landing_aesthetic_section_show}
      />

      <Leanding_AboutLambsheim
        main_title={landingData?.home_anfrage_1_main_title}
        standorte_content={landingData?.home_standorte_content}
        BTN={landingData?.home_standorte_button}
        standorte_image={landingData?.home_standorte_image?.url}
        section_show={landingData?.landing_standorte_section_show}
        Small_image_show={landingData?.landing_standorte_image_show}
      />

      <LeandingCategories
        title={landingData?.home_anfrage_1_main_title}
        description={landingData?.home_anfrage_1_content}
        BTN={landingData?.home_anfrage_1_button}
        bg_img={landingData?.home_anfrage_1_image?.url}
        section_show={landingData?.landing_anfrage_1_section_show}
      />

      <Comment
        main_title="Daniella Nicolli <br> Das sagen meine Patienten"
        content="<p>Privatsphäre, individuelle Betreuung und höchste Sorgfalt stehen bei mir an erster Stelle – dafür braucht es ein offenes Ohr für ehrliches Feedback.</p>"
        
        reviewlogos={ReviewData?.logo_slider}
        slider={ReviewData?.slider}
      />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let metadata = await MetaDataAPIS(`landing/${slug}`);

  // Extract metadata from the head string
  const titleMatch = metadata.head.match(/<title>(.*?)<\/title>/);
  const descriptionMatch = metadata.head.match(
    /<meta name="description" content="(.*?)"/
  );

  const title = titleMatch ? titleMatch[1] : "Default Title";
  const description = descriptionMatch
    ? descriptionMatch[1]
    : "Default Description";

  return {
    title,
    description,
  };
}
