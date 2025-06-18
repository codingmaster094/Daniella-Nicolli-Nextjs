import "../public/css/globals.css";
import "../public/css/stylesheet.css";
import Footer from "./Footer/page";
import TopButton from "../app/componants/Top-Button";
import Header from "./Header/page";
import CanonicalTag from "./componants/CanonicalTag";
import HeaderDatas from "./until/HeaderData";

export default async function RootLayout({ children }) {
  let Schema_markup = null;
  try {
    Schema_markup = await HeaderDatas("/acf-options");
  } catch (error) {
    console.error("Error fetching header data:", error);
  }

  // Fallback or safe handling if Schema_markup is null
  const schemaData = Schema_markup
    ? {
        "@context": Schema_markup.context,
        "@type": Schema_markup.context_type,
        name: Schema_markup.business_name,
        image: Schema_markup.business_image?.url,
        telephone: Schema_markup.business_phone,
        address: {
          "@type": Schema_markup.bussiness_address?.address_type,
          streetAddress: Schema_markup.bussiness_address?.street_address,
          addressLocality: Schema_markup.bussiness_address?.city,
          postalCode: Schema_markup.bussiness_address?.postal_code,
          addressCountry: Schema_markup.bussiness_address?.country_code,
        },
        url: Schema_markup.business_url?.url,
      }
    : null;
    
  console.log('schemaData', schemaData)
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

