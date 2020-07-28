import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Wrapper, MyImage } from "./styles"

export default function Home() {
  const { me } = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 270, height: 270) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <MyImage>
        <Img
          fixed={me.childImageSharp.fixed}
          alt="augusto carlos"
          style={{ overflow: "inherit" }}
        />
      </MyImage>

      <h2>Hi, i'm Carlos.</h2>
      <p>
        An <b>web developer</b> who is always learning around there! Writing
        apps with <b>React/React Native, Node.js and Flutter</b>.
      </p>
    </Wrapper>
  )
}
