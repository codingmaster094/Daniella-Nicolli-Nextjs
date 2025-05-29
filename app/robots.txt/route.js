// app/robots.txt/route.js

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HEADER_BASE_URL}/robots`
    );
    const text = await res.text();

    // Convert escaped \n to real newlines
    const cleanText = text.replace(/\\n/g, "\n").replace(/\\\//g, "/");

    return new Response(cleanText, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("Failed to fetch robots.txt:", error);

    // Fallback content
    const fallback = `User-agent: *
                      Disallow: /
                      Allow: /
                      Sitemap:/`;

    return new Response(fallback, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
