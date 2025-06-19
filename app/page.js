import dynamic from "next/dynamic";
import HomePage from "./Home/page";
import MetaDataAPIS from "./until/metadataAPI";
const SchemaInjector = dynamic(() => import("./componants/SchemaInjector"));

export default async function Home() {

  const metadata = await MetaDataAPIS("/home");

  const schemaMatch = metadata.head.match(
    /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
  );
  const schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <HomePage />
    </>
  );
}

export async function generateMetadata() {
  try {
    const metadata = await MetaDataAPIS("/home");
    const head = metadata?.head || "";

    const title = head.match(/<title>(.*?)<\/title>/)?.[1] || "Default Title";
    const description =
      head.match(/<meta name="description" content="(.*?)"/)?.[1] ||
      "Default Description";
    const canonical =
      head.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ||
      process.env.NEXT_DOMAIN_URL ||
      "https://daniella-nicolli-nextjs.vercel.app";

    return {
      title,
      description,
      alternates: {
        canonical,
      },
    };
  } catch (error) {
    console.error("Metadata generation failed:", error);
    return {
      title: "Default Title",
      description: "Default Description",
      alternates: {
        canonical: "https://daniella-nicolli-nextjs.vercel.app",
      },
    };
  }
}
