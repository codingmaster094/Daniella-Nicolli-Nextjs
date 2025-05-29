// app/sitemap.xml/route.js
import FetchAllslug from "../until/FetchAllslug";

export async function GET() {
  const siteUrl =
    process.env.NEXT_DOMAIN_URL || "https://daniella-nicolli-nextjs.vercel.app";

  let SiteMapData;
  try {
    SiteMapData = await FetchAllslug("/custom-sitemap/v1/slugs");
    console.log("SiteMapData", SiteMapData);
  } catch (error) {
    console.log("error", error);
    SiteMapData = []; // fallback to empty array if fetch fails
  }
  const uniquePaths = [...new Set(SiteMapData)];
  const totalUrls = uniquePaths.length;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- This XML Sitemap contains ${totalUrls} URLs -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${uniquePaths
    .map(
      (slug) => `
  <url>
    <loc>${siteUrl}/${slug.slug}</loc>
    <lastmod>${slug.lastmod}</lastmod>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
