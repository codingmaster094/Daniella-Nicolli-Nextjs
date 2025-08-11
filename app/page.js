import HomePage from "./Home/page";
import MetaDataAPIS from "./until/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("./componants/SchemaInjector"));
export default async function Home() {
  let schemaJSON;
  try {
    const metadata = await MetaDataAPIS("/home");
    const schemaMatch = metadata.head.match(
      /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
    );
    schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }
  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <HomePage />
    </>
  );
}
export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/home");

  // Extract metadata from the head string
  const titleMatch = metadata.head.match(/<title>(.*?)<\/title>/);
  const descriptionMatch = metadata.head.match(
    /<meta name="description" content="(.*?)"/
  );
  const title = titleMatch ? titleMatch[1] : "Default Title";
  const description = descriptionMatch
    ? descriptionMatch[1]
    : "Default Description";
    const canonical = "https://www.heilpraktikerin-nicolli.de";
  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}
