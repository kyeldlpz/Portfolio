import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

const usingNow = [
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "VS Code", logo: "/logos/vscode.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
]

const learning = [
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "C++", logo: "/logos/cpp.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "HTML", logo: "/logos/html.svg" },
  { name: "CSS", logo: "/logos/css.svg" },
  { name: "Google Colab", logo: "/logos/colab.svg" },
]

export function TechStack() {
  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Tech Stack & Learning</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools I use daily and technologies I&apos;m actively learning.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Using Now</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {usingNow.map((item) => (
              <Card key={item.name} className="hover:-translate-y-1 hover:shadow-lg transition">
                <CardContent className="p-4 flex items-center gap-3">
                  <Image src={item.logo} alt={`${item.name} logo`} width={32} height={32} />
                  <span className="font-medium">{item.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Currently Learning</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {learning.map((item) => (
              <Card key={item.name} className="hover:-translate-y-1 hover:shadow-lg transition">
                <CardContent className="p-4 flex items-center gap-3">
                  <Image src={item.logo} alt={`${item.name} logo`} width={32} height={32} />
                  <span className="font-medium">{item.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

