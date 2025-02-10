// Image and video both
import { NextResponse } from "next/server";
import axios from "axios";

const INSTAGRAM_USER_ID = "8840100259422388"; // Your Instagram App-Scoped User ID
const INSTAGRAM_ACCESS_TOKEN = "IGAAYIKmxsQN5BZAE9ldHRKTHFadWlpMlBkaXQ1MW1ZATnhoNnY2VjhFVExEemt4Um9iZAndLWnliSVVIUUc1RnJ2RE5rdXVfVUZABZAllaX0FRVTY0YVFmSjlvZAGxaTkpXMUFYMzFzb21FbmxWZAV9WSkpwdDR3M2dDckpIcng2LXBOYwZDZD"; // Your access token

export async function GET(request) {
  try {
    // Step 1: Fetch media IDs
    const mediaUrl = `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?access_token=${INSTAGRAM_ACCESS_TOKEN}`;
    const mediaResponse = await axios.get(mediaUrl);

    // Step 2: Fetch media details for each media ID
    const mediaDetailsPromises = mediaResponse.data.data.map(async (media) => {
      const mediaId = media.id;
      const mediaDetailUrl = `https://graph.instagram.com/${mediaId}?fields=id,media_type,media_url,thumbnail_url,caption,permalink&access_token=${INSTAGRAM_ACCESS_TOKEN}`;
      const mediaDetailResponse = await axios.get(mediaDetailUrl);
      return mediaDetailResponse.data;
    });

    // Wait for all media details to be fetched
    const mediaDetails = await Promise.all(mediaDetailsPromises);

    // Step 3: Filter for images and videos
    const mediaList = mediaDetails.filter(
      (media) => media.media_type === "IMAGE" || media.media_type === "VIDEO"
    );

    return NextResponse.json(mediaList, { status: 200 });
  } catch (error) {
    console.error(
      "Error fetching media from Instagram API:",
      error.response ? error.response.data : error.message
    );
    return NextResponse.json(
      { error: "Failed to fetch media from Instagram API" },
      { status: 500 }
    );
  }
}
