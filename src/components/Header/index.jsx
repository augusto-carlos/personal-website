import React from "react"
import ToggleTheme from "./ToggleTheme"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Container } from "../Container"
import { Logo, Menu, Wrapper } from "./styles"

const Header = () => {
  return (
    <Wrapper as={Container}>
      <Logo>
        <Link to="/">
          <span>AugustoCarlos</span>
        </Link>
      </Logo>

      <Menu className="menu-header">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/#about">ABOUT</Link>
        </li>
        <li>
          <Link to="/#projects">PORTFOLIO</Link>
        </li>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
        <ToggleTheme />
      </Menu>
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
