import React from "react"
import { TiVendorApple, TiVendorAndroid } from "react-icons/ti"
import { GoBrowser } from "react-icons/go"
import { Container } from "../../Container"
import { Wrapper, Phone, Desktop, ProjectContainer } from "./styles"

export default function Portfolio() {
  return (
    <>
      <Wrapper id="projects">
        <Container>
          <ProjectContainer>
            <section>
              <Phone>
                <div className="screen">
                  <span></span>
                  <div
                    data-sal="slide-up"
                    data-sal-delay="110"
                    data-sal-easing="fade"
                    className="screen-content"
                  >
                    <div>
                      <TiVendorAndroid size={60} color="#666" />
                      <TiVendorApple size={60} color="#666" />
                    </div>
                    <p>cross platform</p>
                  </div>
                  <i></i>
                </div>
              </Phone>
              <div className="desc">
                <h3>Mobile Apps</h3>
                <p>Some of my apps developed using Flutter and React Native.</p>
                <button>All projects</button>
              </div>
            </section>
            <section>
              <div className="desc">
                <h3>Websites</h3>
                <p>
                  Websites that i've made using NextJS, GatsbyJS, ReactJS and
                  other frontend technologies.
                </p>
                <button>All projects</button>
              </div>
              <Desktop>
                <div className="display">
                  <div className="screen">
                    <span></span>
                    <div
                      data-sal="slide-up"
                      data-sal-delay="110"
                      data-sal-easing="fade"
                      className="screen-content"
                    >
                      <div>
                        <GoBrowser size={60} color="#666" />
                      </div>
                      <p>Websites</p>
                    </div>
                    <i></i>
                  </div>
                </div>
                <div className="base"></div>
              </Desktop>
            </section>
          </ProjectContainer>
        </Container>
      </Wrapper>
    </>
  )
}
