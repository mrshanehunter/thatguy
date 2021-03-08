import React from "react"
import { graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Layout from "../components/Layout"
import SEO from "../components/SEOComp"
import ControlledCarousel from "../components/Carousel"
import Profile from "../components/Profile"

export default function AboutPage({ data }) {
    const abouts = data.abouts.nodes
console.log(abouts)
    return (
        <>
        <Layout>
            <SEO title="About That Guy From Marketing" />
            <Container className="w-75 mt-5 d-flex-column justify-content-center align-items-center">
            
            <Profile abouts={abouts} />
             <div className="w-100 d-flex justify-content-center mt-5 mb-3">   
            <p style={{color: `var(--highlight)`, fontSize: `1.4rem`, fontFamily: `"montserrat", sans-serif`, fontStyle: `normal`, fontWeight: `500`}}>These are some of the brands and businesses that have benefitted from a relationship with That Guy From Marketing. </p>
           
            </div> 
                <ControlledCarousel />

                

            </Container>

        </Layout>
        </>
    )
}

export const query = graphql`
  query aboutsQuery {
    abouts: allSanityAbouts{
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
          ...ImageWithPreview
        }
      }
    }
  }
`;
