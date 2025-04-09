export default async function getLandingData(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_POST_BASE_URL}${slug}`,
      { cache: "no-store" } 
    );

    if (!res.ok) {
      throw new Error("Failed to fetch landing data");
    }

    const data = await res.json();
    return data.acf || {};
  } catch (error) {
    console.error("Error fetching landing data:", error);
    return {};
  }
}
