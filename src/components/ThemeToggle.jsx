import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from "react"
import { cNames } from '../lib/utils.js'

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  //next time the page will be in dark mode if closed in dark mode
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
    }
  }, [])

  // button clicking event
  const toggleTheme = () => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    } else {
      localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }
  }

  return (
    <button onClick={toggleTheme} className={cNames('fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300',
      'focus:outlin-hidden')
    } > { isDarkMode ? 
      <Sun className='h-6 w-6 text-yellow-300'/> : 
      <Moon className='h-6 w-6 text-blue-900'/> } 
    </button>
  )
}