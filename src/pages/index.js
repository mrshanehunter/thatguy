import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import SeO from "../components/SEOComp"
import Visibility from "../components/Visibility"

const IndexPage = ({...props }) => (
  <Layout>
    <SeO title="Index" />
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: `80vh`, margin: `0 auto`, padding: `0` }}
    >
      <Visibility props={props}/>
    </Container>
  </Layout>
)

export default IndexPage
