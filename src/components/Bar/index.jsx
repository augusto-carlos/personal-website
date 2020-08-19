import React from "react"
import ToggleTheme from "./ToggleTheme"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FaHome } from "react-icons/fa"
import { Wrapper } from "./styles"

const Bar = () => {
  return (
    <>
      <Wrapper>
        <Link to="/">
          <FaHome size={25} />
        </Link>
        <ToggleTheme />
      </Wrapper>
    </>
  )
}

Bar.propTypes = {
  siteTitle: PropTypes.string,
}

Bar.defaultProps = {
  siteTitle: ``,
}

export default Bar
