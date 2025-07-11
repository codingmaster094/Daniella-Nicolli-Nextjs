"use client";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Accordian from "./Accordian";

const ContentWithTOC = ({ title, data, FAQ }) => {
  const [headers, setHeaders] = useState([]);
  const [updatedHTML, setUpdatedHTML] = useState("");

  // Initialize Lenis scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);
  
  
  
  // Process content and assign IDs
  useEffect(() => {
    if (!data) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const headingElements = Array.from(doc.querySelectorAll("h2"));

    const headerList = headingElements.map((heading) => {
      const text = heading.textContent.trim();
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]/g, "");
      heading.setAttribute("id", id);
      return { id, text };
    });

    setHeaders(headerList);
    setUpdatedHTML(doc.body.innerHTML); // updated HTML string with IDs
  }, [data]);

  // Smooth scroll using Lenis
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a[href^='#']");
      if (!link || !window.lenis) return;

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        window.lenis.scrollTo(targetElement, {
          offset: -150,
          duration: 0.5,
          easing: (t) => t * (2 - t),
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div>
      <section className="py-[30px] md:py-[50px] lg:py-[50px]">
        {title && (
          <h2
            className="mb-2 text-h4 sm:text-h3 md:text-h2"
            dangerouslySetInnerHTML={{ __html: title }}
          ></h2>
        )}

        <ul className="menu flex flex-col gap-3 [&_li]:font-secondary-font [&_li]:text-a [&_li]:font-normal ">
          {headers.map(
            (header) =>
              header.id && (
                <li key={header.id}>
                  <a href={`#${header.id}`} className="text-teal-700">
                    {header.text}
                  </a>
                </li>
              )
          )}
          {FAQ.faq_main_faq_show && (
            <li>
              <a href={`#faq`} className="text-teal-700">
                {FAQ?.faq_main_title}
              </a>
            </li>
          )}
        </ul>
      </section>

      {updatedHTML && (
        <section className="redirect pb-10 md:pb-[70px] lg:pb-[100px]">
          <div
            className="blogtemplate"
            dangerouslySetInnerHTML={{ __html: updatedHTML }}
          ></div>
          <Accordian
            container={true}
            main_title={FAQ?.faq_main_title}
            all_faqs={FAQ?.all_faqs}
            show_section={FAQ?.faq_main_faq_show}
          />
        </section>
      )}
    </div>
  );
};

export default ContentWithTOC;
