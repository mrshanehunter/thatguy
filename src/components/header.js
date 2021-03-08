import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import Nav from "react-bootstrap/Nav"


const Header = ({ siteTitle, children }) => (
  <header>
   
    <Nav className="justify-content-end">
      <Nav.Item>
        <AniLink paintDrip to="/home/" hex="#0f4c81" duration={0.5}>
          home
        </AniLink>
      </Nav.Item>
      <Nav.Item>
        <AniLink paintDrip to="/services/" hex="#080424" duration={0.5}>
          services
        </AniLink>
      </Nav.Item>
      <Nav.Item>
        <AniLink paintDrip to="/projects/" hex="#223275" duration={0.5}>
          projects
        </AniLink>
      </Nav.Item>
      <Nav.Item>
        <AniLink paintDrip to="/contact/" hex="#d9d9d9" duration={0.5}>
          contact
        </AniLink>
      </Nav.Item>
  </Nav>
    <div className="graded"></div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
