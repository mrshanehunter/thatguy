import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import SEO from "../components/SEOComp"




const HomePage = props => (
  <Layout>
    <SEO title="Home" />
    <Container
      className="d-flex-column align-items-center justify-content-center mx-auto logomark"
      style={{ width: `90%`, minHeight: `85vh` }}
    >
      <div className="w-100 mx-auto p-3" style={{ maxWidth: `400px` }}>
       
      
        <div className="w-100 mb-3 p-5 text-center copy">
          <p>
            <AniLink paintDrip to="/about/" hex="#223275" duration={0.5}>
              That Guy From Marketing
            </AniLink>
            {" "}has over fifteen years experience, gathered across a diverse range of 
            industries and markets, for you to leverage in helping achieve your brand, marketing and
            company objectives.
          </p>
          <br />
          <p>
            To find out how That Guy From Marketing can help you build your
            brand and create enduring customer connections, get in{" "}
            <AniLink paintDrip to="/contact/" hex="#080424" duration={0.5}>
              contact
            </AniLink>{" "}
            today.
          </p>
        </div>
      

        
      </div>
    </Container>
  </Layout>
)

export default HomePage
