import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/SEOComp"
import Services from "../components/Services"

const StyledContainer = styled.div` 
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export default function ServicesPages({ data }) {
    const streams = data.streams.nodes
    
    return (
        <Layout>
            <SEO title="Services" />
            <StyledContainer>
                <Services streams={streams} /> 
                
                </StyledContainer>
        </Layout>
    )
}

export const query = graphql` 
query streamsQuery {
    streams: allSanityStreams{
        nodes {
          id
          name
          definition
          why
          benefit
          slug
          image {
              asset {
                  fixed(width: 500, height: 250) {
                      ...GatsbySanityImageFixed
                  }
                  fluid(maxWidth: 700) {
                      ...GatsbySanityImageFluid
                  }
              }
          }
          
        }
      }
}
    
 `;       
