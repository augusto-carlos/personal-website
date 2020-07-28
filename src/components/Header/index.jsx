import React, { useState } from "react"
import ToggleTheme from "./ToggleTheme"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Container } from "../Container"
// Global shouldnt be taken from here
import { Logo, Menu, Wrapper, Global } from "./styles"

const Header = () => {
  const [theme, setTheme] = useState("light")

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Wrapper as={Container}>
      <Global theme={theme} />
      <Logo>
        <Link to="/">
          <span>AugustoCarlos</span>
        </Link>
      </Logo>

      <Menu>
        <li>
          <Link to="/#services">Services</Link>
        </li>
        <li>
          <Link to="/#projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </Menu>

      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
