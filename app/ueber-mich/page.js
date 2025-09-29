import React from "react";
import ClientCarousel from "../componants/client";
import UberAboutDeatils from "../componants/UberAboutDeatils";
import Counter from "../componants/Counter";
import UberAboutDeatilsleft from "../componants/UberAboutDeatilsleft";
import Gallrey from "../componants/Gallrey";
import Categories from "../componants/Categories";
import BannerCarousel from "../componants/Banner";
import Alldata from "../until/AllDatafetch";

import Accordian from "../componants/Accordian";
import SEODATA from "../until/SEO_Data";
import dynamic from "next/dynamic";
import SEO_schema from "../componants/SEO_schema";
import generatePageMetadata from "../until/generatePageMetadata";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"), {
  ssr: true,
});
const page = async () => {  
  let Ubermich;
  let schemaJSON;
  try {
    Ubermich = await Alldata("/ueber-mich");
     const metadata = await SEODATA("/ueber-mich");
        schemaJSON = metadata.schema ? JSON.stringify(metadata.schema) : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>; // Fallback UI
  }

  if (!Ubermich || !schemaJSON) {
    return <div>No data available.</div>; // Fallback UI
  }


  return (
    <>
     <SEO_schema
        schemaJSON={schemaJSON}
      />
      <BannerCarousel
        title={Ubermich?.hero_slider_main_title?.value}
        img={Ubermich?.hero_slider_image?.value}
        content={Ubermich?.hero_slider_content?.value.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={Ubermich?.hero_slider_button?.value}
      />

      {Ubermich && (
        <ClientCarousel
          main_title={Ubermich?.partners_section_main_title.value}
          section_all_partners={Ubermich?.partners_section_all_partners}
          activate_deactivate={Ubermich?.enabledisable_partners_logos?.value}
        />
      )}

      <UberAboutDeatils
        main_title={Ubermich?.ueber_geschichte_main_title?.value}
        content={Ubermich?.ueber_geschichte_content?.value}
        main_title1={Ubermich?.ueber_praxis_main_title?.value}
        content1={Ubermich?.ueber_praxis_content?.value}
        image={Ubermich?.ueber_geschichte_image?.value}
        Small_image_show={Ubermich?.ueber_geschichte_image_show}
      />

      {Ubermich && (
        <Counter
          main_title={Ubermich?.ueber_leistungen_main_title?.value}
          all_leistungen={Ubermich?.ueber_all_leistungen?.value}
        />
      )}

      <UberAboutDeatilsleft
        main_title={Ubermich?.experience_title?.value}
        sub_content={Ubermich?.experience_year?.value}
        image={Ubermich?.ueber_praxis_image?.value}
        Small_image_show={Ubermich?.ueber_praxis_image_show?.value}
      />

      <Categories
        title={Ubermich?.ueber_geschichte_anfrage_main_title?.value}
        description={Ubermich?.ueber_geschichte_anfrage_1_content?.value}
        BTN={Ubermich?.ueber_geschichte_anfrage_1_button.value}
        bg_img={Ubermich?.ueber_geschichte_anfrage_1_image?.value}
      />

      {Ubermich && (
        <Gallrey
          main_title={Ubermich?.ueber_gallery_main_title?.value}
          gallery_images={Ubermich?.ueber_gallery_images?.value}
          gallery_truefalse={Ubermich?.gallery_truefalse?.value}
        />
      )}

      <Accordian
        main_title={Ubermich?.faq_main_title?.value}
        all_faqs={Ubermich?.all_faqs?.value}
        show_section={Ubermich?.faq_main_faq_show.value}
      />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return generatePageMetadata("/ueber-mich", {
    title: "ueber-mich",
    description: "ueber-mich",
  });
}
