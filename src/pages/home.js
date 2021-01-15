import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import Branding from "../components/Branding"
import Marketing from "../components/Marketing"
import Website from "../components/Website"
import Logo from "../components/Logo"
import SEO from "../components/SEO"

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
    <Container className="logomark">
      <div className="w-50 mx-auto">
        <Logo />
      </div>
    </Container>
    <Container className="copy">
      <div className="w-25 mx-auto">
      <p>Although the site is currently being refreshed, it's business as usual when it comes to helping you achieve your brand, marketing and company objectives.</p>
      <br />
      <p>To find out how That Guy From Marketing can help you build your brand and create enduring customer connections, make <Link to="/contact/">contact</Link> today.</p>
      </div>
    </Container>
    <Container className="service">
      <div>
     <Branding /></div>
     <div>
     <Marketing /></div>
     <div>
     <Website /></div>
      
    
    </Container>
  </Layout>
)

export default HomePage
