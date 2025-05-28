// app/sitemap.xml/route.js
import FetchAllslug from "../until/FetchAllslug"; // Update path if needed

export async function GET() {
  let urls = [];

  try {
    const SiteMapData = await FetchAllslug("/custom-sitemap/v1/slugs");
    console.log('SiteMapData', SiteMapData)
    const items = SiteMapData || [];

    const collectUrls = (menuItems) => {
      return menuItems.flatMap((item) => {
        const current = `
          <url>
            <loc>${item}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
        `;

        return [current];
      });
    };

    urls = collectUrls(items);
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
