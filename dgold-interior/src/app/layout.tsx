import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "D'Gold Interior & Furniture | Luxury Interior Design Abuja",
  description: "Bespoke interior design and premium furniture in Wuse II, Abuja. Transform your living spaces with D'Gold.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-[#0a0a0a] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
