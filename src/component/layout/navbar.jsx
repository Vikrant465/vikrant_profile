// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
//   Switch,
// } from "@heroui/react";
// import { useEffect, useState } from "react";
// import { MoonIcon, SunIcon } from "./Icon";

// export default function Nav() {
//   const [isDark, setIsDark] = useState(false);

//   // Load theme from localStorage on mount
//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     const prefersDark =
//       storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
//     setIsDark(prefersDark);
//     document.documentElement.classList.toggle("dark", prefersDark);
//   }, []);

//   // Handle theme toggle
//   // @ts-ignore
//   const toggleTheme = (value) => {
//     setIsDark(value);
//     if (value) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   };


//   return (
//     <Navbar shouldHideOnScroll>
//       <NavbarBrand>
//         <p className="font-bold text-inherit">VIKRANT</p>
//       </NavbarBrand>
//       <NavbarContent className=" flex gap-4" justify="center">
//         <NavbarItem >
//           <Link color="foreground" href="#About">
//             About
//           </Link>
//         </NavbarItem>
//         <NavbarItem >
//           <Link href="#Project" color="foreground" aria-current="page">
//             Projects
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#experience">
//             Experience
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarItem>
//         <Link color="foreground" href="#skills">
//           My Skills
//         </Link>
//       </NavbarItem>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="../component/contact">Contact</Link>
//         </NavbarItem>
//         <NavbarItem>
//           {/* <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button> */}
//         </NavbarItem>
//         <Switch
//           isSelected={isDark}
//           onValueChange={toggleTheme}
//           size="lg"
//           color="primary"
//           thumbIcon={({ isSelected, className }) =>
//             isSelected ? (
//               <SunIcon className={className} />
//             ) : (
//               <MoonIcon className={className} />
//             )
//           }
//         ></Switch>
//       </NavbarContent>
//     </Navbar>
//   );
// }

"use client";

import { useState } from "react";
import { ThemeToggle } from "@/component/ui/theme-toggle";
import { CloseIcon, MenuIcon } from "@/component/ui/icons";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-lg font-bold tracking-tight">
          Vikrant Singh
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
          >
            {isOpen ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-border bg-background px-4 py-3 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
