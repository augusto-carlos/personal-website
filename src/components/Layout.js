import PropTypes from "prop-types"
import { ThemeContext } from "../providers/ThemeProvider"
import React, { useContext, useEffect } from "react"
import goTo from "gatsby-plugin-smoothscroll"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyles } from "../styles/GlobalStyles"

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext)
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
      <GlobalStyles theme={theme} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
