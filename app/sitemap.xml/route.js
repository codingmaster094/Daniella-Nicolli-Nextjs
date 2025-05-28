// app/sitemap.xml/route.js
import Menudatas from "../until/MenuData"; // Adjust path if needed

export async function GET() {
  let urls = [];

  try {
    const menuData = await Menudatas("/menus/menu-1");
    const items = menuData?.menu || [];

    const collectUrls = (menuItems) => {
      return menuItems.flatMap((item) => {
        const current = item.url;
        const children = item.children?.length
          ? collectUrls(item.children)
          : [];
        return [current, ...children];
      });
    };

    urls = collectUrls(items);
  } catch (error) {
    console.error("Error generating URL list:", error);
  }

  const plainText = urls.join("\n");

  return new Response(plainText, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
