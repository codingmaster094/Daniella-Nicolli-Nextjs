// components/SEO_schema.jsx
import React from "react";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"), {
  ssr: true,
});

const SEO_schema = async ({ schemaJSON, faqs }) => {
  try {
    if (!schemaJSON && (!faqs || faqs.length === 0)) return null;

    // The base URL for the page, which is currently used in mainEntityOfPage
    const pageUrl = "https://daniella-nicolli-nextjs.vercel.app/"; // Define once

    // Build FAQ Schema
    const faqSchema =
      faqs && faqs.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            url: pageUrl,
            mainEntityOfPage: {
              "@id": pageUrl,
            },
            name: "FAQ Page",
            headline: "Häufig gestellte Fragen zur Psychotherapie",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              // ... (rest of the Question properties remain the same)
              name: faq.all_faqs_question,
              acceptedAnswer: {
                "@type": "Answer",
                // FIX: Use a more general regex to remove all HTML tags,
                // including those with attributes (like your <span style="...">)
                text: faq.all_faqs_answers.replace(/<[^>]*>/g, "") 
              },
            })),
          }
        : null;
    return <SchemaInjector schemaJSON={schemaJSON} faqSchema={faqSchema} />;
  } catch (error) {
    console.error("Error fetching SEO schema:", error);
    return null;
  }
};

export default SEO_schema;
