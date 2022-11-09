import React, { useState, createContext, ReactNode } from "react";

interface ThemeContext{
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<string>>

}

interface Props{
  children: ReactNode,
}

const DEFAULT_VALUE = {
  theme: 'light',
  setTheme: () => {}
}

export const ThemeContext = createContext<ThemeContext>(DEFAULT_VALUE)
ThemeContext.displayName = 'theme'

export const ThemeProvider = ({children}: Props) => {
  const [theme, setTheme] = useState("light");
  return(
    <ThemeContext.Provider value={{theme, setTheme}} >
      {children}
    </ThemeContext.Provider>
  )
}