import "./globals.css";
import "../public/font/stylesheet.css";
import Header from "../app/componants/Header";
import Footer from "../app/componants/Footer";
import TopButton from "../app/componants/Top-Button";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Daniella Nicolli",
  description: "Daniella nicolli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/owl.carousel.min.css" />
      </head>
      <body>
        <Header />
        <main>
          {children}
          <SpeedInsights />
          <TopButton />
        </main>
        <Footer />
        <script src="/jquery.min.js"></script>
        <script src="/owl.carousel.min.js"></script>
      </body>
    </html>
  );
}
