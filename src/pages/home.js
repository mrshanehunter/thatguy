import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import Branding from "../components/Branding"
import Marketing from "../components/Marketing"
import Website from "../components/Website"
import Logo from "../components/Logo"
import SEO from "../components/SEOComp"

const HomePage = props => (
  <Layout>
    <SEO title="Home" />
    <Container
      className="d-flex-column align-items-center justify-content-center mx-auto logomark"
      style={{ width: `90%`, minHeight: `85vh` }}
    >
      <div className="w-100 mx-auto p-3" style={{ maxWidth: `400px` }}>
        <div className="w-100 mb-4">
          <Logo />
        </div>

        <div className="w-100 mb-3 p-5 text-center copy">
          <p>
            Although the site is currently being refreshed, it's business as
            usual when it comes to helping you achieve your brand, marketing and
            company objectives.
          </p>
          <br />
          <p>
            To find out how That Guy From Marketing can help you build your
            brand and create enduring customer connections, make{" "}
            <AniLink paintDrip to="/contact/" hex="#080424" duration={0.5}>
              contact
            </AniLink>{" "}
            today.
          </p>
        </div>

        <div className="w-75 mx-auto">
          <Branding />
        </div>
        <div className="w-75 mx-auto">
          <Marketing />
        </div>
        <div className="w-75 mx-auto">
          <Website />
        </div>
      </div>
    </Container>
  </Layout>
)

export default HomePage
