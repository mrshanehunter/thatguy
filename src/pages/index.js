import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Index" />
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: `80vh`, margin: `0 auto`, padding: `0`}}>
   <Link to="/home"> 
   <h1 className="visibility text-center">Visibility has no value without context</h1>
   </Link> 
   </Container>
  
  </Layout>
)

export default IndexPage
