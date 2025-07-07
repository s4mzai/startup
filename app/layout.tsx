import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from 'next-auth/react'
import { Toaster } from "@/components/ui/sonner"


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
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}
