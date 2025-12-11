import Image from "next/image"

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
                      <Image
                        src="/logos/plm.svg"
                        alt="Pamantasan ng Lungsod ng Maynila logo"
                        width={32}
                        height={32}
                        className="rounded-sm"
                      />
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
                      <Image
                        src="/logos/pup.svg"
                        alt="Polytechnic University of the Philippines logo"
                        width={32}
                        height={32}
                        className="rounded-sm"
                      />
                      <div className="space-y-2">
                        <h4 className="font-semibold">Senior High School (STEM)</h4>
                        <p className="text-muted-foreground">
                          Polytechnic University of the Philippines — Graduated with Honors
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>2020 – 2022</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Image
                        src="/logos/ramon.svg"
                        alt="Ramon Magsaysay High School logo"
                        width={32}
                        height={32}
                        className="rounded-sm"
                      />
                      <div className="space-y-2">
                        <h4 className="font-semibold">Junior High School</h4>
                        <p className="text-muted-foreground">Ramon Magsaysay High School</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>2016 – 2020</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
