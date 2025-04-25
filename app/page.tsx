import { Github, MapPin, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D9D9D9] pb-24 md:pb-16">
      <header className="sticky top-0 z-40 w-full border-b border-[#2A2A2A] bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-lg font-semibold">coderish</span>
          </div>
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
          </div>
        </div>
      </header>

      <main className="container">
        <section className="flex min-h-[calc(100vh-4rem-4rem)] flex-col items-center justify-center py-12">
          <div className="flex flex-col gap-8 max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-wider uppercase sm:text-6xl md:text-7xl text-white">
              Rishit Singh
            </h1>
            <p className="text-xl text-[#A6A6A6] font-light">
              Building what I find cool. Current obsession is Tinytune.
            </p>
            <div className="flex items-center gap-2 text-[#A6A6A6] justify-center">
              <MapPin className="h-4 w-4" />
              <span>Vancouver, BC</span>
            </div>
            <div className="flex gap-4 mt-4 justify-center">
              <Button
                asChild
                className="group bg-[#505050] hover:bg-[#707070] text-white border-0 uppercase tracking-wider font-medium rounded-none px-6 transition-all duration-150"
              >
                <Link href="/projects">PROJECTS</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="text-[#505050] border-[#505050] hover:bg-[#505050] hover:text-white rounded-none uppercase tracking-wider font-medium transition-all duration-150"
              >
                <a href="https://linkedin.com/in/rishit-singh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
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
              <a href="https://linkedin.com/in/rishit-singh" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
