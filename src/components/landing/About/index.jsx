import React from "react"
import { FiInstagram } from "react-icons/fi"
import { Container } from "../../Container"
import { Wrapper, Bio } from "./styles"

export default function About() {
  return (
    <>
      <Wrapper id="about" as={Container}>
        <Bio>
          <h3>About me</h3>
          <h4>Full stack developer</h4>
          <p>
            Hello, my name is Augusto da Silva, I'm a web
            developer , computer science student and a technology enthusiast
            around the programming universe with a focus on the web.
          </p>
          <p>
            My current choice of tools and languages is trending toward
            Typescript(Node/Angular), ReactJS, and Flutter. My fields of
            interest and domain knowledge span Web services, SEO and UI/UX
            Design.
          </p>
          <p>
            Security, innovation and creativity are what drive me while i'm
            writting apps⚡. In addition to programming, I really like books and
            music, and sometimes drawing to pass the time.
          </p>
          <a
            target="_blank"
            href="https://www.instagram.com/augustocarlos_96/"
            rel="noopener noreferrer"
          >
            <FiInstagram size={24} />
          </a>
        </Bio>
      </Wrapper>
    </>
  )
}
