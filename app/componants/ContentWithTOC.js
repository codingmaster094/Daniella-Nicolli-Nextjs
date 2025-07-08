"use client";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
const ContentWithTOC = ({ title  ,data }) => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Optional: expose Lenis globally if needed later
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    // Wait for DOM to update
    const timer = setTimeout(() => {
      const section = document.querySelector(".redirect");
      if (section) {
        const headerElements = Array.from(section.querySelectorAll("h2"));
        const headersData = headerElements.map((header) => {
          if (!header.id) {
            const text = header.textContent.trim();
            const id = text
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w\-]/g, "");
            header.id = id;
            return { id, text: header.textContent };
          } else {
            return { id: header.id, text: header.textContent };
          }
        });
        setHeaders(headersData);
      }
    }, 100); // small delay to ensure DOM update

    return () => clearTimeout(timer);
  }, [data]);

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest("a[href^='#']");
      if (!link || !window.lenis) return;

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        window.lenis.scrollTo(targetElement, {
          offset: -150, // adjust for fixed headers if needed
          duration: 0.5,
          easing: (t) => t * (2 - t), // easeOutQuad
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div>
      <section className="py-[30px] md:py-[50px] lg:py-[50px]">
        <h2
          className="mb-2 text-h4 sm:text-h3 md:text-h2"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>
        <ul className="menu flex flex-col gap-3 [&_li]:font-secondary-font [&_li]:text-a [&_li]:font-normal marker:text-teal-700">
          {headers.map((header) => (
            <li key={header.id}>
              <a href={`#${header.id}`} className="text-teal-700">
                {header.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {data && (
        <section className="redirect pb-10 md:pb-[70px] lg:pb-[100px]">
          <div
            className="blogtemplate"
            dangerouslySetInnerHTML={{ __html: data }}
          ></div>
        </section>
      )}
    </div>
  );
};

export default ContentWithTOC;
