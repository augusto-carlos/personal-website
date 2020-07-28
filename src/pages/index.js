import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Intro from "../components/landing/Intro"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
    </Layout>
  )
}
