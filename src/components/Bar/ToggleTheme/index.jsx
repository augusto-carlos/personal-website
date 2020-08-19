import React, { useState, useEffect } from "react"
import { Wrapper } from "./styles"
import sunIcon from "../../../assets/sun.svg"
import moonIcon from "../../../assets/moon.svg"

const ToggleTheme = () => {
  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === "dark"

  useEffect(() => {
    setTheme(window.__theme)

    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <Wrapper
      type="button"
      onClick={() => {
        window.__setPreferredTheme(isDarkMode ? "light" : "dark")
      }}
      title="Mudar o tema"
    >
      {isDarkMode ? (
        <img src={sunIcon} alt="toogle theme" />
      ) : (
        <img src={moonIcon} alt="toogle theme" />
      )}
    </Wrapper>
  )
}

export default ToggleTheme
