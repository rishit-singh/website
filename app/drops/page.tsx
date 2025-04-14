import { Terminal, Code, Cpu, Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { XLogo } from "@/components/ui/x-logo"

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: JSX.Element;
}

export default function DropsPage() {
  const projects = [
    {
      id: "tinytune",
      title: "tinytune",
      description: "A lightweight library for making AI agents",
      tags: ["Python", "AI", "Machine Learning"],
      icon: <Terminal className="h-5 w-5" />,
    },
    {
      id: "yapnote",
      title: "YapNote",
      description: "An AI meeting summarizer",
      tags: ["TypeScript", "AI", "NLP"],
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: "cacoengine",
      title: "CacoEngine",
      description: "Simple graphics engine based on SDL",
      tags: ["C++", "Graphics", "SDL"],
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      id: "glengine",
      title: "GLEngine",
      description: "General purpose graphics engine based on OpenGL",
      tags: ["C++", "OpenGL", "Graphics"],
      icon: <Cpu className="h-5 w-5" />,
    },
    {
      id: "restuner",
      title: "Restuner",
      description: "LLM based resume tuner",
      tags: ["TypeScript", "LLM", "AI"],
      icon: <Code className="h-5 w-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D9D9D9] pb-24 md:pb-16">
      <header className="sticky top-0 z-40 w-full border-b border-[#2A2A2A] bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-mono text-lg font-semibold">coderish</span>
            </Link>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#505050]"
            >
              Home
            </Link>
            <Link
              href="/drops"
              className="text-sm font-medium tracking-wide uppercase transition-colors text-[#505050]"
            >
              Drops
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-[#D9D9D9] hover:text-[#505050] hover:bg-transparent"
            >
              <a href="https://github.com/rishit-singh" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-[#D9D9D9] hover:text-[#505050] hover:bg-transparent"
            >
              <a href="https://x.com/__coderish__" target="_blank" rel="noopener noreferrer">
                <XLogo className="h-5 w-5" />
                <span className="sr-only">X</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-widest uppercase text-white">DROPS</h1>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-12 mx-auto flex justify-center bg-[#1A1A1A] p-1 rounded-none border border-[#2A2A2A]">
            <TabsTrigger
              value="all"
              className="uppercase tracking-wider text-xs rounded-none data-[state=active]:bg-[#505050] data-[state=active]:text-white"
            >
              ALL DROPS
            </TabsTrigger>
            <TabsTrigger
              value="ai"
              className="uppercase tracking-wider text-xs rounded-none data-[state=active]:bg-[#505050] data-[state=active]:text-white"
            >
              AI & ML
            </TabsTrigger>
            <TabsTrigger
              value="graphics"
              className="uppercase tracking-wider text-xs rounded-none data-[state=active]:bg-[#505050] data-[state=active]:text-white"
            >
              GRAPHICS
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="ai" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((p) => p.tags.some((tag) => ["AI", "LLM", "NLP"].includes(tag)))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="graphics" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((p) => p.tags.includes("Graphics"))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-30 border-t border-[#2A2A2A] bg-[#0A0A0A]">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-16 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-[#A6A6A6] md:text-left font-mono">
              © {new Date().getFullYear()} Rishit Singh
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-[#A6A6A6] hover:text-[#505050] hover:bg-transparent"
            >
              <a href="https://github.com/rishit-singh" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-[#A6A6A6] hover:text-[#505050] hover:bg-transparent"
            >
              <a href="https://x.com/__coderish__" target="_blank" rel="noopener noreferrer">
                <XLogo className="h-5 w-5" />
                <span className="sr-only">X</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden transition-all hover:border-[#505050] bg-[#1A1A1A] border-[#2A2A2A] rounded-none">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="rounded-none bg-[#2A2A2A] p-2 text-[#505050]">{project.icon}</div>
        <div>
          <CardTitle className="text-xl font-mono uppercase tracking-wide">{project.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <CardDescription className="text-base text-[#A6A6A6]">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 pt-2">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="font-mono text-xs rounded-none border-[#2A2A2A] text-[#A6A6A6] uppercase"
          >
            {tag}
          </Badge>
        ))}
      </CardFooter>
      <div className="flex items-center justify-end gap-2 p-4 pt-0">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-1 text-[#A6A6A6] hover:text-[#505050] hover:bg-transparent rounded-none"
          asChild
        >
          <a href={`https://github.com/rishit-singh/${project.id}`} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            <span className="uppercase text-xs tracking-wider">Code</span>
          </a>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-1 text-[#A6A6A6] hover:text-[#505050] hover:bg-transparent rounded-none"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="uppercase text-xs tracking-wider">Demo</span>
        </Button>
      </div>
    </Card>
  )
}
