import React, { useEffect } from "react"
import ThemeProvider from "../src/providers/ThemeProvider"
import Layout from "../src/components/Layout"

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider>
      <Layout>{element}</Layout>
    </ThemeProvider>
  )
}
