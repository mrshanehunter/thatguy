import React from "react"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm"

const ContactPage = props => (
  <Layout>
    <SEO title="Contact" />
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: `85vh` }}
    >
      <Card className="w-100" style={{ maxWidth: `400px` }}>
        <Card.Body>
          <ContactForm props={props} />
        </Card.Body>
      </Card>
    </Container>
  </Layout>
)

export default ContactPage
