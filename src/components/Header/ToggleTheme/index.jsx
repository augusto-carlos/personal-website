import React, { useContext } from "react"
import { ThemeContext } from "../../../providers/ThemeProvider"
import { Wrapper } from "./styles"
import sunIcon from "../../../assets/sun.svg"
import moonIcon from "../../../assets/moon.svg"

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img
        src={theme.name === "light" ? moonIcon : sunIcon}
        alt="toogle theme"
      />
    </Wrapper>
  )
}

export default ToggleTheme
