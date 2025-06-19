import "../public/css/globals.css";
import "../public/css/stylesheet.css";
import Footer from "./Footer/page";
import TopButton from "../app/componants/Top-Button";
import Header from "./Header/page";


export default async function RootLayout({ children }) {  
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <TopButton />
        <Footer />
      </body>
    </html>
  );
}

