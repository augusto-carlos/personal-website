import React, { useState, createContext } from "react"
import themes from "../styles/theme"

export const ThemeContext = createContext(themes.light)

export default ({ children }) => {
  //Must reorgnize it
  const { light, dark } = themes

  const storagedTheme =
    localStorage.getItem("1sfrr23_theme") === "dark" ? dark : light

  const [theme, setTheme] = useState(storagedTheme)

  function toggleTheme() {
    setTheme(theme.name === "light" ? dark : light)
    localStorage.setItem(
      "1sfrr23_theme",
      theme.name === "light" ? "dark" : "light"
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
