import HomePage from "./Home/page";
import dynamic from "next/dynamic";
import SEODATA from "./until/SEO_Data";
import generatePageMetadata from "./until/generatePageMetadata";
const SchemaInjector = dynamic(() => import("./componants/SchemaInjector"), {
  ssr: true,
});

export default async function Home() {
  let schemaJSON;
  try {
    const metadata = await SEODATA("/home");
    schemaJSON = metadata.schema ? JSON.stringify(metadata.schema) : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  return (
    <>
     {
      schemaJSON && schemaJSON !== "[]" && (
        <SchemaInjector schemaJSON={schemaJSON} />
      )
    }
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
