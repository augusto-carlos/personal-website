import React from "react"
import SEO from "../../components/seo"
import Posts from "../../components/landing/Posts"
import Layout from "../../components/Layout"

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Posts />
    </Layout>
  )
}

export default Blog
