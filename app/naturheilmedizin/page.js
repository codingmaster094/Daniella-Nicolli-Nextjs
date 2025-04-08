import React from "react";
import axios from "axios";
import dynamic from "next/dynamic";

import BannerCarousel from "../componants/Banner";
import Comment from "../componants/Comment";
import ClientCarousel from "../componants/client";
import Terminbroncher from "../componants/Terminbroncher";
import Slidehover from "../componants/Slidehover";
import Accordian from "../componants/Accordian";
import MultipleAboutdetails from "../componants/MultipleAboutdetails";

const page = async () => {
  let Naturheilmedizin;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/naturheilmedizin`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    Naturheilmedizin = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    Naturheilmedizin = null; 
  }

  if (!Naturheilmedizin) {
    return <div>Error loading data.</div>; 
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

      <Comment
        main_title={Naturheilmedizin?.bewertungen_main_title?.value}
        content={Naturheilmedizin?.bewertungen_content?.value}
      />
      <Accordian
        main_title={Naturheilmedizin?.faq_main_title?.value}
        all_faqs={Naturheilmedizin?.all_faqs?.value}
        show_section={Naturheilmedizin?.faq_main_faq_show.value}
      />
    </>
  );
};

export default page;
