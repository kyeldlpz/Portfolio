"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award } from "lucide-react"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"

export function ExperienceSection() {
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
    <section ref={ref} id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="block">Affiliations &</span>
              <span className="block gradient-text-primary">Organizations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in cloud technologies and community involvement.
            </p>
          </div>

          <div className="space-y-8">
            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`} style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}>
              <Card className="hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300">
                        <div className="w-10 h-10 relative">
                          <Image
                            src="/logos/cloudclub.svg"
                            alt="AWS Cloud Club"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">AWS Cloud Club - Cloud and Infrastructure Associate</h3>
                        <p className="text-primary font-medium">Cloud Infrastructure Associate</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Current</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        Specializing in cloud infrastructure and architecture, attending workshops and training by by hands-on that is guided by leads and mentors.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">AWS Services</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Cloud Architecture</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Infrastructure Design</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`} style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}>
              <Card className="hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur border-border/50">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300">
                        <div className="w-10 h-10 relative">
                          <Image
                            src="/logos/cloudclub.svg"
                            alt="AWS Cloud Club"
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">AWS Cloud Club - Haribon Member</h3>
                        <p className="text-primary font-medium">Active Community Member</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Current</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        Active participant in AWS Cloud Club activities, engaging in cloud technology discussions,
                        workshops, and learning sessions. Contributing to the community's knowledge sharing and
                        collaborative learning environment.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">AWS Services</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Cloud Architecture</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Community Engagement</Badge>
                        <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Knowledge Sharing</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center">
                      <div className="w-10 h-10 relative">
                        <Image
                          src="/logos/cloudclub.svg"
                          alt="AWS Cloud Club"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">AWS Cloud Club - Logistics Volunteer</h3>
                      <p className="text-primary font-medium">Event Coordination & Support</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>Current</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      Volunteer coordinator responsible for organizing events, workshops, and community activities.
                      Managing logistics, coordinating with speakers, and ensuring smooth execution of educational
                      programs for club members.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Event Management</Badge>
                      <Badge variant="secondary">Team Coordination</Badge>
                      <Badge variant="secondary">Project Planning</Badge>
                      <Badge variant="secondary">Leadership</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Academic Projects & Learning</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-semibold text-primary">Cloud Infrastructure Studies</h4>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive study of cloud computing principles, virtualization technologies, and distributed
                    systems architecture through academic coursework through video courses in AWS Skill Builder and AWS Educate.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Virtualization
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Networking
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Security
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Cloud Computing
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Amazon Web Services (AWS)
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h4 className="font-semibold text-primary">Software Development Projects</h4>
                  <p className="text-muted-foreground text-sm">
                    Hands-on experience building applications and systems as part of Computer Engineering curriculum,
                    Honestly, not really an expert when it comes to software development but I'm trying to learn and improve my skills.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Programming
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      System Design
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Testing
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
