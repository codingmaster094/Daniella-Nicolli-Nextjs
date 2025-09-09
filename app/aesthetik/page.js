import React from "react";
import ClientCarousel from "../componants/client"
import ReviewsData from "../ReviewsData/page";
import Accordian from "../componants/Accordian"
import Slidehover from "../componants/Slidehover"
import Terminbroncher from "../componants/Terminbroncher"
import MultipleAboutdetails from "../componants/MultipleAboutdetails"
import BannerCarousel from "../componants/Banner"
import Alldata from "../until/AllDatafetch";
import SEODATA from "../until/SEO_Data";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"), {
  ssr: true,
});
const Page = async() => {
  let AesthetikData;
  let schemaJSON;
  try {
    const metadata = await SEODATA("/aesthetik");
    AesthetikData = await Alldata("/aesthetik");
   schemaJSON = metadata.schema ? JSON.stringify(metadata.schema) : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }
  
     if (!AesthetikData) {
       return <div>No data available.</div>;
     }


  return (
    <>
      {
  schemaJSON && schemaJSON !== "[]" && (
    <SchemaInjector schemaJSON={schemaJSON} />
  )
}
      <BannerCarousel
        title={AesthetikData?.hero_slider_main_title?.value}
        img={AesthetikData?.hero_slider_image?.value}
        content={AesthetikData?.hero_slider_content?.value.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={AesthetikData?.hero_slider_button?.value}
      />

      {AesthetikData && (
        <ClientCarousel
          main_title={AesthetikData?.partners_section_main_title?.value}
          section_all_partners={AesthetikData?.partners_section_all_partners}
          activate_deactivate={
            AesthetikData?.enabledisable_partners_logos?.value
          }
        />
      )}
      <Terminbroncher
        title={AesthetikData?.aesthetik_grundsätze_main_title?.value}
        BTN={AesthetikData?.aesthetik_grundsätze_button.value}
        columns={AesthetikData?.aesthetik_grundsätze_all_contents?.value}
      />

      <MultipleAboutdetails
        MultipleAboutdeta={
          AesthetikData?.aesthetik_all_anfrage_faltenunterspritzung
        }
      />
      {AesthetikData && (
        <Slidehover
          main_title={AesthetikData?.referenzen_main_title?.value}
          all_referenzen={AesthetikData?.all_referenzen}
          enabledisable_referenz={AesthetikData?.enabledisable_referenz?.value}
          bg_image={AesthetikData?.referenzen_background_image?.value}
        />
      )}

      <ReviewsData />
      <Accordian
        main_title={AesthetikData?.faq_main_title?.value}
        all_faqs={AesthetikData?.all_faqs?.value}
        show_section={AesthetikData?.faq_main_faq_show.value}
      />
    </>
  );
};

export default Page;

export async function generateMetadata() {
  const metadata = await SEODATA("/aesthetik");
  const seo = metadata?.seo?.computed || {};

  const title =
    seo.title ||
    "home";

  const description =
    seo.description ||
    "home";

  const canonical =
    seo.canonical && seo.canonical !== ""
      ? seo.canonical
      : "https://www.heilpraktikerin-nicolli.de/aesthetik";

  const robots =
    seo.robots && (seo.robots.index || seo.robots.follow)
      ? `${seo.robots.index ? "index" : "noindex"},${
          seo.robots.follow ? "follow" : "nofollow"
        }`
      : "noindex,nofollow";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      title: seo.social?.facebook?.title || title,
      description: seo.social?.facebook?.description || description,
      url: canonical,
      images: seo.social?.facebook?.image
        ? [seo.social.facebook.image]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.social?.twitter?.title || title,
      description: seo.social?.twitter?.description || description,
      images: seo.social?.twitter?.image
        ? [seo.social.twitter.image]
        : undefined,
    },
  };
}