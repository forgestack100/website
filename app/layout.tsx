import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Forgestack - Helping Devs Get Hired Without Gatekeepers",
  description:
    "Connect overlooked developers with startups that value talent over credentials. No recruiters, no gatekeeping—just real opportunities.",
  keywords: "developers, jobs, startups, hiring, community, mentorship, programming",
  authors: [{ name: "Forgestack", url: "https://forgestack.dev" }],
  creator: "Forgestack",
  publisher: "Forgestack",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forgestack.dev",
    title: "Forgestack - Helping Devs Get Hired Without Gatekeepers",
    description: "Connect overlooked developers with startups that value talent over credentials.",
    siteName: "Forgestack",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forgestack - Helping Devs Get Hired Without Gatekeepers",
    description: "Connect overlooked developers with startups that value talent over credentials.",
    site: "@forgestack36138",
    creator: "@forgestack36138",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
