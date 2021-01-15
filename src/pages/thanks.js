import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm"

const ThanksPage = () => (
  <>
  <Layout>
    <SEO title="Thanks" />
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: `85vh` }}
    >
      <Card className="w-50 text-center">
        <Card.Body className="thankyou">
          <h3>Your message has been sent</h3>
          <br />
          <p>That Guy From Marketing will be in contact very soon.</p>
          <br />
          <Link to="/home/">Return to the home page</Link>
        </Card.Body>
      </Card>
    </Container>
  </Layout>  
  </>
)

export default ThanksPage
