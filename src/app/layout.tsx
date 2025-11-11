import type { Metadata } from "next";
import { Work_Sans, Poppins } from 'next/font/google'; // 1. Import Poppins
import "./globals.css";
import HeaderDesktop from "./components/responsiveHeader";

// ----------------------------------------------------
// Work Sans Configuration (Your primary font, variable-font)
// ----------------------------------------------------
const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans', // Primary font variable
});

// ----------------------------------------------------
// Poppins Configuration (Secondary font, non-variable font, requires weights)
// ----------------------------------------------------
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'], // You must specify weights for non-variable fonts
  variable: '--font-poppins', // Secondary font variable
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
        className={`${workSans.variable} ${poppins.variable} font-work antialiased m-0 p-0`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}