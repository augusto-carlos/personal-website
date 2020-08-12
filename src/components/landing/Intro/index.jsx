import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FiChevronsDown } from "react-icons/fi"
import { Wrapper, MyImage, Bio } from "./styles"
import { Container } from "../../Container"

export default function Intro() {
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
      <Container>
        <MyImage>
          <Img
            fixed={me.childImageSharp.fixed}
            alt="augusto carlos"
            style={{ overflow: "inherit" }}
          />
        </MyImage>

        <Bio>
          <h1>Hi, i'm Carlos.</h1>
          <p>
            A <b>web developer</b> who is always evolving out there! Writing
            applications with <b>Typescript, React.js and Flutter.</b>
          </p>
          <button>CONTACT</button>
        </Bio>
      </Container>
      <a href="/#about" className="internal">
        <FiChevronsDown className="mouse" color="#099" size={20} />
      </a>
    </Wrapper>
  )
}
