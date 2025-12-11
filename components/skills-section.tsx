import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Code, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Cloud Infrastructure",
      icon: Cloud,
      skills: ["AWS Services", "Cloud Architecture", "Virtualization", "Networking", "Security"],
      description: "Building scalable and secure cloud solutions",
    },
    {
      title: "Software Development",
      icon: Code,
      skills: ["Python", "JavaScript", "React", "Node.js", "Database Design"],
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technical skills and competencies I've developed through education and hands-on experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>

                    <p className="text-muted-foreground text-sm">{category.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <h4 className="font-semibold text-primary">Problem-Solving</h4>
                  <p className="text-muted-foreground text-sm">
                    Analytical approach to identifying and resolving complex technical challenges
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center space-y-3">
                  <h4 className="font-semibold text-primary">Software Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Building efficient, maintainable applications using modern development practices
                  </p>
                </CardContent>
              </Card>
              <Card>
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
