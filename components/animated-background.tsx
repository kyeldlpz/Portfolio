"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string }>>([])
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string }>>([])
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Generate stars
    const starArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }))
    setStars(starArray)

    // Generate floating particles
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
    }))
    setParticles(particleArray)

    // Track scroll for gradient color shifts
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      setScrollProgress((scrolled / scrollHeight) * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>
      <div className="floating-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>
      {/* Gradient overlay that shifts based on scroll */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `linear-gradient(
            ${scrollProgress}deg,
            hsl(250 95% 60% / ${0.02 + (scrollProgress / 100) * 0.03}),
            hsl(270 100% 55% / ${0.02 + (scrollProgress / 100) * 0.03}),
            hsl(190 95% 50% / ${0.02 + (scrollProgress / 100) * 0.03})
          )`,
          transition: "background 0.1s ease",
        }}
      />
    </>
  )
}
