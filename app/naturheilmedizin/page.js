import React from "react";
import BannerCarousel from "../componants/Banner";
import ReviewsData from "../ReviewsData/page";
import ClientCarousel from "../componants/client";
import Terminbroncher from "../componants/Terminbroncher";
import Slidehover from "../componants/Slidehover";
import Accordian from "../componants/Accordian";
import MultipleAboutdetails from "../componants/MultipleAboutdetails";
import Alldata from "../until/AllDatafetch";
import MetaDataAPIS from "../until/metadataAPI";

const page = async () => {
  let Naturheilmedizin;
  try {
    Naturheilmedizin = await Alldata("/naturheilmedizin");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>; // Fallback UI
  }

  if (!Naturheilmedizin) {
    return <div>No data available.</div>; // Fallback UI
  }

  
  return (
    <>
      <BannerCarousel
        title={Naturheilmedizin?.hero_slider_main_title?.value}
        img={Naturheilmedizin?.hero_slider_image?.value}
        content={Naturheilmedizin?.hero_slider_content?.value.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={Naturheilmedizin?.hero_slider_button?.value}
      />

      {Naturheilmedizin && (
        <ClientCarousel
          main_title={Naturheilmedizin?.partners_section_main_title.value}
          section_all_partners={Naturheilmedizin?.partners_section_all_partners}
          activate_deactivate={
            Naturheilmedizin?.enabledisable_partners_logos?.value
          }
        />
      )}
      <Terminbroncher
        title={Naturheilmedizin?.aesthetik_grundsätze_main_title.value}
        BTN={Naturheilmedizin?.aesthetik_grundsätze_button.value}
        columns={Naturheilmedizin?.aesthetik_grundsätze_all_contents.value}
      />

      <MultipleAboutdetails
        MultipleAboutdeta={
          Naturheilmedizin?.aesthetik_all_anfrage_faltenunterspritzung
        }
      />

      {Naturheilmedizin && (
        <Slidehover
          main_title={Naturheilmedizin?.referenzen_main_title.value}
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
        show_section={Naturheilmedizin?.faq_main_faq_show.value}
      />
    </>
  );
};

export default page;

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/naturheilmedizin");

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