import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"

const Blog = () => {
  const waringStyles = {
    textAlign: "center",
    width: "40%",
    margin: "20px auto",
    padding: "10px 0",
    borderLeft: "4px solid #099",
    backgroundColor: "rgba(0,0,0,.05)",
  }
  return (
    <Layout>
      <SEO title="Blog" />
      <h4 style={waringStyles}>Nenhum artigo escrito ainda</h4>
    </Layout>
  )
}

export default Blog
