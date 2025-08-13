// app/layout.tsx
'use client'
import "../styles/globals.css";
import { Geist } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";

const geist = Geist({ subsets: ["latin"] });

// export const metadata = {
//   title: "Vikrant Singh | Portfolio",
//   description: "Portfolio of Vikrant Singh",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Vikrant Singh </title>
        <meta name="description" content="Portfolio of Vikrant Singh" />
        <meta name="google-site-verification" content="QmH9ehF6M0VkPA9fZPYMbdGnQ4zY2aueVAFwHTlGn8g" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={geist.className}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
