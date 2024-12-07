import { Link } from "react-router-dom"
import { Github, MapPin, Terminal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { XLogo } from "@/components/x-logo"

export default function Home() {
  const projects = [
    {
      name: "tinytune",
      description: "A lightweight library for making AI agents",
      link: "https://github.com/rishit-singh/tinytune",
      badges: ["Python", "AI", "Machine Learning"]
    },
    {
      name: "YapNote",
      description: "An AI meeting summarizer",
      link: "https://github.com/rishit-singh/YapNote",
      badges: ["TypeScript", "AI", "NLP"]
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
    }
  ]

  const skills = [
    "C++", "Python", "TypeScript", "C#", "OpenGL", "SDL", "AI/ML",
    "Graphics Programming", "Web Development"
  ]

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="mr-4 hidden md:flex">
            <Link to="/" className="ml-4 mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">
                Rishit Singh
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <button
                onClick={() => scrollToSection('about')}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Skills
              </button>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" size="icon" asChild>
                <Link to="https://github.com/rishit-singh">
                  <Github className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
            <Button variant="outline" size="icon" asChild>
              <Link to="https://twitter.com/__coderish__">
                <XLogo className="h-[1.2rem] w-[1.2rem] fill-current" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <section id="about" className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src="/img.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold">Rishit Singh</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Building what I find cool. Current obsession is Tinytune.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Vancouver, BC</span>
            </div>
          </div>
        </section>

        <section id="projects" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
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
        </section>

        <section id="skills" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {skills.map((skill) => (
              <Badge key={skill} className="text-lg py-2 px-4">{skill}</Badge>
            ))}
          </div>
        </section>
      </main>
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© 2024 Rishit Singh. All rights reserved.</p>
      </footer>
    </div>
  )
}

