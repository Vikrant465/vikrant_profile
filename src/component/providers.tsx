"use client";

import type { ReactNode } from "react";
import { HeroUIProvider } from "@heroui/react";

/**
 * HeroUIProvider does browser-only work (media queries, portals, etc.) and
 * its compiled output doesn't carry its own "use client" pragma. It has to
 * be wrapped in an explicit client component like this one — importing it
 * directly into a Server Component (layout.tsx) causes Next.js to try to
 * evaluate browser-only code on the server and throw at render time.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}