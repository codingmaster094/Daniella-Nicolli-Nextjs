import HomePage from "./Home/page";
import dynamic from "next/dynamic";
import SEODATA from "./until/SEO_Data";
import generatePageMetadata from "./until/generatePageMetadata";
import SEO_schema from "./componants/SEO_schema";

export default async function Home() {
  let schemaJSON;
  try {
    const metadata = await SEODATA("/home");
    schemaJSON = metadata.schema ? JSON.stringify(metadata.schema) : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }
if(!schemaJSON){
  return <div>No data available.</div>;
}
  return (
    <>
     <SEO_schema
        schemaJSON={schemaJSON}
      />
      <HomePage />
    </>
  );
}

export async function generateMetadata() {
  return generatePageMetadata("/home", {
    title: "home",
    description: "home",
  });
}
