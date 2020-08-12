import React from "react"
import SEO from "../components/seo"
import Intro from "../components/landing/Intro"
import Portfolio from "../components/landing/Portfolio"
import About from "../components/landing/About"

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <Intro />
      <About />
      <Portfolio />
    </>
  )
}
