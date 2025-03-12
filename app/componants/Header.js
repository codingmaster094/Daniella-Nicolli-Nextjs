"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";
import MobileToggle from "../../public/images/mobile-toggle.svg";
import CloseBtn from "../../public/images/close.svg";
import Lenis from "@studio-freight/lenis";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const dropdownRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const pathname = usePathname();
  const [HeaderData, setHeaderData] = useState(null);
  const [HeaderDatamenu, setHeaderDatamenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const scroller = new Lenis();
    let rafState;

    function raf(time) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    rafState = requestAnimationFrame(raf);
    lenisRef.current = scroller;

    return () => {
      cancelAnimationFrame(rafState);
    };
  }, []);

  const handleSubmenuClick = (e, targetId, slug, submenuId) => {
    e.preventDefault();
    setMenuOpen(false);

    // Toggle submenu active state
    setActiveSubmenu((prev) => (prev === submenuId ? null : submenuId));

    router.push(targetId !== "/" ? `/${slug}${targetId}` : "/");

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      lenisRef.current.scrollTo(targetElement, { duration: 1.5 });
    } else {
      console.warn(`Target section with id #${targetId} not found.`);
    }
  };

  // Main menu par click kariye to active submenu remove kari devu
  const handleMainMenuClick = () => {
    setActiveSubmenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchHeaderData = async () => {
      try {
        const response = await axios.get(
          "https://daniella.blog-s.de/wp-json/custom/v1/acf-options"
        );
        setHeaderData(response.data);
      } catch (error) {
        console.error("Error fetching header data", error);
      }
    };

    const getMenu = async () => {
      try {
        const response = await axios.get(
          "https://daniella.blog-s.de/wp-json/custom/v1/menus/menu-1"
        );
        setHeaderDatamenu(response.data);
      } catch (error) {
        console.error("Error fetching menu data", error);
      }
    };

    fetchHeaderData();
    getMenu();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSubmenuOpen(null);
      }
    };

    if (submenuOpen !== null) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [submenuOpen]);

  return (
    <header
      className={`  bg-white transition-all duration-300 ${
        scrolled ? "fixed top-0 w-full z-20 bg-white py-0" : "py-2"
      }  `}
    >
      <nav className="flex w-full px-[15px] 2xl:px-[calc(9rem-4px)] justify-between py-2 lg:py-0 items-center">
        <div className="logo flex items-center justify-center w-[150px] 2xl:w-[230px]">
          {HeaderDatamenu && (
            <Link href="/" aria-label="Home">
              <Image
                src={HeaderDatamenu?.site_logo}
                width={249}
                height={82}
                alt="Logo"
              />
            </Link>
          )}
        </div>
        <div
          className={`side-menu fixed py-6 opacity-0 z-20 px-5 lg:px-0 w-72 -left-full top-0 bg-Teal h-full pt-7 pb-7 border-r-4 border-gray-light gap-4 xl:gap-8 lg:flex-1 lg:border-none lg:bg-transparent lg:opacity-100 lg:w-auto lg:static lg:flex lg:items-center transition-all duration-700 ease-in lg:transition-none lg:py-8 lg:justify-end lg:overflow-y-visible overflow-y-auto max-h-full ${
            menuOpen ? "left-0 opacity-100" : ""
          }`}
        >
          <span
            className="close block absolute top-4 right-4 w-8 hF-8 lg:hidden cursor-pointer"
            aria-label="close menu"
            onClick={() => setMenuOpen(false)}
          >
            <Image src={CloseBtn} alt="Close menu button" />
          </span>
          <ul className="flex gap-4 text-a 2xl:gap-6 pt-10 lg:pt-0 [&_li>a]:px-2 2xl:[&_li>a]:px-6 lg:[&_li>a]:py-3 text-white lg:text-black-900 [&_li>a]:inline-block font-medium transition-colors duration-700 ease-in-out flex-col lg:flex-row w-full lg:w-auto">
            {HeaderDatamenu?.menu?.map((item, index) => {
              item.slug = item.slug === "home" ? "/" : item.slug;
              const isActive =
                pathname === (item.slug === "/" ? "/" : `/${item.slug}`);

              console.log("isActive", isActive);
              return (
                <li
                  key={item.id}
                  className="relative group w-full lg:w-auto"
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024 && item.children.length > 0) {
                      setSubmenuOpen(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 1024) {
                      setSubmenuOpen(null);
                    }
                  }}
                >
                  <div
                    className="w-full lg:w-auto flex items-center justify-between cursor-pointer"
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        if (item.children.length > 0) {
                          setSubmenuOpen(submenuOpen === index ? null : index);
                          setMenuOpen(true); // Open menu when submenu exists
                        } else {
                          setSubmenuOpen(null);
                          setMenuOpen(false); // Close menu when no submenu
                        }
                      }
                    }}
                  >
                    <Link
                      href={`/${item.slug}`}
                      onClick={handleMainMenuClick}
                      className="flex items-center w-full lg:w-auto justify-between lg:justify-start gap-2"
                    >
                      <span
                        className={`${
                          isActive
                            ? "text-black-900 lg:text-Teal font-bold"
                            : ""
                        }`}
                      >
                        {item.title}
                      </span>
                      {/* Arrow Toggle for Mobile */}
                      {item.children.length > 0 && (
                        <span
                          className={`text-sm lg:hidden transition-transform duration-300 ${
                            submenuOpen === index ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          ▼
                        </span>
                      )}
                    </Link>
                  </div>

                  {item.children.length > 0 && (
                    <div className={`lg:absolute transition-all duration-1000 ${submenuOpen === index ? 'pt-0 lg:pt-[50px] bg-white':"pt-0 bg-white"}`}>
                    <ul
                      className={` left-0 bg-white z-10 shadow-md top-full transition-all duration-300 ease-in-out w-full lg:w-[250px]`}
                      style={{
                        maxHeight: submenuOpen === index ? "500px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 0.4s ease-in-out",
                        minHeight: submenuOpen === index ? "50px" : "0px",
                      }}
                    >
                      {item.children.map((child) => {
                        const isSubmenuActive = activeSubmenu === child.id;

                        return (
                          <li
                            key={child.id}
                            onClick={(e) =>
                              handleSubmenuClick(
                                e,
                                child.url,
                                item.slug,
                                child.id
                              )
                            }
                            className={`cursor-pointer block w-full px-4 py-2  hover:bg-gray-100
                              
                        
                            `}
                          >
                            {child.title}
                          </li>
                        );
                      })}
                    </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {HeaderData && (
            <Link
              href={HeaderData.header_button.url}
              target={HeaderData.header_button.target}
              className="flex items-center justify-center text-center mt-5 lg:mt-0 bg-white text-Teal hover:bg-transparent border hover:border-white hover:text-white lg:bg-Teal lg:text-white lg:hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in cursor-pointer"
            >
              TERMIN BUCHEN
            </Link>
          )}
        </div>
        <span
          className="mobile-toggle w-8 flex lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <Image src={MobileToggle} alt="Mobile menu button" />
        </span>
      </nav>
    </header>
  );
};

export default Header;
