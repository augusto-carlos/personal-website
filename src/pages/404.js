import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"

const NotFound = () => {
  const waringStyles = {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
  }
  return (
    <Layout>
      <SEO title="404 Error" />
      <div style={waringStyles}>
        <h4>Página não encontrada</h4>
      </div>
    </Layout>
  )
}

export default NotFound
