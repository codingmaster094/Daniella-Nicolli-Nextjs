import "../public/css/globals.css";
import "../public/css/stylesheet.css";
import Footer from "./Footer/page";
import TopButton from "../app/componants/Top-Button";
import Header from "./Header/page";
import CanonicalTag from "./componants/CanonicalTag";

export default async function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body>
        {/* <CanonicalTag /> */}
        <Header />
        <main>{children}</main>
        <TopButton />
        <Footer />
      </body>
    </html>
  );
}

