'use client'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ darkMode, toggleDarkMode, size = "md" }) {
  const iconSize = size === "lg" ? 24 : 18
  const buttonClass = size === "lg" 
    ? "p-3 hover:bg-gray-800" 
    : "p-2 hover:bg-gray-800"

  return (
    <button
      onClick={toggleDarkMode}
      className={`rounded-full transition-colors ${buttonClass}`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <FiSun className="text-cyan-400" size={iconSize} />
      ) : (
        <FiMoon className="text-gray-400" size={iconSize} />
      )}
    </button>
  )
}