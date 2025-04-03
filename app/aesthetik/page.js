"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ClientCarousel from "../componants/client";
import Comment from "../componants/Comment";
import Accordian from "../componants/Accordian";
import Slidehover from "../componants/Slidehover";
import Terminbroncher from "../componants/Terminbroncher";
import axios from "axios";
import MultipleAboutdetails from "../componants/MultipleAboutdetails";
import BannerCarousel from "../componants/Banner";

const Page = () => {
  const [AesthetikData, setAesthetikData] = useState(null);
  const pathname = usePathname();
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    const fetchAesthetikData = async () => {
      try {
        const response = await axios.get(
          "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/aesthetik"
        );
        setAesthetikData(response.data);
      } catch (error) {
        console.error("Error fetching content data", error);
      }
    };

    fetchAesthetikData();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentFullUrl = `${pathname}${window.location.hash}`;
      setFullUrl(currentFullUrl);

      // Update browser URL without reloading
      window.history.pushState(null, "", currentFullUrl);
    }
  }, [fullUrl]);

  return (
    <>
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

      <Comment
        main_title={AesthetikData?.bewertungen_main_title?.value}
        content={AesthetikData?.bewertungen_content?.value}
      />
      <Accordian
        main_title={AesthetikData?.faq_main_title?.value}
        all_faqs={AesthetikData?.all_faqs?.value}
        show_section={AesthetikData?.faq_main_faq_show.value}
      />
    </>
  );
};

export default Page;
