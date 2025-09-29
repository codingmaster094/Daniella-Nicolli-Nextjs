"use client";
import { useEffect } from "react";

export default function SchemaInjector({ schemaJSON, faqSchema }) {
  useEffect(() => {
    if (!schemaJSON && !faqSchema) return;

    const graphItems = [];

    // Parse if string, else push directly
    if (schemaJSON) {
      graphItems.push(
        typeof schemaJSON === "string" ? JSON.parse(schemaJSON) : schemaJSON
      );
    }

    if (faqSchema) {
      graphItems.push(
        typeof faqSchema === "string" ? JSON.parse(faqSchema) : faqSchema
      );
    }

    const schemaData =
      graphItems.length === 1
        ? graphItems[0] // only one schema → don't wrap with @graph
        : {
            "@context": "https://schema.org",
            "@graph": graphItems,
          };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "rank-math-schema";
    script.text = JSON.stringify(schemaData);

    // Remove old one if exists
    const oldScript = document.getElementById("rank-math-schema");
    if (oldScript) oldScript.remove();

    document.head.appendChild(script);
  }, [schemaJSON, faqSchema]);

  return null;
}
