import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate Computer Engineering student that wants to specialize in cloud technologies and infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Background</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing a Bachelor of Science in Computer Engineering at Pamantasan ng Lungsod ng Maynila,
                with an expected graduation in 2026. I have a strong academic foundation and currently exploring and learning
                cloud infrastructure, virtualization, and networking technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My passion lies in exploring the development of scalable cloud solutions and staying current with emerging technologies in
                the rapidly evolving IT landscape. I'm committed to continuous learning and contributing to innovative
                projects that make a real impact.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Education</h3>
              <div className="space-y-4">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                        <a href="/logos/plm.svg" target="_blank" rel="noopener noreferrer">
                          <img
                            src="/logos/plm.svg"
                            alt="PLM Logo"
                            width={48}
                            height={48}
                            className="object-contain w-12 h-12 hover:opacity-80 transition-opacity cursor-pointer"
                          />
                        </a>
                      </div>
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

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 relative">
                        <Image
                          src="/logos/pup.svg"
                          alt="PUP Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">STEM - Science, Technology, Engineering, and Mathematics</h4>
                        <p className="text-muted-foreground">Polytechnic University of the Philippines</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>2020-2022</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 relative">
                        <Image
                          src="/logos/ramon.svg"
                          alt="Ramon Magsaysay Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">High School Diploma</h4>
                        <p className="text-muted-foreground">Ramon Magsaysay High School</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>2016-2020</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Tech Stack</h3>
            <p className="text-muted-foreground">
              Technologies and tools I'm currently learning and working with.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logos/aws.svg"
                      alt="AWS"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center">AWS</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logos/colab.svg"
                      alt="Google Colab"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center">Google Colab</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logos/vscode.svg"
                      alt="vscode"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center">Visual Studio Code</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logos/cursor.svg"
                      alt="cursor"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center">Cursor</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logos/github.svg"
                      alt="GitHub"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center">GitHub</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logos/html.svg"
                      alt="HTML"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center">HTML</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logos/css.svg"
                      alt="CSS"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center">CSS</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logos/python.svg"
                      alt="python"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center">Python</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logos/typescript.svg"
                      alt="Typescript"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center">TypeScript</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-3">
                  <div className="w-16 h-16 relative">
                    <Image
                      src="/logos/c++.svg"
                      alt="c++"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-center">C++</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
