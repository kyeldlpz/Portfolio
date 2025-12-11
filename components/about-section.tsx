import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate Computer Engineering student specializing in cloud technologies and infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing a Bachelor of Science in Computer Engineering at Pamantasan ng Lungsod ng Maynila,
                with an expected graduation in 2026. I have a strong academic foundation and practical experience in
                cloud infrastructure, virtualization, and networking technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My passion lies in developing scalable cloud solutions and staying current with emerging technologies in
                the rapidly evolving IT landscape. I'm committed to continuous learning and contributing to innovative
                projects that make a real impact.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Education</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <GraduationCap className="w-6 h-6 text-primary mt-1" />
                      <div className="space-y-2">
                        <h4 className="font-semibold">Bachelor of Science in Computer Engineering</h4>
                        <p className="text-muted-foreground">Pamantasan ng Lungsod ng Maynila</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Expected 2026</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <GraduationCap className="w-6 h-6 text-primary mt-1" />
                      <div className="space-y-2">
                        <h4 className="font-semibold">High School Diploma</h4>
                        <p className="text-muted-foreground">Ramon Magsaysay High School</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>2020</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Affiliations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary">AWS Cloud Club - Haribon Member</h4>
                  <p className="text-muted-foreground mt-2">
                    Active member of the AWS Cloud Club, participating in cloud technology discussions and learning
                    initiatives.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary">AWS Cloud Club - Logistics Volunteer</h4>
                  <p className="text-muted-foreground mt-2">
                    Volunteer coordinator helping organize events and workshops for the AWS Cloud Club community.
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
