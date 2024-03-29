import { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Fathom from "./components/fathom";
import "./globals.css";

const kinfolk = localFont({
  src: "./subset-BNKinfolkRounded.woff2",
  display: "swap",
  variable: "--font-kinfolk",
});

const inter = Inter({
  weight: ["600", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-black antialiased ${kinfolk.variable} ${inter.variable}`}
    >
      <body>
        {children}
        <Fathom />
      </body>
    </html>
  );
}
