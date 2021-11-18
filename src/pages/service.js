import React from "react"
import { graphql } from "gatsby"
import ServiceMenu from "../components/ServiceMenu"
import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import SEOComp from "../components/SEOComp"

export default function ServicePage({ data }) {
  const serviceItems = data.serviceStreams.nodes

  return (
    <>
      <Layout>
        <SEOComp title="Services" />
        <Container
          className="mt-4 justify-content-center"
          style={{ maxWidth: `90%`, margin: `5rem, auto` }}
        >
          <ServiceMenu serviceItems={serviceItems} />
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query servicePageQuery {
    serviceStreams: allSanityStreams {
      nodes {
        id
        name
        slug
        image {
          asset {
            gatsbyImageData(
              width: 350
              height: 100
              layout: FIXED
              fit: SCALE
              placeholder: BLURRED
              formats: [WEBP, AVIF, AUTO]
            )
          }
        }
      }
    }
  }
`
