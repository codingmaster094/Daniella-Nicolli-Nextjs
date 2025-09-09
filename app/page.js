import HomePage from "./Home/page";
import dynamic from "next/dynamic";
import SEODATA from "./until/SEO_Data";
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
  const metadata = await SEODATA("/home");
  const seo = metadata?.seo?.computed || {};

  const title =
    seo.title ||
    "Praxis für Ästhetik und Naturheilmedizin: Daniella Nicolli";

  const description =
    seo.description ||
    "Praxis für Ästhetik und Naturheilmedizin: Fadenlifting, Faltenunterspritzung und Lippenkorrektur | Individuelle Beratung | maßgeschneiderte Therapien";

  const canonical =
    seo.canonical && seo.canonical !== ""
      ? seo.canonical
      : "https://www.heilpraktikerin-nicolli.de";

  const robots =
    seo.robots && (seo.robots.index || seo.robots.follow)
      ? `${seo.robots.index ? "index" : "noindex"},${
          seo.robots.follow ? "follow" : "nofollow"
        }`
      : "noindex,nofollow";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      title: seo.social?.facebook?.title || title,
      description: seo.social?.facebook?.description || description,
      url: canonical,
      images: seo.social?.facebook?.image
        ? [seo.social.facebook.image]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.social?.twitter?.title || title,
      description: seo.social?.twitter?.description || description,
      images: seo.social?.twitter?.image
        ? [seo.social.twitter.image]
        : undefined,
    },
  };
}
