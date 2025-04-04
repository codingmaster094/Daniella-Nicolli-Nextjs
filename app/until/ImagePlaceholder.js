// untile/ImagePlaceholder.js 
import { getPlaiceholder } from "plaiceholder";
import defaultImage from "../../public/images/Aboutimage5.png";
export async function getServerSideProps() {
  let base64Image = "";
  console.log("base64", "base64");

  try {
    const { base64 } = await getPlaiceholder(defaultImage);
    base64Image = base64;
  } catch (error) {
    console.error("Error fetching image placeholder:", error);
  }

  return {
    props: {
      base64Image,
    },
  };
}
