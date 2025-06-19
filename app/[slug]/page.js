import React from "react";
import BannerCarousel from "../componants/Banner";
import LandingAboutSection from "../componants/LandingAboutSection";
import LendingAbout from "../componants/LendingAbout";
import LeandingCategories from "../componants/LeandingCategories";
import Leanding_AboutLambsheim from "../componants/Leanding_AboutLambsheim";
import ReviewsData from "../ReviewsData/page";
import getLandingData from "../until/getLandingData";
import MetaDataAPIS from "../until/metadataAPI";
import Custom404 from "../not-found";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));
export default async function LandingPage({ params }) {
  const { slug } = await params;
     let landingData;
     try {
        landingData = await getLandingData(`/landing?slug=${slug}`); 
       if (!landingData || Object.keys(landingData).length === 0) {
         return <Custom404 />;
       }
     } catch (error) {
       console.error("Error fetching data:", error);
       return <div>Error loading data.</div>; 
     }
  
     if (!landingData) {
       return <div>No data available.</div>;
     }

     const metadata = await MetaDataAPIS(`landing/${slug}`);
     
       const schemaMatch = metadata.head.match(
         /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
       );
       const schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;

  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
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

      <ReviewsData />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const metadata = await MetaDataAPIS(`landing/${slug}`);
    const head = metadata?.head || "";

    const titleMatch = head.match(/<title>(.*?)<\/title>/);
    const descriptionMatch = head.match(
      /<meta name="description" content="(.*?)"/
    );
    const canonicalMatch = head.match(
      /<link\s+rel="canonical"\s+href="([^"]+)"/i
    );

    const title = titleMatch?.[1] || `Default Title - ${slug}`;
    const description =
      descriptionMatch?.[1] || `Default description for ${slug}`;
    const canonical =
      canonicalMatch?.[1] ||
      `https://daniella-nicolli-nextjs.vercel.app/landing/${slug}`;

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        url: canonical,
      },
      twitter: {
        title,
        description,
        card: "summary_large_image",
      },
    };
  } catch (error) {
    console.error(`generateMetadata error for slug "/landing/${slug}":`, error);
    return {
      title: `Default Title - ${slug}`,
      description: `Default description for ${slug}`,
      alternates: {
        canonical: `https://daniella-nicolli-nextjs.vercel.app/landing/${slug}`,
      },
    };
  }
}
