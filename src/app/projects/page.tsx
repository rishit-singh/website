import { Link } from "react-router-dom"
import { Terminal } from 'lucide-react'

import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      name: "tinytune",
      description: "A lightweight library for making AI agents",
      link: "https://github.com/rishit-singh/tinytune",
      badges: ["Python", "AI", "Machine Learning"]
    },
    {
      name: "CacoEngine",
      description: "Simple graphics engine based on SDL",
      link: "https://github.com/rishit-singh/CacoEngine",
      badges: ["C++", "Graphics", "SDL"]
    },
    {
      name: "GLEngine",
      description: "General purpose graphics engine based on OpenGL",
      link: "https://github.com/rishit-singh/GLEngine",
      badges: ["C++", "OpenGL", "Graphics"]
    },
    {
      name: "Restuner",
      description: "LLM based resume tuner",
      link: "https://github.com/rishit-singh/Restuner",
      badges: ["TypeScript", "LLM", "AI"]
    },
    {
      name: "SharpSession",
      description: "Web session manager written in C#",
      link: "https://github.com/rishit-singh/SharpSession",
      badges: ["C#", ".NET", "Web"]
    },
    {
      name: "KeyMan",
      description: "General purpose API key manager",
      link: "https://github.com/rishit-singh/KeyMan",
      badges: ["C#", "API", "Security"]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 py-4">
        <MainNav />
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.name} to={project.link} className="block transition-transform hover:scale-105">
              <Card className="cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Terminal className="w-5 h-5" />
                    {project.name}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <Badge key={badge} variant="outline">{badge}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© 2024 Rishit Singh. All rights reserved.</p>
      </footer>
    </div>
  )
}

