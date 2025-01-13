"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import Logo from "../../public/images/logo.png";
import MobileToggle from "../../public/images/mobile-toggle.svg";
import CloseBtn from "../../public/images/close.svg";
import { useParams } from "next/navigation";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); 
  const router = useParams(); 
  const { slug } = router;

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    if (menuOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 w-full z-20 bg-white">
      <nav className="flex w-full px-[15px] 2xl:px-[calc(9rem-4px)] py-4 justify-between">
        <div className="logo flex items-center justify-center w-[150px] 2xl:w-[250px]">
          {Logo && (
            <Link href="/" aria-label="Home">
              <Image src={Logo} alt="Logo" />
            </Link>
          )}
        </div>
        <div
          className={`side-menu fixed opacity-0 z-20 px-5 lg:px-0 w-72 -left-full top-0 bg-Teal h-full pt-7 border-r-4 border-gray-light gap-4 xl:gap-8 lg:flex-1 lg:border-none lg:bg-transparent lg:opacity-100 lg:w-auto lg:static lg:flex lg:items-center transition-all duration-700 ease-in lg:transition-none lg:py-6 lg:justify-end ${
            menuOpen ? "left-0 opacity-100" : ""
          }`}
        >
          <span
            className="close block absolute top-4 right-4 w-8 h-8 lg:hidden cursor-pointer"
            aria-label="Close menu"
          >
            <Image src={CloseBtn} alt="Close menu button" onClick={handleMenuToggle} />
          </span>
          <ul className="flex gap-4 lg:gap-0 pt-10 lg:pt-0 [&_li>a]:px-2 2xl:[&_li>a]:px-6 lg:[&_li>a]:py-3 text-white lg:text-black-900 [&_li>a]:inline-block lg:hover:[&_li>a]:text-teal-500 font-medium transition-colors duration-700 ease-in-out flex-col lg:flex-row">
            <li>
              {pathname && (
                <Link
                  href="/"
                  aria-current={pathname === "/" ? "page" : undefined}
                  className={pathname === "/" ? "text-black-900 lg:text-Teal font-bold" : ""}
                >
                  Home
                </Link>
              )}
            </li>
            <li>
              {pathname && (
                <Link
                  href="/Aesthetics"
                  aria-current={pathname === "/Aesthetics" ? "page" : undefined}
                  className={pathname === "/Aesthetics" ? "text-black-900 lg:text-Teal font-bold" : ""}
                >
                  Ästhetik
                </Link>
              )}
            </li>
            <li>
              {pathname && (
                <Link
                  href="/Naturheilmedizin"
                  aria-current={pathname === "/Naturheilmedizin" ? "page" : undefined}
                  className={pathname === "/Naturheilmedizin" ? "text-black-900 lg:text-Teal font-bold" : ""}
                >
                  Naturheilmedizin
                </Link>
              )}
            </li>
            <li>
              {pathname && (
                <Link
                  href="/Blog"
                  aria-current={pathname === "/Blog" || pathname === `/Blog/${slug}` ? "page" : undefined}
                  className={pathname === "/Blog" || pathname === `/Blog/${slug}` ? "text-black-900 lg:text-Teal font-bold" : ""}
                >
                  Rategber
                </Link>
              )}
            </li>
            <li>
              {pathname && (
                <Link
                  href="/Ubermich"
                  aria-current={pathname === "/Ubermich" ? "page" : undefined}
                  className={pathname === "/Ubermich" ? "text-black-900 lg:text-Teal font-bold" : ""}
                >
                  Über mich
                </Link>
              )}
            </li>
            <li>
              {pathname && (
                <Link
                  href="/Contact"
                  aria-current={pathname === "/Contact" ? "page" : undefined}
                  className={pathname === "/Contact" ? "text-black-900 lg:text-Teal font-bold" : ""}
                >
                  Kontakt
                </Link>
              )}
            </li>
          </ul>
          <a
            className="flex self-start items-center justify-center text-center mt-5 lg:mt-0 bg-white text-Teal hover:bg-transparent border hover:border-white hover:text-white lg:bg-Teal lg:text-white lg:hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in cursor-pointer"
            aria-label="Schedule an appointment"
            role="link"
          >
            TERMIN BUCHEN
          </a>
        </div>
        <span
          className="mobile-toggle w-8 flex lg:hidden cursor-pointer"
          aria-label="Open mobile menu"
        >
          <Image src={MobileToggle} alt="Mobile menu button" onClick={handleMenuToggle} />
        </span>
      </nav>
    </header>
  );
};

export default Header;
