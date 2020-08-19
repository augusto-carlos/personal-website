import React from "react"
import Container from "../../Container"
import { Wrapper } from "./styles"

function Posts() {
  return (
    <>
      <Wrapper as={Container}>
        <p className="warning">No articles 🚶</p>
      </Wrapper>
    </>
  )
}

export default Posts
