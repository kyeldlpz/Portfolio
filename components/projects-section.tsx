"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cloud Infrastructure Project",
    description: "Placeholder for your cloud infrastructure project. Edit to add your actual project details, deployment architecture, and technical implementation.",
    tags: ["AWS", "Cloud Architecture", "Terraform"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/kyeldlpz",
  },
  {
    id: 2,
    title: "Networking Solution",
    description: "Placeholder for networking project. Include network design, implementation details, protocols used, and performance metrics.",
    tags: ["Networking", "Security", "VPC"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/kyeldlpz",
  },
  {
    id: 3,
    title: "Virtualization Setup",
    description: "Placeholder for virtualization project. Describe your hypervisor setup, VM management, resource allocation, and scalability.",
    tags: ["Virtualization", "Containers", "Kubernetes"],
    githubUrl: "https://github.com/kyeldlpz",
  },
  {
    id: 4,
    title: "DevOps Pipeline",
    description: "Placeholder for DevOps project. Detail your CI/CD pipeline, automation tools, deployment strategies, and monitoring setup.",
    tags: ["DevOps", "CI/CD", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/kyeldlpz",
  },
  {
    id: 5,
    title: "Web Application",
    description: "Placeholder for web application. Describe the stack, features, user experience, and technical architecture you implemented.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/kyeldlpz",
  },
  {
    id: 6,
    title: "Security Implementation",
    description: "Placeholder for security project. Detail encryption, authentication, compliance measures, and security best practices applied.",
    tags: ["Security", "Encryption", "Compliance"],
    githubUrl: "https://github.com/kyeldlpz",
  },
]

export function ProjectsSection() {
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

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`space-y-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Section Header */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold">
                <span className="block">Featured</span>
                <span className="block gradient-text-primary">
                  <span className="text-floating">P</span>
                  <span className="text-floating">r</span>
                  <span className="text-floating">o</span>
                  <span className="text-floating">j</span>
                  <span className="text-floating">e</span>
                  <span className="text-floating">c</span>
                  <span className="text-floating">t</span>
                  <span className="text-floating">s</span>
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                A selection of projects showcasing my expertise in cloud infrastructure, networking, and development. Each placeholder can be easily edited to add your real projects.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur gradient-border group glow-animated">
                  <CardContent className="p-6 flex flex-col flex-1 space-y-4 accent-stripe">
                    {/* Project Header */}
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
                        <div className="flex-shrink-0 p-1.5 bg-primary/10 rounded-lg">
                          <ArrowUpRight className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 pt-4 border-t border-border/50">
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="flex-1 group"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            Live
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="flex-1 group"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="pt-8 border-t border-border/50">
            <p className="text-muted-foreground mb-4">
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
            <Button asChild size="lg" className="group gradient-border-animated glow-animated">
              <a href="https://github.com/kyeldlpz" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                View All on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
