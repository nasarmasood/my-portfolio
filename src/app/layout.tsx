import type { Metadata } from "next";
import { Work_Sans } from 'next/font/google';
import "./globals.css";


const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap', // Helps prevent layout shift (CLS)
  variable: '--font-work-sans', // Defines a CSS variable for Tailwind
});

export const metadata: Metadata = {
  title: "My-Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
