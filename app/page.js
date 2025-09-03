import HomePage from "./Home/page";
import SEODATA from "./until/SEO_Data";
import SchemaInjector from "@/app/componants/SchemaInjector";


export default async function Home() {
  let schemaJSON;
  try {
    const metadata = await SEODATA("/home");

    // ✅ Only stringify if metadata.schema is an object
    if (metadata.schema && typeof metadata.schema === "object") {
      schemaJSON = JSON.stringify(metadata.schema);
    } else if (typeof metadata.schema === "string") {
      schemaJSON = metadata.schema;
    } else {
      schemaJSON = null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  return (
    <>
      {schemaJSON && <SchemaInjector schemaJSON={schemaJSON} />}
      <HomePage />
    </>
  );
}

export async function generateMetadata() {
  const metadata = await SEODATA("/home");

  return {
    title: metadata.title || "Default Title",
    description: metadata.description || "Default Description",
    alternates: {
      canonical:
        metadata.canonical && metadata.canonical !== ""
          ? metadata.canonical
          : "https://www.heilpraktikerin-nicolli.de",
    },
    robots: metadata.robots ? metadata.robots : "noindex,nofollow",
  };
}
