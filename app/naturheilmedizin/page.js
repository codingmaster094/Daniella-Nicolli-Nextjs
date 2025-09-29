import React from "react";
import BannerCarousel from "../componants/Banner";
import ReviewsData from "../ReviewsData/page";
import ClientCarousel from "../componants/client";
import Terminbroncher from "../componants/Terminbroncher";
import Slidehover from "../componants/Slidehover";
import Accordian from "../componants/Accordian";
import MultipleAboutdetails from "../componants/MultipleAboutdetails";
import Alldata from "../until/AllDatafetch";
import SEO_schema from "../componants/SEO_schema";
import SEODATA from "../until/SEO_Data";
import dynamic from "next/dynamic";
import generatePageMetadata from "../until/generatePageMetadata";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"), {
  ssr: true,
});


const Page = async () => {
  let Naturheilmedizin = null;
  let schemaJSON = null;

  try {
    Naturheilmedizin = await Alldata("/naturheilmedizin");
    const metadata = await SEODATA("/naturheilmedizin");
    schemaJSON = metadata?.schema ? JSON.stringify(metadata.schema) : null;
  } catch (error) {
    console.error("Error fetching Naturheilmedizin data:", error);
    // instead of returning JSX, gracefully show empty page to let build succeed
    return null;
  }

  if (!Naturheilmedizin || !schemaJSON) {
    // return null so build does not fail
    return null;
  }

  return (
    <>
      <SEO_schema
        schemaJSON={schemaJSON}
        faqs={Naturheilmedizin?.all_faqs?.value}
      />

      <BannerCarousel
        title={Naturheilmedizin?.hero_slider_main_title?.value}
        img={Naturheilmedizin?.hero_slider_image?.value}
        content={Naturheilmedizin?.hero_slider_content?.value?.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={Naturheilmedizin?.hero_slider_button?.value}
      />

      {Naturheilmedizin && (
        <ClientCarousel
          main_title={Naturheilmedizin?.partners_section_main_title?.value}
          section_all_partners={
            Naturheilmedizin?.partners_section_all_partners
          }
          activate_deactivate={
            Naturheilmedizin?.enabledisable_partners_logos?.value
          }
        />
      )}

      <Terminbroncher
        title={Naturheilmedizin?.aesthetik_grundsätze_main_title?.value}
        BTN={Naturheilmedizin?.aesthetik_grundsätze_button?.value}
        columns={Naturheilmedizin?.aesthetik_grundsätze_all_contents?.value}
      />

      <MultipleAboutdetails
        MultipleAboutdeta={
          Naturheilmedizin?.aesthetik_all_anfrage_faltenunterspritzung
        }
      />

      {Naturheilmedizin && (
        <Slidehover
          main_title={Naturheilmedizin?.referenzen_main_title?.value}
          all_referenzen={Naturheilmedizin?.all_referenzen}
          enabledisable_referenz={
            Naturheilmedizin?.enabledisable_referenz?.value
          }
          bg_image={Naturheilmedizin?.referenzen_background_image?.value}
        />
      )}

      <ReviewsData />

      <Accordian
        main_title={Naturheilmedizin?.faq_main_title?.value}
        all_faqs={Naturheilmedizin?.all_faqs?.value}
        show_section={Naturheilmedizin?.faq_main_faq_show?.value}
      />
    </>
  );
};

export default Page;

export async function generateMetadata() {
  return generatePageMetadata("/naturheilmedizin", {
    title: "naturheilmedizin",
    description: "naturheilmedizin",
  });
}
