import ThemeToggle from "../components/ThemeToggle"
import StarBackground from "../components/StarBackground"

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* theme toggle button at top right */}
      <ThemeToggle />

      {/* background effects */}
      <StarBackground />
      
    </div>
  )
}

export default Home