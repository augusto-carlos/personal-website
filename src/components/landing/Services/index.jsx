import React from "react"
import { Wrapper } from "./styles"
import ImageMobile from "../../../assets/mobile.svg"
import ImageFront from "../../../assets/frontend.svg"
import ImageServer from "../../../assets/backend.svg"

function Services() {
  return (
    <>
      <Wrapper id="services">
        <section>
          <div
            className="img-container"
            data-sal="slide-up"
            data-sal-delay="110"
            data-sal-easing="fade"
          >
            <img src={ImageServer} alt="" />
          </div>
          <h2>Backend</h2>
          <p>
            Developing API's using Typescript and other technology for any
            frontend.
          </p>
        </section>
        <section>
          <div
            className="img-container"
            data-sal="slide-up"
            data-sal-delay="120"
            data-sal-easing="fade"
          >
            <img src={ImageMobile} alt="" />
          </div>
          <h2>Mobile</h2>
          <p>Creating beautiful mobile apps for Android and IOS devices.</p>
        </section>
        <section>
          <div
            className="img-container"
            data-sal="slide-up"
            data-sal-delay="130"
            data-sal-easing="fade"
          >
            <img src={ImageFront} alt="" />
          </div>
          <h2>Frontend</h2>
          <p>Building modern and responsive websites using frontend tools.</p>
        </section>
      </Wrapper>
    </>
  )
}

export default Services
