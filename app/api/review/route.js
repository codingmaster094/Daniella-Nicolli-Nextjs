// app/api/review/route.js

export async function GET(req) {
  const placeId = "ChIJIez8ctEzlkcRZHH6rjmHReU";
  const apiKey = "AIzaSyA-PVAxCyOjDGubsv-V74rfW5QNl5RFt9o";

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}