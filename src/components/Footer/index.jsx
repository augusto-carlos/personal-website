import React from "react"
import { GrGithub, GrLinkedin, GrTwitter } from "react-icons/gr"
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
            <GrLinkedin size={20} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/augusto_4real"
            rel="noopener noreferrer"
          >
            <GrTwitter size={20} />
          </a>
          <a
            target="_blank"
            href="https://github.com/augusto-carlos"
            rel="noopener noreferrer"
          >
            <GrGithub size={20} />
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
