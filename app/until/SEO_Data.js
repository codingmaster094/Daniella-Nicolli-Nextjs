export default async function SEODATA(params) {
  try {
    const response = await fetch(
      `${process.env.NEXT_BASE_URL_SEO}/custom-seo/v1/rank-math?slug=${params}`,
      {
        next: { revalidate: 60 }
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json(); 
    return data ;
  } catch (error) {
    console.error("Error in Alldata:", error);
    throw error; // Rethrow the error to be caught in the calling component
  }
}
