import { MainNav } from "@/components/main-nav"
import { Badge } from "@/components/ui/badge"

export default function SkillsPage() {
  const skills = [
    "C++", "Python", "TypeScript", "C#", "OpenGL", "SDL", "AI/ML",
    "Graphics Programming", "Web Development"
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 py-4">
        <MainNav />
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Skills & Technologies</h1>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <Badge key={skill} className="text-lg py-2 px-4">{skill}</Badge>
          ))}
        </div>
      </main>
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© 2024 Rishit Singh. All rights reserved.</p>
      </footer>
    </div>
  )
}

