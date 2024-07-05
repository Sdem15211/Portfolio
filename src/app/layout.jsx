import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-Manrope",
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio website Simon Demeulemeester",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
