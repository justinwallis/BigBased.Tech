"use client"

import { useEffect, useRef, useState } from "react"

interface LogoMarqueeProps {
  speed?: number
}

export default function LogoMarquee({ speed = 40 }: LogoMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  // Sample logos with different widths to simulate real logos
  const logos = [
    {
      name: "SOVEREIGN",
      style: "border border-[#e6c87d] px-4 py-2 rounded",
    },
    {
      name: "KINGDOM",
      style: "bg-[#e6c87d]/10 px-5 py-2 rounded-md",
    },
    {
      name: "MATRIX",
      style: "border-b-2 border-[#e6c87d] px-4 py-2",
    },
    {
      name: "BASED",
      style: "bg-[#e6c87d]/5 border border-[#e6c87d]/20 px-6 py-2 rounded-full",
    },
    {
      name: "TECH",
      style: "border-t border-b border-[#e6c87d] px-5 py-2",
    },
    {
      name: "ALLIANCE",
      style: "bg-gradient-to-r from-[#e6c87d]/20 to-transparent px-5 py-2 rounded-sm",
    },
    {
      name: "NETWORK",
      style: "border-l-4 border-[#e6c87d] pl-3 pr-4 py-2",
    },
    {
      name: "DOMAIN",
      style: "border border-dashed border-[#e6c87d]/50 px-4 py-2 rounded-md",
    },
  ]

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const updateMarquee = () => {
      // Get the width of the container
      const containerWidth = marquee.parentElement?.clientWidth || 0
      setContainerWidth(containerWidth)

      // Calculate the total width of all logos
      const logoSetWidth = marquee.scrollWidth / 2

      // Calculate animation duration based on logo width and desired speed
      // Lower duration = faster speed
      const duration = logoSetWidth / speed

      // Set the animation duration dynamically
      marquee.style.animationDuration = `${duration}s`
    }

    // Initial setup
    updateMarquee()

    // Update on resize
    const handleResize = () => {
      updateMarquee()
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [speed])

  return (
    <div className="logo-marquee-container relative w-full overflow-hidden bg-black py-8 border-y border-[#e6c87d]/10">
      {/* Fade left */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

      {/* Scrolling logos */}
      <div
        ref={marqueeRef}
        className="flex items-center"
        style={{
          width: "fit-content",
          animation: "marquee linear infinite",
          willChange: "transform",
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div key={`logo-1-${index}`} className="mx-8 flex h-12 items-center justify-center">
            <div className={`flex h-full items-center justify-center ${logo.style}`}>
              <div className="text-[#e6c87d] font-bold tracking-wider text-sm">{logo.name}</div>
            </div>
          </div>
        ))}

        {/* Duplicate set of logos for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`logo-2-${index}`} className="mx-8 flex h-12 items-center justify-center">
            <div className={`flex h-full items-center justify-center ${logo.style}`}>
              <div className="text-[#e6c87d] font-bold tracking-wider text-sm">{logo.name}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Fade right */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  )
}
