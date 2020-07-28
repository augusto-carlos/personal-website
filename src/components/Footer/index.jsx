import React from "react"
import { GrGithub, GrLinkedin } from "react-icons/gr"
import { SocialIcons, Wrapper } from "./styles"
import { Container } from "../Container"

function Footer() {
  return (
    <Wrapper>
      <Container>
        <SocialIcons>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/augusto-carlos96/"
            rel="noopener noreferrer"
          >
            <GrLinkedin size={30} />
          </a>
          <a
            target="_blank"
            href="https://github.com/augusto-carlos"
            rel="noopener noreferrer"
          >
            <GrGithub size={30} />
          </a>
        </SocialIcons>
        © {new Date().getFullYear()}, Built with 💖 by{" "}
        <a
          href="https://github.com/augusto-carlos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Augusto Carlos
        </a>
      </Container>
    </Wrapper>
  )
}

export default Footer
