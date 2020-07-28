import PropTypes from "prop-types"
import React from "react"
// import { ThemeContext } from "../../providers/ThemeProvider"
import Footer from "../Footer"
import Header from "../Header"
import { Container } from "../Container"
// import { Global } from "./styles"

const Layout = ({ children }) => {
  // const { theme } = useContext(ThemeContext)

  return (
    <>
      {/* <Global theme={theme} /> */}
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
