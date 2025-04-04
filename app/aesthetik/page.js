"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Loader from "../componants/Loader";

const ClientCarousel = dynamic(() => import("../componants/client"), {
  ssr: false,
});
const Comment = dynamic(() => import("../componants/Comment"), { ssr: false });
const Accordian = dynamic(() => import("../componants/Accordian"), {
  ssr: false,
});
const Slidehover = dynamic(() => import("../componants/Slidehover"), {
  ssr: false,
});
const Terminbroncher = dynamic(() => import("../componants/Terminbroncher"), {
  ssr: false,
});
const MultipleAboutdetails = dynamic(
  () => import("../componants/MultipleAboutdetails"),
  { ssr: false }
);
const BannerCarousel = dynamic(() => import("../componants/Banner"), {
  ssr: false,
});
const Page = () => {
  const [AesthetikData, setAesthetikData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchAesthetikData = async () => {
      try {
        const response = await axios.get(
          "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/aesthetik"
        );
        setAesthetikData(response.data);
      } catch (error) {
        setError("Failed to load data");
      } finally {
        setLoading(false); // Hide loader when data is fetched
      }
    };

    fetchAesthetikData();
  }, []);

    if (loading) {
      return <Loader />; // Show loader while fetching data
    }

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
