import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import Nav from "react-bootstrap/Nav"


export default function Header({ siteTitle, children }) {
 return  (
  <header>
   
    <Nav className="justify-content-end">
      <Nav.Item>
        <AniLink paintDrip to="/home/" hex="#0f4c81" duration={0.25}>
          home
        </AniLink>
      </Nav.Item>
      <Nav.Item>
        <AniLink paintDrip to="/projects/" hex="#223275" duration={0.25}>
          projects
        </AniLink>
      </Nav.Item>
      <Nav.Item>
        <AniLink paintDrip to="/about/" hex="#080424" duration={0.25}>
          about
        </AniLink>
      </Nav.Item>
      <Nav.Item>
        <AniLink paintDrip to="/contact/" hex="#d9d9d9" duration={0.25}>
          contact
        </AniLink>
      </Nav.Item>
  </Nav>
    <div className="graded"></div>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



