import { NextResponse } from "next/server";
import axios from "axios";

// Handle GET request
export async function GET(req) {
  // Extract query params
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  try {
    const response = await axios.get(
      `https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/${slug}`
    );
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data", details: error.message },
      { status: 500 }
    );
  }
}
