import HomePage from "./Home/page";
import MetaDataAPIS from "./until/metadataAPI";

export default async function Home() {
  return <HomePage />;
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

  return {
    title,
    description,
  };
}
