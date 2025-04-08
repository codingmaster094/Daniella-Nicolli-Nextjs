"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";


const ClientCarousel = dynamic(() => import("../componants/client"), {
  ssr: false,
});
const UberAboutDeatils = dynamic(
  () => import("../componants/UberAboutDeatils"),
  { ssr: false }
);
const Counter = dynamic(() => import("../componants/Counter"), { ssr: false });
const UberAboutDeatilsleft = dynamic(
  () => import("../componants/UberAboutDeatilsleft"),
  { ssr: false }
);
const Gallrey = dynamic(() => import("../componants/Gallrey"), { ssr: false });
const Categories = dynamic(() => import("../componants/Categories"), {
  ssr: false,
});
const BannerCarousel = dynamic(() => import("../componants/Banner"), {
  ssr: false,
});

const page = () => {
  const [Ubermich, setUbermich] = useState(null);
const [loading, setLoading] = useState(true);
  const fetchUbermich = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/ueber-mich`
      );
      setUbermich(response.data); // The result is in response.data with Axios
    } catch (error) {
      console.error("Error fetching content data", error);
    } finally {
      setLoading(false); // Hide loader when data is fetched
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
        loading={loading}
      />

      {Ubermich && (
        <ClientCarousel
          main_title={Ubermich?.partners_section_main_title.value}
          section_all_partners={Ubermich?.partners_section_all_partners}
          activate_deactivate={Ubermich?.enabledisable_partners_logos?.value}
          loading={loading}
        />
      )}

      <UberAboutDeatils
        main_title={Ubermich?.ueber_geschichte_main_title?.value}
        content={Ubermich?.ueber_geschichte_content?.value}
        image={Ubermich?.ueber_geschichte_image?.value}
        sub_content={Ubermich?.experience_year?.value}
        Small_image_show={Ubermich?.ueber_geschichte_image_show}
        loading={loading}
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
        Small_image_show={Ubermich?.ueber_praxis_image_show?.value}
        loading={loading}
      />

      <Categories
        title={Ubermich?.ueber_geschichte_anfrage_main_title?.value}
        description={Ubermich?.ueber_geschichte_anfrage_1_content?.value}
        BTN={Ubermich?.ueber_geschichte_anfrage_1_button.value}
        bg_img={Ubermich?.ueber_geschichte_anfrage_1_image?.value}
        loading={loading}
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
