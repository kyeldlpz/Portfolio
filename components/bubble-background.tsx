"use client"

import { useEffect, useState, useRef } from "react"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  vx: number
  vy: number
  life: number
}

export function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bubblesRef = useRef<Bubble[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Create bubbles
    const createBubble = (x?: number, y?: number) => {
      const bubble: Bubble = {
        id: Math.random(),
        x: x ?? Math.random() * canvas.width,
        y: y ?? Math.random() * canvas.height,
        size: Math.random() * 40 + 15,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        life: 1,
      }
      bubblesRef.current.push(bubble)
    }

    // Initial bubbles
    for (let i = 0; i < 15; i++) {
      createBubble()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw bubbles
      bubblesRef.current = bubblesRef.current.filter((bubble) => {
        // Update position
        bubble.x += bubble.vx
        bubble.y += bubble.vy
        bubble.life -= 0.002

        // Bounce off edges
        if (bubble.x - bubble.size < 0 || bubble.x + bubble.size > canvas.width) {
          bubble.vx *= -1
        }
        if (bubble.y - bubble.size < 0 || bubble.y + bubble.size > canvas.height) {
          bubble.vy *= -1
        }

        // Keep within bounds
        bubble.x = Math.max(bubble.size, Math.min(canvas.width - bubble.size, bubble.x))
        bubble.y = Math.max(bubble.size, Math.min(canvas.height - bubble.size, bubble.y))

        // Mouse interaction
        const dx = mouseRef.current.x - bubble.x
        const dy = mouseRef.current.y - bubble.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const attraction = 150

        if (distance < attraction) {
          const angle = Math.atan2(dy, dx)
          bubble.vx -= Math.cos(angle) * 0.3
          bubble.vy -= Math.sin(angle) * 0.3
        }

        // Draw bubble
        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.size / 3,
          bubble.y - bubble.size / 3,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        )

        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        if (isDark) {
          gradient.addColorStop(0, `rgba(96, 165, 250, ${0.4 * bubble.life})`)
          gradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.2 * bubble.life})`)
          gradient.addColorStop(1, `rgba(30, 58, 138, ${0.05 * bubble.life})`)
        } else {
          gradient.addColorStop(0, `rgba(191, 219, 254, ${0.3 * bubble.life})`)
          gradient.addColorStop(0.5, `rgba(147, 197, 253, ${0.15 * bubble.life})`)
          gradient.addColorStop(1, `rgba(219, 234, 254, ${0.05 * bubble.life})`)
        }

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw bubble border
        ctx.strokeStyle = isDark
          ? `rgba(96, 165, 250, ${0.2 * bubble.life})`
          : `rgba(147, 197, 253, ${0.15 * bubble.life})`
        ctx.lineWidth = 1
        ctx.stroke()

        return bubble.life > 0
      })

      // Create new bubbles occasionally
      if (Math.random() < 0.02 && bubblesRef.current.length < 20) {
        createBubble()
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  )
}
