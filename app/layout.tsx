import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Medsprings | Ophthalmic Technologies",
  description:
    "Medsprings delivers advanced ophthalmic technologies, tools, and solutions trusted worldwide by clinics and healthcare professionals.",
  keywords: [
    "ophthalmic technology",
    "medical devices",
    "eye care technology",
    "ophthalmology products",
    "medical equipment",
  ],
  authors: [{ name: "Medsprings" }],
  creator: "Medsprings",
  openGraph: {
    title: "Medsprings | Engineering Possibilities in Eye Care",
    description:
      "Advanced ophthalmic technologies engineered to improve vision and healthcare outcomes.",
    url: "https://medsprings.com",
    siteName: "Medsprings",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medsprings",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        <Navbar />

        <main className="mt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}