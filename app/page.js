import HomePage from "./Home/page";
import dynamic from "next/dynamic";
import SEODATA from "./until/SEO_Data";

const SchemaInjector = dynamic(() => import("./componants/SchemaInjector"));

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
  const metadata = await SEODATA("/home");

  // Fallback values if some field is missing
  const title = metadata.title || "Praxis für Ästhetik und Naturheilmedizin: Daniella Nicolli";
  const description = metadata.description || "Praxis für Ästhetik und Naturheilmedizin: Fadenlifting, Faltenunterspritzung und Lippenkorrektur | Individuelle Beratung | maßgeschneiderte Therapien ";
  const canonical =
    metadata.canonical && metadata.canonical !== ""
      ? metadata.canonical
      : "https://www.heilpraktikerin-nicolli.de";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: metadata.robots ? metadata.robots : "noindex,nofollow",
  };
}
