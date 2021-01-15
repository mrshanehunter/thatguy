import React from "react"
import { Link } from "gatsby"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <Container className="d-flex justify-content-center align-items-center" style={{minHeight: `85vh`}}>
      <Card className="w-25">
        <Card.Body>
          <ContactForm />

        </Card.Body>
      </Card>
    </Container>
    
  </Layout>
)

export default ContactPage
