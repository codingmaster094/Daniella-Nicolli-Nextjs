"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import Loader from "../componants/Loader";

const ContactAboutDetails = dynamic(
  () => import("../componants/ContactAboutDetails"),
  { ssr: false }
);
const Contactform = dynamic(() => import("../componants/Contactform"), {
  ssr: false,
});
const Maps = dynamic(() => import("../componants/Maps"), { ssr: false });
const BannerCarousel = dynamic(() => import("../componants/Banner"), {
  ssr: false,
});
const page = () => {
  const [ContactData, setContactData] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchContactData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/kontakt"
      );
      setContactData(response.data); // The result is in response.data with Axios
    } catch (error) {
      console.error("Error fetching content data", error);
    } finally {
      setLoading(false); // Hide loader when data is fetched
    }
  };

  useEffect(() => {
    fetchContactData();
  }, []);

    
  return (
    <>
      <BannerCarousel
        title={ContactData?.hero_slider_main_title?.value}
        img={ContactData?.hero_slider_image?.value}
        content={ContactData?.hero_slider_content?.value.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={ContactData?.hero_slider_button?.value}
        loading={loading}
      />

      <ContactAboutDetails
        main_title={ContactData?.kontakt_uebersicht_main_title?.value}
        content={ContactData?.kontakt_uebersicht_content?.value}
        image={ContactData?.kontakt_uebersicht_image?.value}
        telefonnummer_label={ContactData?.kontakt_telefonnummer_label?.value}
        email_label={ContactData?.kontakt_email_label?.value}
        terminbuchung_label={ContactData?.kontakt_terminbuchung_label?.value}
        telefonnummer_button={ContactData?.kontakt_telefonnummer_button?.value}
        email_button={ContactData?.kontakt_email_button?.value}
        terminbuchung_button={ContactData?.kontakt_terminbuchung_button?.value}
        terminbuchung_text={ContactData?.kontakt_terminbuchung_text?.value}
        loading={loading}
      />

      <Maps
        main_title={ContactData?.kontakt_standort_kartemain_title?.value}
        map_image={ContactData?.map_image?.value}
        map_url={ContactData?.map_url?.value}
      />

      <Contactform
        main_title={ContactData?.kontakt_form_main_title?.value}
        content={ContactData?.kontakt_form_content?.value}
        live_chat_with_us={ContactData?.kontakt_form_live_chat_with_us?.value}
        form_address={ContactData?.kontakt_form_address?.value}
      />
    </>
  );
};

export default page;
