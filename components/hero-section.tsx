"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Text content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <div className={`space-y-2 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">Welcome to my portfolio</p>
                <div className="space-y-3">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-balance leading-tight text-shadow-flow">
                    Kzyrell
                  </h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-balance leading-tight gradient-text-animated text-shimmer">
                    Dela Paz
                  </h1>
                </div>
              </div>

              <div className={`space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "100ms" }}>
                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[hsl(var(--accent-1))] via-[hsl(var(--accent-2))] to-[hsl(var(--accent-3))] bg-clip-text text-transparent">
                  Aspiring Cloud Engineer
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Building scalable, secure cloud infrastructure solutions for modern applications. Passionate about cloud technologies, virtualization, and creating innovative solutions.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "200ms" }}>
              <Button onClick={scrollToContact} size="lg" className="group gradient-border-animated">
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" asChild className="group">
                <a href="tel:+639974431161">
                  <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Call Me
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className={`flex gap-3 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: "300ms" }}>
              <Button variant="ghost" size="icon" asChild className="group hover:bg-primary/10">
                <a href="mailto:kzyrellyan@gmail.com" aria-label="Email">
                  <Mail className="w-5 h-5 group-hover:scale-125 transition-transform" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="group hover:bg-primary/10">
                <a href="https://www.linkedin.com/in/kzyrell-dela-paz-b04395351/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 group-hover:scale-125 transition-transform" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="group hover:bg-primary/10">
                <a href="https://github.com/kyeldlpz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5 group-hover:scale-125 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: "400ms" }}>
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl hover:shadow-primary/20 transition-shadow duration-500">
                <img
                  src="/images/profile.jpg"
                  alt="Kzyrell Dela Paz"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 to-transparent rounded-2xl blur-2xl -z-10 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
