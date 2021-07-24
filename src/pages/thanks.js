import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import Seo from "../components/SeoComp"


const ThanksPage = () => (
  <Layout>
    <Seo title="Thanks" />
    
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: `85vh` }}
    >
      <Card className="w-50 text-center">
        <Card.Body className="thankyou">
          <h3>Your message has been sent</h3>
          <br />
          <p>That Guy From Marketing will be in contact.</p>
          <br />
          <AniLink paintDrip to="/home/" hex="#223275" duration={0.25}>
            Return to the home page
          </AniLink>
        </Card.Body>
      </Card>
    </Container>
  </Layout>
)

export default ThanksPage
