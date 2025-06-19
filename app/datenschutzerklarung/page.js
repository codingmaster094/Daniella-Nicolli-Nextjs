import React from "react";
import Menudatas from "../until/MenuData";

const page = async() => {

    let datenschutzerklärung;
     try {
       datenschutzerklärung = await Menudatas(
         "/page-data/datenschutzerklarung"
       );
     } catch (error) {
       console.error("Error fetching data:", error);
       return <div>Error loading data.</div>; // Fallback UI
     }
  
     if (!datenschutzerklärung) {
       return <div>No data available.</div>; // Fallback UI
     }


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
