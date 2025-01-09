"use client";
import React, { useEffect, useState } from "react";
import BannerCarousel from '../componants/Banner'
import ClientCarousel from '../componants/client';
import UberAboutDeatils from '../componants/UberAboutDeatils';
import Categories from '../componants/Categories';
import Counter from '../componants/Counter';
import UberAboutDeatilsleft from '../componants/UberAboutDeatilsleft';
import Maps from '../componants/Maps';
import Gallrey from '../componants/Gallrey';
import axios from "axios";
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
    {Ubermich && (
        <BannerCarousel slidesData={Ubermich?.hero_slider} className="custom-class-name"/>
      )}

      {Ubermich && (
        <ClientCarousel
          main_title={Ubermich?.partners_section_main_title.value}
          section_all_partners={
            Ubermich?.partners_section_all_partners
          }
        />
      )}

        <UberAboutDeatils 
        main_title={Ubermich?.ueber_geschichte_main_title?.value}
        content={Ubermich?.ueber_geschichte_content?.value}
        image={Ubermich?.ueber_geschichte_image?.value}
        />

        <Categories
          title={Ubermich?.ueber_geschichte_anfrage_main_title?.value}
          description={Ubermich?.ueber_geschichte_anfrage_1_content?.value}
          BTN={Ubermich?.ueber_geschichte_anfrage_1_button?.value}  
          />

        <Counter
          main_title={Ubermich?.ueber_leistungen_main_title?.value}
          all_leistungen={Ubermich?.ueber_all_leistungen?.value}
        />

        <UberAboutDeatilsleft 
          main_title={Ubermich?.ueber_praxis_main_title?.value}
          content={Ubermich?.ueber_praxis_content?.value}
          image={Ubermich?.ueber_praxis_image?.value}
        />

        <Maps 
          main_title={Ubermich?.ueber_standort_kartemain_title?.value}
          image={Ubermich?.ueber_standort_kartemain_map_url?.value}
        />

        {
          Ubermich && (<Gallrey 
          main_title={Ubermich?.ueber_gallery_main_title?.value}
          gallery_images={Ubermich?.ueber_gallery_images?.value}
        />)
        }
        
       </>
  )
}

export default page