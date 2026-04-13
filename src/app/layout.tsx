import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrimeSolutions | Expert BPO & Digital Solutions",
  description:
    "Scale smarter with expert BPO services, website development, real estate lead generation, custom software, and digital marketing solutions.",
  keywords: [
    "BPO services",
    "digital solutions",
    "website development",
    "real estate leads",
    "custom software",
    "SEO",
    "digital marketing",
  ],
  authors: [{ name: "PrimeSolutions" }],
  openGraph: {
    title: "PrimeSolutions | Expert BPO & Digital Solutions",
    description:
      "Scale smarter with expert BPO services, website development, real estate lead generation, custom software, and digital marketing solutions.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#14B8A6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} bg-background`}
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
