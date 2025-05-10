"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

interface LogoMarqueeProps {
  speed?: number
}

export default function EnhancedLogoMarquee({ speed = 40 }: LogoMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [animationDuration, setAnimationDuration] = useState(0)

  // Sample logos with different widths to simulate real logos
  const logos = [
    {
      name: "SOVEREIGN",
      style: "border border-primary px-4 py-2 rounded",
      link: "/sovereign",
    },
    {
      name: "KINGDOM",
      style: "bg-primary/10 px-5 py-2 rounded-md",
      link: "/kingdom",
    },
    {
      name: "MATRIX",
      style: "border-b-2 border-primary px-4 py-2",
      link: "/matrix",
    },
    {
      name: "BASED",
      style: "bg-primary/5 border border-primary/20 px-6 py-2 rounded-full",
      link: "/based",
    },
    {
      name: "TECH",
      style: "border-t border-b border-primary px-5 py-2",
      link: "/tech",
    },
    {
      name: "ALLIANCE",
      style: "bg-gradient-to-r from-primary/20 to-transparent px-5 py-2 rounded-sm",
      link: "/alliance",
    },
    {
      name: "NETWORK",
      style: "border-l-4 border-primary pl-3 pr-4 py-2",
      link: "/network",
    },
    {
      name: "DOMAIN",
      style: "border border-dashed border-primary/50 px-4 py-2 rounded-md",
      link: "/domain",
    },
  ]

  useEffect(() => {
    const calculateWidth = () => {
      if (!innerRef.current || !containerRef.current) return

      // Get the width of a single set of logos
      const singleSetWidth = innerRef.current.scrollWidth / 2

      // Calculate animation duration based on width and speed
      // Lower duration = faster animation
      const duration = singleSetWidth / speed

      setAnimationDuration(duration)
    }

    // Calculate initially
    calculateWidth()

    // Recalculate on window resize
    const handleResize = () => {
      calculateWidth()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [speed])

  // Create a CSS animation keyframe dynamically
  const animationStyle = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `

  return (
    <div
      className="relative w-full overflow-hidden py-8 border-y border-primary/10 transition-colors duration-300"
      ref={containerRef}
    >
      {/* Dynamic animation style */}
      <style dangerouslySetInnerHTML={{ __html: animationStyle }} />

      {/* Fade left */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none transition-colors duration-300"></div>

      {/* Scrolling container */}
      <div
        ref={innerRef}
        className="flex items-center"
        style={{
          width: "fit-content",
          animation: animationDuration > 0 ? `scroll ${animationDuration}s linear infinite` : "none",
          willChange: "transform",
        }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div key={`logo-1-${index}`} className="mx-8 flex h-12 items-center justify-center">
            <Link
              href={logo.link}
              className={`flex h-full items-center justify-center ${logo.style} transition-colors duration-300 hover:scale-105 hover:shadow-md`}
              aria-label={`Visit ${logo.name}`}
            >
              <div className="text-primary font-bold tracking-wider text-sm transition-colors duration-300">
                {logo.name}
              </div>
            </Link>
          </div>
        ))}

        {/* Duplicate set for seamless looping */}
        {logos.map((logo, index) => (
          <div key={`logo-2-${index}`} className="mx-8 flex h-12 items-center justify-center">
            <Link
              href={logo.link}
              className={`flex h-full items-center justify-center ${logo.style} transition-colors duration-300 hover:scale-105 hover:shadow-md`}
              aria-label={`Visit ${logo.name}`}
            >
              <div className="text-primary font-bold tracking-wider text-sm transition-colors duration-300">
                {logo.name}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Fade right */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none transition-colors duration-300"></div>
    </div>
  )
}
