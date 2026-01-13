"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = window.scrollY
      setScrollProgress((scrolled / windowHeight) * 100)

      // Update active section
      const sections = ["about", "experience", "skills", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (id === "") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      setIsOpen(false)
      return
    }
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection("")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center text-foreground font-bold text-sm group-hover:shadow-lg group-hover:shadow-primary/50 transition-shadow">
                K
              </div>
              <span className="font-bold text-lg hidden sm:inline">Kzyrell</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all relative group ${
                    activeSection === item.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                      activeSection === item.id 
                        ? "w-full bg-gradient-to-r from-[hsl(var(--accent-1))] via-[hsl(var(--accent-2))] to-[hsl(var(--accent-3))]" 
                        : "w-0 group-hover:w-full bg-gradient-to-r from-[hsl(var(--accent-1))] via-[hsl(var(--accent-2))] to-[hsl(var(--accent-3))]"
                    }`}
                  />
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border/50 animate-in fade-in slide-in-from-top-2">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </nav>
    </>
  )
}
