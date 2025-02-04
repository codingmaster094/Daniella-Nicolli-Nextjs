
import "./globals.css";
import '../public/font/stylesheet.css';
import Header from "./componants/Header";
import Footer from "./componants/Footer";
import TopButton from "./componants/Top-Button";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Daniella nicolli",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header/>
      <main>
        {children}
        <SpeedInsights />
      </main>
      <Footer/>
      <TopButton/>
      </body>
    </html>
  );
}
