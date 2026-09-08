import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import Cart from "@/components/Cart";
import Search from "@/components/Search";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Reva Creation — Timeless Jewellery",
  description: "Discover exquisitely crafted jewellery inspired by the quiet beauty of heirlooms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <CartProvider>
          <Header />
          <Cart />
          <Search />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
