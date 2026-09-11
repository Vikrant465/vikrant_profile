import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Providers } from "@/component/providers";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

const siteUrl = "https://vikrant-profile.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vikrant Singh | Full Stack Developer",
    template: "%s | Vikrant Singh",
  },
  description:
    "Portfolio of Vikrant Singh, a full stack developer specializing in React, Next.js, and Python.",
  keywords: ["Vikrant Singh", "Full Stack Developer", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Vikrant Singh" }],
  openGraph: {
    title: "Vikrant Singh | Full Stack Developer",
    description:
      "Portfolio of Vikrant Singh, a full stack developer specializing in React, Next.js, and Python.",
    url: siteUrl,
    siteName: "Vikrant Singh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikrant Singh | Full Stack Developer",
    description:
      "Portfolio of Vikrant Singh, a full stack developer specializing in React, Next.js, and Python.",
  },
  icons: { icon: "/favicon.ico" },
  verification: { google: "QmH9ehF6M0VkPA9fZPYMbdGnQ4zY2aueVAFwHTlGn8g" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0e17" },
  ],
};

/**
 * Applies the saved/preferred theme before first paint, so there's no
 * flash of the wrong theme on load.
 */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={geist.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
