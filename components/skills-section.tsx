"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Code, Wrench } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const skillCategories = [
    {
      title: "Cloud Infrastructure",
      icon: Cloud,
      skills: ["AWS Services", "Cloud Architecture", "Virtualization", "Networking", "Security"],
      description: "Currently learning cloud architecture and infrastructure design",
    },
    {
      title: "Software Development",
      icon: Code,
      skills: ["HTML", "CSS", "Python", "TypeScript"],
      description: "Creating robust applications and systems",
    },
    {
      title: "Problem Solving",
      icon: Wrench,
      skills: ["System Analysis", "Troubleshooting", "Performance Optimization", "Documentation"],
      description: "Analytical thinking and solution implementation",
    },
  ]

  return (
    <section ref={ref} id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 gradient-overlay-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="block">Skills &</span>
              <span className="block gradient-text-primary">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical skills and competencies I've developed through education and hands-on experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                  }}
                >
                  <Card className="h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50 group">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                      </div>

                      <p className="text-muted-foreground text-sm">{category.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}>
            <h3 className="text-2xl font-semibold text-center">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6 text-center space-y-3">
                  <h4 className="font-semibold text-primary">Problem-Solving</h4>
                  <p className="text-muted-foreground text-sm">
                    Analytical approach to identifying and resolving complex technical challenges
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6 text-center space-y-3">
                  <h4 className="font-semibold text-primary">Software Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Building efficient, maintainable applications using modern development practices
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-6 text-center space-y-3">
                  <h4 className="font-semibold text-primary">Cloud Infrastructure</h4>
                  <p className="text-muted-foreground text-sm">
                    Designing and implementing scalable cloud solutions and architectures
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
