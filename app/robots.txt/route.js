// app/robots.txt/route.js

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HEADER_BASE_URL}/robots`);
    console.log('res', res)
    const raw = await res.text();

    const clean = JSON.parse(raw); 

    return new Response(clean, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("robots.txt fetch error:", error);

    const fallback = `User-agent: *
  Disallow: /wp-admin/
  Allow: /wp-admin/admin-ajax.php
  Sitemap: https://daniella-nicolli-nextjs.vercel.app/sitemap.xml`;

    return new Response(fallback, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
