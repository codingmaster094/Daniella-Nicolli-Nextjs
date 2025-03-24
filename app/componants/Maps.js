import React from "react";
import Image from "next/image";
import Link from "next/link";
const Maps = ({ main_title, map_url, map_image }) => {
  return (
    <section className="py-[30px] md:py-[40px] lg:py-[50px]">
      <div className="flex  flex-col gap-6 md:gap-8  lg:gap-12  text-center ">
        <div className="flex flex-col gap-6">
          <h2
            dangerouslySetInnerHTML={{
              __html: main_title,
            }}
          ></h2>
        </div>
        <div className="flex w-full">
          {map_url ? (
            <Link
              href={map_url}
              target="blank"
              className="map-block block w-full"
              aria-label="map-image"
              role="link"
            >
              <Image
                src={map_image?.url}
                alt="map_image"
                width={map_image?.width}
                height={map_image?.height}
                className="h-full w-full object-cover"
              />
            </Link>
          ) : (
            <Image
              src={map_image?.url}
              alt="map_image"
              width={map_image?.width}
              height={map_image?.height}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Maps;
