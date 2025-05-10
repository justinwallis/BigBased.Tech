"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setVisible(true)
    const handleMouseLeave = () => setVisible(false)
    const handleMouseDown = () => setClicking(true)
    const handleMouseUp = () => setClicking(false)

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  if (!visible) return null

  return (
    <>
      <div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`absolute inset-0 rounded-full border border-[#e6c87d] transition-all duration-200 ${
            clicking ? "scale-90 opacity-70" : "scale-100 opacity-100"
          }`}
        ></div>
        <div
          className={`absolute inset-0 rounded-full bg-[#e6c87d] transition-all duration-200 ${
            clicking ? "scale-50 opacity-50" : "scale-0 opacity-0"
          }`}
        ></div>
      </div>
      <div
        className="fixed w-1 h-1 bg-[#e6c87d] rounded-full pointer-events-none z-50"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </>
  )
}
