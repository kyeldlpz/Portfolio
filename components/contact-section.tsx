"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export function ContactSection() {
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
    <section ref={ref} id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="block">Get In</span>
              <span className="block gradient-text-primary">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a conversation about cloud
              technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`} style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Contact Information</h3>

                <div className="space-y-4">
                  <Card className="hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <a
                            href="mailto:kzyrellyan@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            kzyrellyan@gmail.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Phone</p>
                          <a
                            href="tel:+639974431161"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            +63 997 443 1161
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-muted-foreground">1434 Crisostomo Street, Sampaloc, Manila</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Connect With Me</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="lg" asChild className="group">
                    <a href="mailto:kzyrellyan@gmail.com">
                      <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Email Me
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="group">
                    <a href="https://www.linkedin.com/in/kzyrell-dela-paz-b04395351/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="group">
                    <a href="https://github.com/kyeldlpz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`} style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}>
              <Card className="hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold">Let's Work Together</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm currently seeking opportunities in cloud engineering, infrastructure development, and software
                    engineering roles. Whether you're looking for an intern, entry-level engineer, or just want to
                    discuss cloud technologies, I'd love to hear from you.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold">What I'm Looking For:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Cloud Engineering Internships
                      </li>
                      <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Software Development Opportunities
                      </li>
                      <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Technical Mentorship
                      </li>
                      <li className="flex items-center gap-2 hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        Collaborative Projects
                      </li>
                    </ul>
                  </div>

                  <Button size="lg" className="w-full group gradient-border-animated glow-animated" asChild>
                    <a href="mailto:kzyrellyan@gmail.com?subject=Opportunity Discussion">
                      Start a Conversation
                      <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
