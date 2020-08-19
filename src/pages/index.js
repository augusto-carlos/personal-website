import React from "react"
import SEO from "../components/seo"
import Portfolio from "../components/landing/Portfolio"
import About from "../components/landing/About"
import Services from "../components/landing/Services"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <About />
      <Portfolio />
      <Services />
    </Layout>
  )
}
