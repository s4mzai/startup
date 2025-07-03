import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({
//   subsets: ['latin'],
//   weight: [ "400", "500", "600", "700", "800", "900" ]
// })

export const metadata: Metadata = {
  title: "Startup",
  description: "A curated platform to discover and showcase early-stage startups — empowering founders to gain visibility and users to find the next big thing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
