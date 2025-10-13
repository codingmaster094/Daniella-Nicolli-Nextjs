import SEODATA from "./SEO_Data";

export default async function generatePageMetadata(slug, fallback = {}) {
  try {
    const metadata = await SEODATA(slug);
    const seo = metadata?.seo?.computed || {};
    const post = metadata?.post;

    const title = seo.title || fallback.title || "Default Title";
    const description = seo.description || fallback.description || "Default Description";

    const canonical =
      seo.canonical && seo.canonical !== ""
        ? seo.canonical
        : `https://dr-marhenke-kollegen.vercel.app${slug}`;

    const robots =
      seo.robots && (seo.robots.index || seo.robots.follow)
        ? `${seo.robots.index ? "index" : "noindex"},${seo.robots.follow ? "follow" : "nofollow"}`
        : "noindex,nofollow";

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      robots, 
      openGraph: {
        type: "article",
        title:  title,
        description: description,
        url: canonical,
        publishedTime: post?.date,
        modifiedTime: post?.modified,
      },
      twitter: {
        card: "summary_large_image",
        title:title,
        description:description,
      },
    };
  } catch (err) {
    console.error("Metadata fetch failed:", err);
    return {
      title: fallback.title || "Default Title",
      description: fallback.description || "Default Description",
    };
  }
}
