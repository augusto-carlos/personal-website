import React from "react"
import { Wrapper } from "./styles"
import { Container } from "../../Container"

export default function Intro() {
  return (
    <Wrapper as={Container}>
      <p className="warning">No articles 🚶</p>
    </Wrapper>
  )
}
