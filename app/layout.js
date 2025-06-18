import "../public/css/globals.css";
import "../public/css/stylesheet.css";
import Footer from "./Footer/page";
import TopButton from "../app/componants/Top-Button";
import Header from "./Header/page";
import CanonicalTag from "./componants/CanonicalTag";

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Praxis für Naturheilmedizin & Ästhetik – Daniella Nicolli – Heilpraktikerin",
    image: "/images/denilieaLogo.svg",
    telephone: "+49 6233 8693200",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mühltorstraße 33",
      addressLocality: "Lambsheim",
      postalCode: "67245",
      addressCountry: "DE",
    },
    url: "https://www.heilpraktikerin-nicolli.de/",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <CanonicalTag />
        <Header />
        <main>{children}</main>
        <TopButton />
        <Footer />
      </body>
    </html>
  );
}

