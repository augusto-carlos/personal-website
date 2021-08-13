import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { GrGithub, GrLinkedin, GrTwitter } from "react-icons/gr"
import { Avatar, Social, MobileHeader, Menu, Wrapper, Name } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Nav = () => {
  const { me } = useStaticQuery(graphql`
    query {
      me: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <>
      <MobileHeader>
        <Name>
          <Link to="/">Augusto da Silva</Link>
        </Name>
        <Menu className="menu-header">
          <li>
            <Link to="/#about">ABOUT</Link>
          </li>
          <li>
            <Link to="/#projects">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/#services">SERVICES</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
        </Menu>
      </MobileHeader>
      <Wrapper>
        <header>
          <Avatar>
            <Img
              fixed={me.childImageSharp.fixed}
              alt="augusto da silva"
              style={{ overflow: "inherit" }}
            />
          </Avatar>
          <Name>
            <Link to="/">Augusto da Silva</Link>
          </Name>
        </header>

        <Menu className="menu-header">
          <li>
            <Link to="/#about">ABOUT</Link>
          </li>
          <li>
            <Link to="/#projects">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/#services">SERVICES</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
        </Menu>

        <Social>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/augusto-carlos96/"
            rel="noopener noreferrer"
          >
            <GrLinkedin size={20} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/carllos_4real"
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
        </Social>
      </Wrapper>
    </>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
