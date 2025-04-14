import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#D9D9D9] flex flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-6xl font-bold tracking-wider uppercase text-white">404</h1>
        <p className="text-xl text-[#A6A6A6]">Page not found</p>
        <Link 
          href="/"
          className="bg-[#505050] hover:bg-[#707070] text-white px-6 py-3 uppercase tracking-wider font-medium transition-all duration-150"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
} 