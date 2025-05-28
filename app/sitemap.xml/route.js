// app/sitemap.xml/route.js
import FetchAllslug from "../until/FetchAllslug";

export async function GET() {
  const siteUrl =
    process.env.NEXT_DOMIN_URL || "https://daniella-nicolli-nextjs.vercel.app";

  try {
    const Data = await FetchAllslug("/custom-sitemap/v1/slugs");

    if (!Array.isArray(Data)) {
      throw new Error("Invalid response format");
    }

    const uniquePaths = [...new Set(Data)];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${uniquePaths
    .map(
      (slug) => `
  <url>
    <loc>${siteUrl}/${slug.replace(/^\/+/, "")}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("")}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
