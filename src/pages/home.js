import React from "react"
import { graphql} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import SEO from "../components/SEOComp"
import Services from "../components/Services"

const StyledServiceContainer = styled.div` 
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`


export default function HomePage(props){
  const streams = props.data.streams.nodes;
  return(
  <Layout>
    <SEO title="Home" />
    <Container
      className="d-flex-column align-items-center justify-content-center mx-auto logomark"
      style={{ width: `90%`, minHeight: `85vh` }}
    >
     
       
      
        <div className="w-100 mb-3 p-5 text-center copy" style={{maxWidth: `400px`, margin: `0 auto`}}>
          <p>
          
         Paragraph on visibility value and context and direct attention to the services below.
          </p>
          <br />
          <p>
            To find out how That Guy From Marketing can help you build your
            brand and create enduring customer connections, get in{" "}
            <AniLink paintDrip to="/contact/" hex="#080424" duration={0.5}>
              contact
            </AniLink>{" "}
            today.
          </p>
        </div>
        <StyledServiceContainer>   
               <Services streams={streams} /> 
        </StyledServiceContainer>

     
    </Container>
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
