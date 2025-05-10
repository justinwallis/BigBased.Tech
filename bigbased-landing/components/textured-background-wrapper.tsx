import type React from "react"

interface TexturedBackgroundWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function TexturedBackgroundWrapper({ children, className = "" }: TexturedBackgroundWrapperProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 textured-background" aria-hidden="true"></div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
