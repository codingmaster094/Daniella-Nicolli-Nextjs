// app/sitemap.xml/route.js

export async function GET() {
  const siteUrl = "https://daniella-nicolli-nextjs.vercel.app"; // Replace with your actual domain

  const SiteMapData = [
    "fett-weg-spritze-mannheim",
    "fett-weg-spritze-ludwigshafen",
    "fett-weg-spritze-heidelberg",
    "fett-weg-spritze-frankenthal",
    "microneedling-mannheim",
    "microneedling-ludwigshafen",
    "microneedling-gruenstadt",
    "microneedling-frankenthal",
    "heilpraktikerin-worms",
    "heilpraktikerin-ludwigshafen",
    "heilpraktikerin-freinsheim",
    "heilpraktikerin-bad-duerkheim",
    "heilpraktiker-maxdorf",
    "heilpraktiker-mannheim",
    "heilpraktiker-gruenstadt",
    "heilpraktiker-frankenthal",
    "faltenunterspritzung-hyaluronsaeure",
    "faltenunterspritzung-mannheim",
    "faltenunterspritzung-ludwigshafen",
    "faltenunterspritzung-lambsheim",
    "faltenunterspritzung-gruenstadt",
    "faltenbehandlung-mannheim",
    "faltenbehandlung-heidelberg",
    "fadenlifting-mannheim",
    "faltenbehandlung-frankenthal",
    "fadenlifting-ludwigshafen",
    "landing-page",
    "datenschutzerklarung",
    "impressum",
    "blog",
    "ratgerber",
    "ueber-mich",
    "naturheilmedizin",
    "kontakt",
    "aesthetik",
    "home",
  ];

  // Remove duplicates
  const uniquePaths = [...new Set(SiteMapData)];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${uniquePaths
      .map(
        (slug) => `
    <url>
      <loc>${siteUrl}/${slug}</loc>
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
}
