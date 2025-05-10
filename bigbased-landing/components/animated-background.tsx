"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 10000), 150)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }

      particlesRef.current = particles
    }

    const drawParticles = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particlesRef.current.forEach((particle, i) => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 2)
        gradient.addColorStop(0, `rgba(230, 200, 125, ${particle.opacity})`)
        gradient.addColorStop(1, "rgba(230, 200, 125, 0)")

        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Connect particles that are close to each other
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j]
          const dx = particle.x - p2.x
          const dy = particle.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(230, 200, 125, ${(0.1 * (1 - distance / maxDistance) * (particle.opacity + p2.opacity)) / 2})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })
    }

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true" />
  )
}
