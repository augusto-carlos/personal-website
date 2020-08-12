import React from "react"
import { FiInstagram, FiTwitter } from "react-icons/fi"
import { Container } from "../../Container"
import { Wrapper, Bio, Image } from "./styles"
import MyImage from "../../../assets/me-about.png"

export default function About() {
  return (
    <>
      <Wrapper id="about" as={Container}>
        <Bio>
          <h2>About me</h2>
          <p>
            My name is Augusto Carlos Pereira da Silva, I'm a web developer ,
            computer science student and a technology enthusiast around the
            programming universe with a focus on the web.
          </p>
          <p>
            My current choice of tools and languages is trending toward
            Typescript(Node/ReactJS), Go and Flutter. My fields of interest and
            domain knowledge span networking, infrastructure and security.
          </p>
          <p>
            Innovation and creativity are what drive me while i'm writting
            apps⚡. In addition to programming, I really like books and music,
            and sometimes drawing to pass the time.
          </p>
          <a
            target="_blank"
            href="https://www.instagram.com/augustocarlos_96/"
            rel="noopener noreferrer"
          >
            <FiInstagram size={24} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/augusto_4real"
            rel="noopener noreferrer"
          >
            <FiTwitter size={24} />
          </a>
        </Bio>
        <Image>
          <img src={MyImage} alt="carlos" />
        </Image>
      </Wrapper>
    </>
  )
}
