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

  // Get current date in ISO 8601 format
  const lastModDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${uniquePaths
    .map(
      (slug) => `
  <url>
    <loc>${siteUrl}/${slug}</loc>
    <lastmod>${lastModDate}</lastmod>
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
