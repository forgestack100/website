"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/developers", label: "For Developers" },
    { href: "/startups", label: "For Startups" },
    { href: "/community", label: "Community" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/images/forgestack-logo.png"
              alt="Forgestack Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 transition-all duration-300 hover:scale-105"
            />
            <span className="font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:inline">Forgestack</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 ml-auto">
            <ThemeToggle />
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <Link href="https://discord.gg/ACAVQcsYVS" target="_blank" rel="noopener noreferrer">
                Join Discord
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 ml-auto md:hidden">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="border-t py-4 px-2 space-y-2 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="w-full mt-4 bg-primary hover:bg-primary/90">
              <Link
                href="https://discord.gg/ACAVQcsYVS"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Discord
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
