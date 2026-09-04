import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
    <html lang="en" className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} dark`}>
      <body className="bg-surface-deep font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
