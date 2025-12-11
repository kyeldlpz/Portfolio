"use client"

import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string }>>([])
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string }>>([])

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
    </>
  )
}
