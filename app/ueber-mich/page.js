"use client";
import React, { useEffect, useState } from "react";
import ClientCarousel from "../componants/client";
import UberAboutDeatils from "../componants/UberAboutDeatils";
import Counter from "../componants/Counter";
import UberAboutDeatilsleft from "../componants/UberAboutDeatilsleft";
import Gallrey from "../componants/Gallrey";
import axios from "axios";
import Categories from "../componants/Categories";
import BannerCarousel from "../componants/Banner";

const page = () => {
  const [Ubermich, setUbermich] = useState(null);

  const fetchUbermich = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/ueber-mich"
      );
      setUbermich(response.data); // The result is in response.data with Axios
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchUbermich();
  }, []);

  return (
    <>
      <BannerCarousel
        title={Ubermich?.hero_slider_main_title?.value}
        img={Ubermich?.hero_slider_image?.value}
        content={Ubermich?.hero_slider_content?.value.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={Ubermich?.hero_slider_button?.value}
      />

      {Ubermich && (
        <ClientCarousel
          main_title={Ubermich?.partners_section_main_title.value}
          section_all_partners={Ubermich?.partners_section_all_partners}
          activate_deactivate={Ubermich?.enabledisable_partners_logos?.value}
        />
      )}

      <UberAboutDeatils
        main_title={Ubermich?.ueber_geschichte_main_title?.value}
        content={Ubermich?.ueber_geschichte_content?.value}
        image={Ubermich?.ueber_geschichte_image?.value}
        sub_content={Ubermich?.experience_year?.value}
      />

      {Ubermich && (
        <Counter
          main_title={Ubermich?.ueber_leistungen_main_title?.value}
          all_leistungen={Ubermich?.ueber_all_leistungen?.value}
        />
      )}

      <UberAboutDeatilsleft
        main_title={Ubermich?.ueber_praxis_main_title?.value}
        content={Ubermich?.ueber_praxis_content?.value}
        image={Ubermich?.ueber_praxis_image?.value}
      />

      <Categories
        title={Ubermich?.ueber_geschichte_anfrage_main_title?.value}
        description={Ubermich?.ueber_geschichte_anfrage_1_content?.value}
        BTN={Ubermich?.ueber_geschichte_anfrage_1_button.value}
      />

      {Ubermich && (
        <Gallrey
          main_title={Ubermich?.ueber_gallery_main_title?.value}
          gallery_images={Ubermich?.ueber_gallery_images?.value}
        />
      )}
    </>
  );
};

export default page;
