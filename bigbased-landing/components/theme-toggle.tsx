"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 border border-primary/30"
      style={{
        backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
      }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span
        className={`${
          theme === "dark" ? "translate-x-7" : "translate-x-1"
        } inline-block h-6 w-6 transform rounded-full transition-transform duration-200 ease-in-out`}
        style={{
          backgroundColor: theme === "dark" ? "rgb(230, 200, 125)" : "#000000",
        }}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={12} />
        ) : (
          <Sun className="h-4 w-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={12} />
        )}
      </span>
    </button>
  )
}
