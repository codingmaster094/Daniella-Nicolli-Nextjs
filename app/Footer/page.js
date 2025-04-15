import React from "react";
import Footer from "../componants/Footer"; 
import Menudatas from "../until/MenuData";
import HeaderDatas from "../until/HeaderData";

const Page = async () => {
  let FooterData = null;
  let menuData = null;

  try {
     FooterData = await HeaderDatas("/acf-options");
    } catch (error) {
      console.error("Error fetching header data:", error);
    }
  
    try {
       menuData = await Menudatas("/menus/menu-1");
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }

  return <Footer FooterData={FooterData} menuData={menuData} />;
};

export default Page;
