// app/sitemap.xml/route.js
import FetchAllslug from "../until/FetchAllslug"

export async function GET() {
  const siteUrl = process.env.NEXT_DOMIN_URL || "https://daniella-nicolli-nextjs.vercel.app"; 
  let SiteMapData;
  try {
     SiteMapData = await FetchAllslug("/custom-sitemap/v1/slugs");
    console.log('SiteMapData', SiteMapData)
  } catch (error) {
    console.log('error', error)
  }
  const uniquePaths = [...new Set(SiteMapData)];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${uniquePaths
      .map(
        (slug) => `
    <url>
      <loc>${siteUrl}/${slug}</loc>
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
