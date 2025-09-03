// app/robots.txt/route.js
export async function GET() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HEADER_BASE_URL}/robots`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch robots.txt");
    }

    let raw = await res.text();

    // if wrapped in quotes, strip them
    if (raw.startsWith('"') && raw.endsWith('"')) {
      raw = raw.slice(1, -1);
    }

    // unescape \n and \/
    raw = raw.replace(/\\n/g, "\n").replace(/\\\//g, "/");

    return new Response(raw, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("robots.txt fetch error:", error);

    const fallback = `User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php

Sitemap: https://www.heilpraktikerin-nicolli.de/sitemap.xml`;

    return new Response(fallback, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
