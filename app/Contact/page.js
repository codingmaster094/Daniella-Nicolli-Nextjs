"use client";
import React, { useEffect, useState } from "react";
import BannerCarousel from '../componants/Banner'
import ContactAboutDetails from '../componants/ContactAboutDetails';
import Contactform from '../componants/Contactform';
import axios from "axios";

const page = () => {
  const [ContactData, setContactData] = useState(null);
  const fetchContactData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/kontakt"
      );
      setContactData(response.data); // The result is in response.data with Axios
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  return (
    <>
    {ContactData && (
        <BannerCarousel slidesData={ContactData?.hero_slider} className="custom-class-name" />
      )}

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
      />

      <Contactform 
        main_title={ContactData?.kontakt_form_main_title?.value}
        content={ContactData?.kontakt_form_content?.value}
        live_chat_with_us={ContactData?.kontakt_form_live_chat_with_us?.value}
        form_address={ContactData?.kontakt_form_address?.value}
      />
    </>
  )
}

export default page