"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Building, Code, Cross, Database, Laptop, Network, ShoppingCart } from "lucide-react"
import EnhancedLogoMarquee from "@/components/enhanced-logo-marquee"
import DomainNameMarquee from "@/components/domain-name-marquee"
import Footer from "@/components/footer"
import TexturedBackgroundWrapper from "@/components/textured-background-wrapper"
import ResponsiveRotatingLogos from "@/components/responsive-rotating-logos"
import ThemeToggle from "@/components/theme-toggle"
import { useTheme } from "@/components/theme-provider"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-background/80 backdrop-blur-sm shadow-lg shadow-foreground/5" : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary font-bold text-2xl">B</div>
                </div>
                <svg viewBox="0 0 40 40" className="w-full h-full text-primary">
                  <path d="M20 0L0 10v20l20 10 20-10V10L20 0z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 5L20 0l10 5-10 5-10-5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                AI Suite
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                Team Portal
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                BigBased HQ
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                Funding
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition-colors">
                Store
              </Link>
              <ThemeToggle />
            </nav>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto py-20 px-4 text-center relative">
          <div className="hero-background absolute inset-0 overflow-hidden">
            <div className="grid-pattern absolute inset-0 opacity-10"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-serif mb-4">
              Break the Matrix.
              <br />
              Build the Kingdom.
            </h1>
            <p className="text-xl mb-12">650+ Sovereign Domains - Decentralized Tech - Based to the Bone</p>
            <div className="flex justify-center">
              <Link
                href="#"
                className="border-2 border-primary text-primary hover:bg-primary/10 transition-colors px-8 py-4 text-lg font-medium"
              >
                ENTER THE NETWORK
              </Link>
            </div>
          </div>
        </section>

        {/* Logo Marquee Section */}
        <EnhancedLogoMarquee speed={40} />

        {/* Domain Name Marquee Section - scrolling in opposite direction */}
        <DomainNameMarquee speed={30} />

        {/* Wrap all content after the hero and logo marquee with the textured background */}
        <TexturedBackgroundWrapper className="flex-1">
          <div className="container mx-auto px-4">
            <hr className="border-primary/20 my-8" />
          </div>

          <section className="container mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="icon-container">
                    <Building className="w-16 h-16 text-primary icon-hover" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">BigBased.com</h3>
                <p className="text-sm">
                  The Hub for
                  <br />
                  Civilization Rebuilding
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 border border-primary rounded-full flex items-center justify-center icon-container">
                    <div className="w-10 h-10 text-primary icon-hover">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="w-full h-full"
                      >
                        <circle cx="12" cy="8" r="5" />
                        <path d="M5 22v-4a7 7 0 0 1 14 0v4" />
                        <circle cx="9" cy="8" r="1" fill="currentColor" />
                        <circle cx="15" cy="8" r="1" fill="currentColor" />
                        <path d="M9 12h6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">BigBased.AI</h3>
                <p className="text-sm">
                  AI for Builders,
                  <br />
                  and Biblical Agents
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 border border-primary rounded-full flex items-center justify-center icon-container">
                    <Network className="w-10 h-10 text-primary icon-hover" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">BigBased.Team</h3>
                <p className="text-sm">
                  Founders,
                  <br />
                  Collaboraters,
                  <br />
                  and Mission Roles
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="icon-container">
                    <Laptop className="w-16 h-16 text-primary icon-hover" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">BigBased.Dev</h3>
                <p className="text-sm">
                  Sovereign software
                  <br />& Infra Stack
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="icon-container">
                    <Network className="w-16 h-16 text-primary icon-hover" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">BigBased.Academy</h3>
                <p className="text-sm">
                  Sovereign Software
                  <br />& Site Stack
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="icon-container">
                    <Cross className="w-16 h-16 text-primary icon-hover" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">BigBased.Fund</h3>
                <p className="text-sm">
                  Cargo / Capital
                  <br />& Insider Tiers
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="icon-container">
                    <Database className="w-16 h-16 text-primary icon-hover" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">BigBased Network</h3>
                <p className="text-sm">
                  Hard Assests and
                  <br />
                  Sovereign AFV
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="icon-container">
                    <ShoppingCart className="w-16 h-16 text-primary icon-hover" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">BigBased Shop</h3>
                <p className="text-sm">
                  Gear, Prints,
                  <br />
                  Zines, Merch
                  <br />
                  stacks
                </p>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-4">
            <hr className="border-primary/20 my-8" />
          </div>

          <section className="container mx-auto py-16 px-4 text-center">
            <h2 className="text-3xl font-serif mb-16">WHY BIGBASED.TECH?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="icon-container">
                    <Network className="w-16 h-16 text-primary icon-hover" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">Decentralized Control</h3>
                <p className="text-sm">
                  Self-heated-Sovereign
                  <br />
                  pee-world.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="icon-container">
                    <Cross className="w-16 h-16 text-primary icon-hover" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">Faith-Aligned Innovation</h3>
                <p className="text-sm">
                  Rooted in eternal truths,
                  <br />
                  not malleable empire.
                </p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="icon-container">
                    <Code className="w-16 h-16 text-primary icon-hover" strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-2">Elite Ecosystem</h3>
                <p className="text-sm">
                  A single SSO across
                  <br />
                  660 sovereign stacks
                </p>
              </div>
            </div>
          </section>

          {/* Divider before rotating logos section */}
          <div className="container mx-auto px-4">
            <hr className="border-primary/20 my-8" />
          </div>

          {/* Add the rotating logos section before the footer */}
          <ResponsiveRotatingLogos />
        </TexturedBackgroundWrapper>

        {/* Add the rotating logos section before the footer */}
      </main>

      {/* Update the footer to have a subtle transition from the textured background */}
      <Footer />
    </div>
  )
}
