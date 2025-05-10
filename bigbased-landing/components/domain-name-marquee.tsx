"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

interface DomainMarqueeProps {
  speed?: number
}

export default function DomainNameMarquee({ speed = 30 }: DomainMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [animationDuration, setAnimationDuration] = useState(0)

  // Sample domain names
  const domains = [
    { name: "bigbased.com", link: "https://bigbased.com" },
    { name: "sovereign.tech", link: "https://sovereign.tech" },
    { name: "kingdom.network", link: "https://kingdom.network" },
    { name: "matrix.solutions", link: "https://matrix.solutions" },
    { name: "based.digital", link: "https://based.digital" },
    { name: "tech.alliance", link: "https://tech.alliance" },
    { name: "network.domains", link: "https://network.domains" },
    { name: "domain.registry", link: "https://domain.registry" },
    { name: "bigbased.ai", link: "https://bigbased.ai" },
    { name: "sovereign.fund", link: "https://sovereign.fund" },
    { name: "kingdom.builders", link: "https://kingdom.builders" },
    { name: "matrix.breakers", link: "https://matrix.breakers" },
  ]

  useEffect(() => {
    const calculateWidth = () => {
      if (!innerRef.current || !containerRef.current) return

      // Get the width of a single set of domains
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
    @keyframes scrollRight {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0);
      }
    }
  `

  return (
    <div
      className="relative w-full overflow-hidden py-6 border-b border-primary/10 transition-colors duration-300 bg-background/50"
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
          animation: animationDuration > 0 ? `scrollRight ${animationDuration}s linear infinite` : "none",
          willChange: "transform",
        }}
      >
        {/* First set of domains */}
        {domains.map((domain, index) => (
          <div key={`domain-1-${index}`} className="mx-6 flex h-8 items-center justify-center">
            <Link
              href={domain.link}
              className="flex items-center justify-center px-3 py-1 transition-colors duration-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${domain.name}`}
            >
              <div className="text-black dark:text-primary font-mono text-sm tracking-wider transition-colors duration-300">
                {domain.name}
              </div>
            </Link>
          </div>
        ))}

        {/* Duplicate set for seamless looping */}
        {domains.map((domain, index) => (
          <div key={`domain-2-${index}`} className="mx-6 flex h-8 items-center justify-center">
            <Link
              href={domain.link}
              className="flex items-center justify-center px-3 py-1 transition-colors duration-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${domain.name}`}
            >
              <div className="text-black dark:text-primary font-mono text-sm tracking-wider transition-colors duration-300">
                {domain.name}
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
