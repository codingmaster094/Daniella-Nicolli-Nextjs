import React from "react";
import { dangerouslyFetchPlaceReviews, ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const page = async() => {
    const placeId = "ChIJIez8ctEzlkcRZHH6rjmHReU"; 
  const apiKey = process.env.NEXT_GOOGLE_API_KEY;
  const reviews = await dangerouslyFetchPlaceReviews(placeId, apiKey);
  return (
    <section className="py-10 md:py-[70px] lg:py-[100px] bg-Bgslate">
      <div className="container mx-auto px-[15px]">
        <div className="flex w-full max-w-[1440px] flex-col gap-6 md:gap-8 lg:gap-12 mx-auto text-center ">
          <div className="flex w-full shadow-shadow">
            <div>
              <h2>Google Reviews</h2>
              <ReactGoogleReviews reviews={reviews} layout="carousel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page


