import React from "react";
import ContactAboutDetails from "../componants/ContactAboutDetails";
import Contactform from "../componants/Contactform";
import Maps from "../componants/Maps";
import BannerCarousel from "../componants/Banner";
const page = async () => {
  let ContactData;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/kontakt`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    ContactData = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    ContactData = null; 
  }

  if (!ContactData) {
    return <div>Error loading data.</div>; 
  }

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
