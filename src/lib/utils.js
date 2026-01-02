import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export const cNames = (...inputs) => {
  return twMerge(clsx(inputs))
}

// a function to pass a list of class names (tailwindcss)
// cNames("classnames here")
// see ThemeToggle.jsx