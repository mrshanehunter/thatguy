import React from "react"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import SEOComp from "../components/SEOComp"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Address from "../components/Address"

const ContactPage = props => (
  <Layout>
    <SEOComp title="Contact" />
    <Container
      className="d-flex-column justify-content-center align-items-center contactContainer"
      style={{ minHeight: `85vh` }}
    >
      <Card className="w-100" style={{ maxWidth: `400px`, margin: `0 auto 2rem` }}>
        <Card.Body>
          <ContactForm props={props} />
        </Card.Body>
      </Card>
      <Address />
    </Container>
  </Layout>
)

export default ContactPage
