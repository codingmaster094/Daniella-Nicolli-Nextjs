// app/Header/page.js
import React from "react";
import axios from "axios"; 
import Header from "../componants/Header";


const Page = async () => {
  let headerData = null;
  let menuData = null;

  try {
    const headerResponse = await axios.get(
      `https://daniella.blog-s.de/wp-json/custom/v1/acf-options`
    );
    headerData = headerResponse.data;
  } catch (error) {
    console.error("Error fetching header data:", error);
  }

  console.log('headerData', headerData)
  try {
    const menuResponse = await axios.get(
      `https://daniella.blog-s.de/wp-json/custom/v1/menus/menu-1`
    );
    menuData = menuResponse.data;
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }

  return <Header headerDatas={headerData} menuData={menuData} />;
};

export default Page;
