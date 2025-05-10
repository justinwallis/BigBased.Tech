import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "BigBased - Break the Matrix. Build the Kingdom.",
  description: "650+ Sovereign Domains - Decentralized Tech - Based to the Bone",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  applicationName: "BigBased",
  authors: [{ name: "BigBased Team" }],
  generator: "Next.js",
  keywords: ["sovereign", "decentralized", "tech", "kingdom", "matrix"],
  referrer: "origin-when-cross-origin",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#e6c87d" },
  ],
  colorScheme: "dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bigbased.tech/",
    siteName: "BigBased",
    title: "BigBased - Break the Matrix. Build the Kingdom.",
    description: "650+ Sovereign Domains - Decentralized Tech - Based to the Bone",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BigBased - Break the Matrix. Build the Kingdom.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BigBased - Break the Matrix. Build the Kingdom.",
    description: "650+ Sovereign Domains - Decentralized Tech - Based to the Bone",
    images: ["/twitter-image.png"],
    creator: "@bigbased",
  },
  appleWebApp: {
    title: "BigBased",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: true,
    url: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.png" color="#e6c87d" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
