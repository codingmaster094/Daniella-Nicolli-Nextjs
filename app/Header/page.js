// app/Header/page.js
import React from "react"; 
import Header from "../componants/Header";
import HeaderDatas from "../until/HeaderData";
import Menudatas from "../until/MenuData";
import Mobile_buttons from "../componants/Mobile_buttons";


const Page = async () => {
  let headerData = null;
  let menuData = null;
  try {
   headerData = await HeaderDatas("/acf-options");
  } catch (error) {
    console.error("Error fetching header data:", error);
  }

  try {
     menuData = await Menudatas("/menus/menu-1");
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }

  return (
    <>
      <Header headerDatas={headerData} menuData={menuData} />
      <Mobile_buttons />
    </>
  );
};

export default Page;
