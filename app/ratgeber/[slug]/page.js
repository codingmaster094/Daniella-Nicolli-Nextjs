import React from "react";
import dayjs from "dayjs";
import Categories from "../../componants/Categories";
import PostGet from "@/app/until/PostGet";
import Image from "next/image";
import ContentWithTOC from "@/app/componants/ContentWithTOC";
import SEODATA from "@/app/until/SEO_Data";
import generatePageMetadata from "@/app/until/generatePageMetadata";
import SEO_schema from "@/app/componants/SEO_schema";


const Page = async ({ params }) => {

  const { slug } = await params;
  let blogData;
  let schemaJSON;
  try {
    blogData = await PostGet(`/ratgeber?slug=${slug}`);
     const metadata = await SEODATA(`/${slug}`);
    schemaJSON = metadata.schema ? JSON.stringify(metadata.schema) : null;
  } catch (error) {
    return <div>Error loading data.</div>;
  }

  if (!blogData || !schemaJSON) {
    return <div>No data available.</div>;
  }


  return (
    <>
     <SEO_schema schemaJSON={schemaJSON} faqs={blogData?.acf?.all_faqs} />
    <div className="wp-blogpage">
      <section className="relative w-screen  lg:h-[75vh] h-full ">
        <div className="Banner relative w-full h-full bg-white">
          <div className="Banner-sliders relative overflow-hidden w-full h-full">
            <div className="item relative w-full h-full">
              <div className="bg-cover w-full relative flex flex-col-reverse lg:flex-row justify-center items-center h-full lg:gap-8 gap-0">
                <div className="blog-container">
                  <div className="banner-content w-full lg:w-[50%]">
                    <div className="flex flex-col bg-transparent lg:bg-Bgwhite mt-8 lg:mt-[15px] mb-[15px] gap-4 lg:gap-8 max-w-full lg:max-w-[750px]  relative z-10">
                      <h1
                        dangerouslySetInnerHTML={{
                          __html: blogData?.acf?.hero_slider_main_title,
                        }}
                      ></h1>
                      <div
                        className="[&_ul]:list-disc [&_ul]:pl-4 [&_ul>li]:!text-[16px]"
                        dangerouslySetInnerHTML={{
                          __html: blogData?.acf?.hero_slider_content,
                        }}
                      ></div>
                    </div>
                  </div>
                  <Image
                    src={blogData?.acf?.hero_slider_image}
                    alt="hero banner image"
                    role="img"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="right"
                    quality={75}
                    priority={true}
                    unoptimized
                    fetchPriority="high"
                    // loading="eager"
                    // className="!relative top-0 !right-0 lg:!w-[50%] !w-full h-full !left-auto"
                    className="!relative lg:!absolute right-0 top-0 lg:!w-[50%] !w-full h-full !left-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="blog-container">
        <section className="py-[30px] md:py-[50px] lg:py-[50px]">
          <div className=" mx-auto">
            <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
              <div className="flex justify-between gap-4 flex-wrap items-center">
                <p className="text-body">
                  <span>{dayjs(blogData?.date).format("DD.MM.YYYY")}</span> |
                  <span>
                    {" "}
                    ZULETZT AKTUALISIERT{" "}
                    <span>
                      {dayjs(blogData?.modified).format("DD.MM.YYYY")}
                    </span>
                  </span>
                </p>
                <div className="flex border border-Border w-auto lg:w-[35%] justify-between items-center p-1 bg-white shadow-md">
                  <input
                    type="search"
                    placeholder="Wonach suchen Sie?"
                    className="border-none outline-none p-2 w-full placeholder:text-black-900"
                  />
                  <button
                    className="flex self-start flex-shrink-0 text-center bg-Teal text-white hover:bg-teal-600 font-normal font-secondary-font px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                    aria-label="link-button"
                    role="button"
                  >
                    Jetzt suchen
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
                {blogData?.acf?.ratgeber_single_wichtigste_main_title && (
                  <h2
                    className="text-h4 sm:text-h3 md:text-h2"
                    dangerouslySetInnerHTML={{
                      __html:
                        blogData?.acf?.ratgeber_single_wichtigste_main_title,
                    }}
                  ></h2>
                )}
                <ul
                  dangerouslySetInnerHTML={{
                    __html:
                      blogData?.acf?.ratgeber_single_wichtigste_content?.replace(
                        /<\/?ul[^>]*>/g,
                        ""
                      ),
                  }}
                  className="menu flex flex-col gap-3 [&_li]:font-secondary-font [&_li]:text-a [&_li]:font-normal"
                ></ul>
              </div>
            </div>
          </div>
        </section>

        {blogData?.acf?.home_anfrage_main_title && (
          <Categories
            title={blogData?.acf?.home_anfrage_main_title}
            description={blogData?.acf?.home_anfrage_content}
            BTN={blogData?.acf?.home_anfrage_button}
            bg_img={blogData?.acf?.home_anfrage_image}
            container={true}
          />
        )}

        <ContentWithTOC
          title={blogData?.acf?.ratgeber_single_wichtigste_2_main_title}
          data={blogData?.content?.rendered}
          FAQ={blogData?.acf}
        />
      </div>
    </div>
    </>
  );
};

export default Page;



export async function generateMetadata({params}) {
     const { slug } = await params;
  return generatePageMetadata(`/${slug}`, {
    title: "home",
    description: "home",
  });
}

