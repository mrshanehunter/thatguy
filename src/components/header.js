import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "react-bootstrap/Nav"

const Header = ({ siteTitle }) => (
  <header>

       <Nav className="justify-content-end">
         <Nav.Item>
           <Link to="/home/">home</Link>
         </Nav.Item>
         <Nav.Item>
           <Link to="/contact/">contact</Link>
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
