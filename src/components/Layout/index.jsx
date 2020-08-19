import PropTypes from "prop-types"
import React, { useEffect } from "react"
import goTo from "gatsby-plugin-smoothscroll"
import Nav from "../Nav"
import Bar from "../Bar"
import { GlobalStyles } from "../../styles/global"
import { Content } from "./styles.js"

const Layout = ({ children }) => {
  useEffect(() => {
    const internalLinks = document.querySelectorAll(
      "a.internal, .menu-header a[href^='/#']"
    )
    internalLinks.forEach(link => link.addEventListener("click", scrollTo))

    function scrollTo(e) {
      e.preventDefault()
      const section = e.target.getAttribute("href")
      goTo(section.slice(1))
    }
  }, [])

  return (
    <>
      <GlobalStyles />
      <Nav />
      <Content>{children}</Content>
      <Bar />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
