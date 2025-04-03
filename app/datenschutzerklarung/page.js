"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [datenschutzerklärung, setdatenschutzerklärung] = useState(null);
  const [error, setError] = useState(null);
  const slug = "datenschutzerklarung"; // You can make this dynamic based on routing

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/documentAPI?slug=${slug}`);
      
        setdatenschutzerklärung(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [slug]);


  return (
    <section className="section">
      <div className="py-10  md:py-[70px]  lg:py-[100px] bg-Teal ">
        <div className="container mx-auto px-[15px] ">
          <h1 className="text-white">{datenschutzerklärung?.title}</h1>
        </div>
      </div>
      <div className="container mx-auto px-[15px]">
        <div
          className="py-10 md:py-[70px] text-a   space-y-4 "
          dangerouslySetInnerHTML={{ __html: datenschutzerklärung?.content }}
        ></div>
      </div>
    </section>
  );
};

export default page;
