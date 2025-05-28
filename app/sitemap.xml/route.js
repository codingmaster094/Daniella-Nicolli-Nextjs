// app/sitemap.xml/route.js
import Menudatas from "../until/MenuData"; // Update path if needed

export async function GET() {
  let urls = [];

  try {
    const menuData = await Menudatas("/menus/menu-1");
    const items = menuData?.menu || [];

    const collectUrls = (menuItems) => {
      return menuItems.flatMap((item) => {
        const current = `
          <url>
            <loc>${item.url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
        `;

        const children = item.children?.length
          ? collectUrls(item.children)
          : [];

        return [current, ...children];
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
