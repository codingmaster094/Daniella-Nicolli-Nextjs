// pages/api/place.js

export async function GET(req) {
  
  const placeId = "ChIJIez8ctEzlkcRZHH6rjmHReU"; // Change this based on your actual use case
  const apiKey = process.env.GOOGLE_MAPS_API_KEY; // Store your API key in an environment variable

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
    );

    const data = await response.json();
    return new Response(data);
    if (!response.ok) {
      console.error("Response error:", response.status, response.statusText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log('data', data)
    // Check if results are found in data
    if (!data.result) {
      console.warn("No data found for the provided placeId:", placeId);
      return new Response(JSON.stringify({ error: "No data found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Fetch error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
