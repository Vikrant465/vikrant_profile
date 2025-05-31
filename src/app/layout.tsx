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
      <body className={geist.className}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
