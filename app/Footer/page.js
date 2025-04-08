// app/Footer/page.js
import React from "react";
import axios from "axios";
import Footer from "../componants/Footer"; // Ensure the path is correct

const Page = async () => {
  let FooterData = null;
  let menuData = null;

  try {
    const headerResponse = await axios.get(
      `https://daniella.blog-s.de/wp-json/custom/v1/acf-options`
    );
    FooterData = headerResponse.data;
  } catch (error) {
    console.error("Error fetching footer data:", error);
  }

  try {
    const menuResponse = await axios.get(
      `https://daniella.blog-s.de/wp-json/custom/v1/menus/menu-1`
    );
    menuData = menuResponse.data;
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }

  return <Footer FooterData={FooterData} menuData={menuData} />;
};

export default Page;
