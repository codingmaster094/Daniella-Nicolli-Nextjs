"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CanonicalTag() {
  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_DOMIN_URL}${pathname}`;

  useEffect(() => {
    const existingLink = document.querySelector("link[rel='canonical']");
    if (existingLink) {
      existingLink.setAttribute("href", canonicalUrl);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", canonicalUrl);
      document.head.appendChild(link);
    }
  }, [canonicalUrl]);

  return null;
}
