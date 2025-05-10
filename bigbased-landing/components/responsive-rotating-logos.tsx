"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "./theme-provider"

// Define the logo type
interface Logo {
  id: string
  name: string
  symbol: string
  link: string
}

export default function ResponsiveRotatingLogos() {
  const router = useRouter()
  const { theme } = useTheme()
  const [activeLogoId, setActiveLogoId] = useState<string | null>(null)
  const [containerSize, setContainerSize] = useState({ width: 1000, height: 1000 })
  const [innerRadius, setInnerRadius] = useState(220) // Closer to center
  const [outerRadius, setOuterRadius] = useState(340) // Closer to inner circle
  const [hoveredLogoId, setHoveredLogoId] = useState<string | null>(null)

  // Sample logos for the inner circle
  const innerLogos: Logo[] = [
    { id: "logo1", name: "SOVEREIGN", symbol: "S", link: "#sovereign" },
    { id: "logo2", name: "KINGDOM", symbol: "K", link: "#kingdom" },
    { id: "logo3", name: "MATRIX", symbol: "M", link: "#matrix" },
    { id: "logo4", name: "BASED", symbol: "B", link: "#based" },
    { id: "logo5", name: "TECH", symbol: "T", link: "#tech" },
    { id: "logo6", name: "ALLIANCE", symbol: "A", link: "#alliance" },
    { id: "logo7", name: "NETWORK", symbol: "N", link: "#network" },
    { id: "logo8", name: "DOMAIN", symbol: "D", link: "#domain" },
  ]

  // Sample logos for the outer circle (more logos for the outer circle)
  const outerLogos: Logo[] = [
    { id: "outer1", name: "ACADEMY", symbol: "A", link: "#academy" },
    { id: "outer2", name: "FUND", symbol: "F", link: "#fund" },
    { id: "outer3", name: "SHOP", symbol: "S", link: "#shop" },
    { id: "outer4", name: "AI", symbol: "AI", link: "#ai" },
    { id: "outer5", name: "DEV", symbol: "D", link: "#dev" },
    { id: "outer6", name: "TEAM", symbol: "T", link: "#team" },
    { id: "outer7", name: "HQ", symbol: "HQ", link: "#hq" },
    { id: "outer8", name: "STORE", symbol: "S", link: "#store" },
    { id: "outer9", name: "PORTAL", symbol: "P", link: "#portal" },
    { id: "outer10", name: "SUITE", symbol: "S", link: "#suite" },
    { id: "outer11", name: "CARGO", symbol: "C", link: "#cargo" },
    { id: "outer12", name: "CAPITAL", symbol: "C", link: "#capital" },
  ]

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      let newSize = 1000
      let newInnerRadius = 220
      let newOuterRadius = 340

      if (window.innerWidth < 1280) {
        newSize = 900
        newInnerRadius = 200
        newOuterRadius = 310
      }

      if (window.innerWidth < 1024) {
        newSize = 800
        newInnerRadius = 180
        newOuterRadius = 280
      }

      if (window.innerWidth < 768) {
        newSize = 600
        newInnerRadius = 140
        newOuterRadius = 220
      }

      if (window.innerWidth < 640) {
        newSize = 400
        newInnerRadius = 100
        newOuterRadius = 160
      }

      setContainerSize({ width: newSize, height: newSize })
      setInnerRadius(newInnerRadius)
      setOuterRadius(newOuterRadius)
    }

    // Initial setup
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleLogoClick = (logo: Logo) => {
    setActiveLogoId(logo.id)
    // You can add additional actions here
    router.push(logo.link)
  }

  // Calculate center point
  const centerX = containerSize.width / 2
  const centerY = containerSize.height / 2

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 transition-colors duration-300"></div>

      {/* Section title */}
      <div className="container mx-auto px-4 mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif text-center text-black dark:text-primary transition-colors duration-300">
          SOVEREIGN NETWORK
        </h2>
        <p className="text-center text-black/70 dark:text-primary/70 mt-4 max-w-2xl mx-auto transition-colors duration-300">
          Explore our ecosystem of sovereign domains and services, each designed to empower your journey toward digital
          independence.
        </p>
      </div>

      {/* Container for the entire logo display */}
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-center items-center">
          <div
            className="relative rotating-logos-container"
            style={{
              width: `${containerSize.width}px`,
              height: `${containerSize.height}px`,
              margin: "0 auto",
            }}
          >
            {/* Central static logo - larger and more prominent */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-black dark:from-primary via-black/80 dark:via-primary/80 to-black/60 dark:to-primary/60 flex items-center justify-center animate-shadow-pulse transition-colors duration-300">
                <div className="w-44 h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-full bg-background flex items-center justify-center transition-colors duration-300">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
                    <svg
                      viewBox="0 0 40 40"
                      className="w-full h-full text-black dark:text-primary transition-colors duration-300"
                    >
                      <path
                        d="M20 0L0 10v20l20 10 20-10V10L20 0z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path d="M10 5L20 0l10 5-10 5-10-5z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <text
                        x="50%"
                        y="55%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="6"
                      >
                        BigBased
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Inner rotating circle (clockwise) */}
            <div className="absolute top-0 left-0 w-full h-full animate-spin-slow-clockwise">
              {innerLogos.map((logo, index) => {
                // Calculate position on the circle
                const angle = (index / innerLogos.length) * 2 * Math.PI
                const x = Math.cos(angle) * innerRadius + centerX
                const y = Math.sin(angle) * innerRadius + centerY

                // Determine logo size based on screen size
                const logoSize = containerSize.width < 640 ? "w-12 h-12" : "w-16 h-16 md:w-20 md:h-20"
                const fontSize = containerSize.width < 640 ? "text-sm" : "text-base"

                const isHovered = hoveredLogoId === logo.id
                const isActive = activeLogoId === logo.id

                return (
                  <div
                    key={logo.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}px`, top: `${y}px` }}
                  >
                    {/* Enhanced outer highlight effect that appears on hover */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-500 ${
                        isHovered ? "scale-[2.2] opacity-100" : "scale-100 opacity-0"
                      }`}
                      style={{
                        background:
                          theme === "light"
                            ? `radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 40%, transparent 70%)`
                            : `radial-gradient(circle, rgba(230, 200, 125, 0.5) 0%, rgba(230, 200, 125, 0.2) 40%, transparent 70%)`,
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        boxShadow: isHovered
                          ? theme === "light"
                            ? "0 0 30px 5px rgba(0, 0, 0, 0.3)"
                            : "0 0 30px 5px rgba(230, 200, 125, 0.3)"
                          : "none",
                      }}
                    ></div>

                    <button
                      className={`relative ${logoSize} rounded-full bg-background flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-primary focus:ring-opacity-50 overflow-hidden group z-10 animate-shadow-pulse`}
                      onClick={() => handleLogoClick(logo)}
                      onMouseEnter={() => setHoveredLogoId(logo.id)}
                      onMouseLeave={() => setHoveredLogoId(null)}
                      aria-label={`Navigate to ${logo.name}`}
                    >
                      {/* Background and border with enhanced hover effect */}
                      <div
                        className={`absolute inset-0 border-2 ${
                          isActive
                            ? "border-white"
                            : isHovered
                              ? "border-black dark:border-primary bg-black/20 dark:bg-primary/20"
                              : "border-black dark:border-primary"
                        } transition-all duration-300 ${isHovered ? "scale-110" : ""}`}
                      ></div>

                      {/* Counter-rotating container to keep content upright */}
                      <div
                        className="relative z-10 flex items-center justify-center w-full h-full animate-counter-spin-clockwise"
                        style={{ animationDuration: "120s" }}
                      >
                        <span
                          className={`text-black dark:text-primary font-bold ${fontSize} ${
                            isHovered ? "scale-110 text-white" : ""
                          } transition-all duration-300`}
                        >
                          {logo.symbol}
                        </span>
                      </div>
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Outer rotating circle (counter-clockwise) */}
            <div className="absolute top-0 left-0 w-full h-full animate-spin-slow-counterclockwise">
              {outerLogos.map((logo, index) => {
                // Calculate position on the circle
                const angle = (index / outerLogos.length) * 2 * Math.PI
                const x = Math.cos(angle) * outerRadius + centerX
                const y = Math.sin(angle) * outerRadius + centerY

                // Determine logo size based on screen size
                const logoSize = containerSize.width < 640 ? "w-10 h-10" : "w-14 h-14 md:w-18 md:h-18"
                const fontSize = containerSize.width < 640 ? "text-xs" : "text-sm"

                const isHovered = hoveredLogoId === logo.id
                const isActive = activeLogoId === logo.id

                return (
                  <div
                    key={logo.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}px`, top: `${y}px` }}
                  >
                    {/* Enhanced outer highlight effect that appears on hover */}
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-500 ${
                        isHovered ? "scale-[2.2] opacity-100" : "scale-100 opacity-0"
                      }`}
                      style={{
                        background:
                          theme === "light"
                            ? `radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 40%, transparent 70%)`
                            : `radial-gradient(circle, rgba(230, 200, 125, 0.5) 0%, rgba(230, 200, 125, 0.2) 40%, transparent 70%)`,
                        width: "100%",
                        height: "100%",
                        zIndex: 1,
                        boxShadow: isHovered
                          ? theme === "light"
                            ? "0 0 30px 5px rgba(0, 0, 0, 0.3)"
                            : "0 0 30px 5px rgba(230, 200, 125, 0.3)"
                          : "none",
                      }}
                    ></div>

                    <button
                      className={`relative ${logoSize} rounded-full bg-background flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-primary focus:ring-opacity-50 overflow-hidden group z-10 animate-shadow-pulse`}
                      onClick={() => handleLogoClick(logo)}
                      onMouseEnter={() => setHoveredLogoId(logo.id)}
                      onMouseLeave={() => setHoveredLogoId(null)}
                      aria-label={`Navigate to ${logo.name}`}
                    >
                      {/* Background and border with enhanced hover effect */}
                      <div
                        className={`absolute inset-0 border-2 ${
                          isActive
                            ? "border-white"
                            : isHovered
                              ? "border-black dark:border-primary bg-black/20 dark:bg-primary/20"
                              : "border-black dark:border-primary"
                        } transition-all duration-300 ${isHovered ? "scale-110" : ""}`}
                      ></div>

                      {/* Counter-rotating container to keep content upright */}
                      <div
                        className="relative z-10 flex items-center justify-center w-full h-full animate-counter-spin-counterclockwise"
                        style={{ animationDuration: "160s" }}
                      >
                        <span
                          className={`text-black dark:text-primary font-bold ${fontSize} ${
                            isHovered ? "scale-110 text-white" : ""
                          } transition-all duration-300`}
                        >
                          {logo.symbol}
                        </span>
                      </div>
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Add subtle connecting lines between the circles */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              <svg width="100%" height="100%" className="absolute inset-0">
                <circle
                  cx="50%"
                  cy="50%"
                  r={innerRadius}
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.1)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="dark:stroke-[rgba(230,200,125,0.1)] transition-colors duration-300"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r={outerRadius}
                  fill="none"
                  stroke="rgba(0, 0, 0, 0.1)"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="dark:stroke-[rgba(230,200,125,0.1)] transition-colors duration-300"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Additional information */}
      <div className="container mx-auto px-4 mt-12 relative z-10">
        <p className="text-center text-black/60 dark:text-primary/60 text-sm max-w-lg mx-auto transition-colors duration-300">
          Click on any logo to explore that domain. Each represents a unique aspect of our sovereign ecosystem.
        </p>
      </div>
    </section>
  )
}
