import React from "react"
import { graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import SEOComp from "../components/SEOComp"
import ControlledCarousel from "../components/ControlledCarousel"
import Profile from "../components/Profile"

export default function AboutPage(props) {
 
  const profiles = props.data.abouts.nodes
  
  return (
    <>
      <Layout>
        <SEOComp title="About" />
        <Container className="w-75 mt-5 d-flex-column justify-content-center align-items-center">
          <Profile profiles={profiles} />
          <div className="w-100 d-flex justify-content-center mt-5 mb-3">
            <p
              style={{
                color: `var(--highlight)`,
                fontSize: `1.4rem`,
                fontFamily: `"montserrat", sans-serif`,
                fontStyle: `normal`,
                fontWeight: `500`,
              }}
            >
              These are some of the brands and businesses that have benefitted
              from a relationship with That Guy From Marketing&reg;.{" "}
            </p>
          </div>
          <ControlledCarousel />
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query aboutsQuery {
    abouts: allSanityAbouts {
      nodes {
        id
        firstname
        lastname
        para1
        para2
        para3
        para4
        para5
        image {
          asset {
            gatsbyImageData(
              width: 300
              height: 300
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [WEBP, AVIF, AUTO]
            )
          }
        }
      }
    }
    
  }
`
