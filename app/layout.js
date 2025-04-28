import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "SoftLux Cleaning Services Ltd",
  description:
    "Professional cleaning services including carpet cleaning, upholstery cleaning, and more. We provide top-quality cleaning solutions for homes and businesses.",
  keywords:
    "cleaning services, carpet cleaning, upholstery cleaning, professional cleaners, leather cleaning, mattress cleaning, pet stain removal",
  authors: [{ name: "CleanMaster" }],
  icons: {
    icon: [ { url: "/favicon.jpg" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
