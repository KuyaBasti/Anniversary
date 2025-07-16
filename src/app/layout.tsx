import React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: "Trin and Basti Adventures",
  description: "Trin and Basti Adventures",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfairDisplay.variable}`}>{children}</body>
    </html>
  );
} 