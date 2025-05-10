"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

// Define the logo type
interface Logo {
  id: string
  name: string
  symbol: string
  link: string
}

export default function RotatingLogosDisplay() {
  const router = useRouter()
  const [activeLogoId, setActiveLogoId] = useState<string | null>(null)

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

  const handleLogoClick = (logo: Logo) => {
    setActiveLogoId(logo.id)
    // You can add additional actions here
    router.push(logo.link)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>

      {/* Container for the entire logo display */}
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-center items-center">
          <div className="relative" style={{ width: "100%", maxWidth: "800px", height: "800px" }}>
            {/* Central static logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full bg-gradient-to-br from-[#e6c87d] via-[#e6c87d]/80 to-[#e6c87d]/60 flex items-center justify-center shadow-lg shadow-[#e6c87d]/20">
                <div className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full bg-black flex items-center justify-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                    <svg viewBox="0 0 40 40" className="w-full h-full text-[#e6c87d]">
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
                        fontSize="12"
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
                const radius = 200 // Adjust based on your design
                const x = Math.cos(angle) * radius + 400 // Center x (400 is half of container width)
                const y = Math.sin(angle) * radius + 400 // Center y (400 is half of container height)

                return (
                  <button
                    key={logo.id}
                    className={`absolute w-16 h-16 rounded-full bg-black border-2 border-[#e6c87d] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#e6c87d] focus:ring-opacity-50 ${
                      activeLogoId === logo.id ? "border-white scale-110" : ""
                    }`}
                    style={{ left: `${x}px`, top: `${y}px` }}
                    onClick={() => handleLogoClick(logo)}
                    aria-label={`Navigate to ${logo.name}`}
                  >
                    <span className="text-[#e6c87d] font-bold">{logo.symbol}</span>
                  </button>
                )
              })}
            </div>

            {/* Outer rotating circle (counter-clockwise) */}
            <div className="absolute top-0 left-0 w-full h-full animate-spin-slow-counterclockwise">
              {outerLogos.map((logo, index) => {
                // Calculate position on the circle
                const angle = (index / outerLogos.length) * 2 * Math.PI
                const radius = 320 // Larger radius for outer circle
                const x = Math.cos(angle) * radius + 400 // Center x
                const y = Math.sin(angle) * radius + 400 // Center y

                return (
                  <button
                    key={logo.id}
                    className={`absolute w-14 h-14 rounded-full bg-black border-2 border-[#e6c87d] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#e6c87d] focus:ring-opacity-50 ${
                      activeLogoId === logo.id ? "border-white scale-110" : ""
                    }`}
                    style={{ left: `${x}px`, top: `${y}px` }}
                    onClick={() => handleLogoClick(logo)}
                    aria-label={`Navigate to ${logo.name}`}
                  >
                    <span className="text-[#e6c87d] font-bold text-xs">{logo.symbol}</span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
