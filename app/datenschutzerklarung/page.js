"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [datenschutzerklärung, setdatenschutzerklärung] = useState(null);
  const fetchdatenschutzerklärung = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom/v1/page-data/datenschutzerklarung"
      );
      setdatenschutzerklärung(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchdatenschutzerklärung();
  }, []);
  return (
    <section>
      <div className="container mx-auto px-[15px] ">
      <h1>{datenschutzerklärung?.title}</h1>
        <div
          className="banner py-8"
          dangerouslySetInnerHTML={{ __html: datenschutzerklärung?.content }}
        ></div>
      </div>
    </section>
  );
};

export default page;
