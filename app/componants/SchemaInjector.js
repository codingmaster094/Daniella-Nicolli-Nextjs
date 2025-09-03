"use client";
import Script from "next/script";

export default function SchemaInjector({ schemaJSON }) {
  if (!schemaJSON) return null;

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: schemaJSON }}
    />
  );
}
