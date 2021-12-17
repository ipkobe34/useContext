import { createContext, useContext, useState, useMemo } from "react";

export const ThemeContext = createContext();

const defaultState = "light";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultState);

  const value = useMemo(() => {
    console.log('ThemeProvider', theme)
    return {
      theme, setTheme
    }
  }, [theme, setTheme]) ;

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw Error("useTheme required a to be wrapped by ThemeProvider.")
  }
  return context;
}