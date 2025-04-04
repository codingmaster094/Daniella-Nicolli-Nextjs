"use client";
import React, { useEffect, useState } from "react"; 
import axios from "axios";
import dynamic from "next/dynamic";
import Loader from "../componants/Loader";
const BannerCarousel = dynamic(() => import("../componants/Banner"), {
  ssr: false,
});
const Comment = dynamic(() => import("../componants/Comment"), { ssr: false });
const ClientCarousel = dynamic(() => import("../componants/client"), {
  ssr: false,
});
const Terminbroncher = dynamic(() => import("../componants/Terminbroncher"), {
  ssr: false,
});
const Slidehover = dynamic(() => import("../componants/Slidehover"), {
  ssr: false,
});
const Accordian = dynamic(() => import("../componants/Accordian"), {
  ssr: false,
});
const MultipleAboutdetails = dynamic(
  () => import("../componants/MultipleAboutdetails"),
  { ssr: false }
);


const page = () => {
  const [Naturheilmedizin, setNaturheilmedizin] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchNaturheilmedizin = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/naturheilmedizin"
      );
      setNaturheilmedizin(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    } finally {
      setLoading(false); // Hide loader when data is fetched
    }
  };

  useEffect(() => {
    fetchNaturheilmedizin();
  }, []);


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
        loading={loading}
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
