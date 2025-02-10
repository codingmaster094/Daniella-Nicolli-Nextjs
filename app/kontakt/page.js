"use client";
import React, { useEffect, useState } from "react";
import ContactAboutDetails from '../componants/ContactAboutDetails';
import Contactform from '../componants/Contactform';
import axios from "axios";
import Maps from "../componants/Maps";

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
      {
      ContactData && 
      <section>
        <div className={`Banner`}>
          <div className="Banner-sliders relative">
                <div className="item">
                  <div
                    className="bg-banner bg-banner-img bg-cover px-[15px]  2xl:ps-[148px]"
                    style={{
                    backgroundImage: ContactData?.hero_slider_image?.value
                      ? `url(${ContactData?.hero_slider_image?.value})`
                      : "none",
                  }}
                  >
                    <div className="flex flex-col bg-Bgwhite  p-6 lg:p-12 gap-4 lg:gap-8 w-full md:w-[845px] ">
                      <h1>{ContactData?.hero_slider_main_title?.value}</h1>
                      <ul
                        className="menu"
                        dangerouslySetInnerHTML={{
                          __html: ContactData?.hero_slider_content?.value.replace(/<\/?ul[^>]*>/g, ""),
                        }}
                      ></ul>
                      {ContactData?.hero_slider_button && (
                        <Link
                          href={ContactData?.hero_slider_button?.value?.url}
                          target={ContactData?.hero_slider_button?.value?.target}
                          className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                          aria-label={ContactData?.hero_slider_button?.value?.title || "button link"}
                        >
                          {ContactData?.hero_slider_button?.value?.title}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    } 

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
          main_title ={ContactData?.kontakt_standort_kartemain_title?.value}
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
  )
}

export default page