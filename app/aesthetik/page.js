import React from "react";
import ClientCarousel from "../componants/client";
import ReviewsData from "../ReviewsData/page";
import Accordian from "../componants/Accordian";
import Slidehover from "../componants/Slidehover";
import Terminbroncher from "../componants/Terminbroncher";
import MultipleAboutdetails from "../componants/MultipleAboutdetails";
import BannerCarousel from "../componants/Banner";
import Alldata from "../until/AllDatafetch";
import SEODATA from "../until/SEO_Data";
import SEO_schema from "../componants/SEO_schema";
import generatePageMetadata from "../until/generatePageMetadata";
const Page = async () => {
  let AesthetikData;
  let schemaJSON;
  try {
    AesthetikData = await Alldata("/aesthetik");
    const metadata = await SEODATA("/aesthetik");
    schemaJSON = metadata.schema ? JSON.stringify(metadata.schema) : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!AesthetikData || !schemaJSON) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <SEO_schema
        schemaJSON={schemaJSON}
        faqs={AesthetikData?.all_faqs?.value}
      />

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
  return generatePageMetadata("/aesthetik", {
    title: "aesthetik",
    description: "aesthetik",
  });
}
