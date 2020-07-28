import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Wrapper, MyImage } from "./styles"
import Image from "../../../images/developer.jpg"

export default function Home() {
  const { ImageDev } = useStaticQuery(graphql`
    query {
      Image: file(relativePath: { eq: "developer.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 270, maxHeight: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <MyImage>
        <ImageDev alt="augusto carlos" />
      </MyImage>
      <h2>Hi, i'm Carlos.</h2>
      <p>
        An <b>web developer</b> who is always learning around there! Writing
        apps with <b>React/React Native, Node.js and Flutter</b>.
      </p>
    </Wrapper>
  )
}
