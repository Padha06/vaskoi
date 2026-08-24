import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaskoi | Build. Connect. Scale.",
  description:
    "Full-stack development and custom solutions company. Web, mobile, Business Central integrations, and warehouse management systems.",
  keywords: [
    "full-stack development",
    "custom software",
    "Business Central",
    "warehouse management",
    "web development",
    "mobile development",
  ],
  openGraph: {
    title: "Vaskoi | Build. Connect. Scale.",
    description:
      "Full-stack development and custom solutions for startups, SMBs, and enterprises.",
    url: "https://vaskoi.com",
    siteName: "Vaskoi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaskoi | Build. Connect. Scale.",
    description:
      "Full-stack development and custom solutions for startups, SMBs, and enterprises.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
