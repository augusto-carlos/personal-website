import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFound = () => {
  const waringStyles = {
    textAlign: "center",
    width: "40%",
    margin: "20px auto",
    padding: "10px 0",
    borderLeft: "4px solid #f95130",
    backgroundColor: "rgba(0,0,0,.05)",
  }
  return (
    <Layout>
      <SEO title="404 Error" />
      <h4 style={waringStyles}>Página não encontrada</h4>
    </Layout>
  )
}

export default NotFound
