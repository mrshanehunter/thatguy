import React, { useState, useEffect } from "react"
import { graphql} from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import SEO from "../components/SEOComp"
import Services from "../components/Services"
import ServicesMbl from "../components/ServicesMbl"
import HomePageVis from "../components/HomePageVis"

const StyledPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledServiceContainer = styled.div` 
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1500px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledHPVISContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;


export default function HomePage(props){
  const [width, setWidth] =useState(window.innerWidth);
  const breakpoint = 1400;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const streams = props.data.streams.nodes;
  
  return(
  <Layout>
    <SEO title="Home" />

    <StyledPageContainer>
    <StyledHPVISContainer>
       <HomePageVis props={props} />
       </StyledHPVISContainer>
    <Container
      className="d-flex-column align-items-center justify-content-center mx-auto logomark"
      style={{width: `100%`}}
    >
      <div className="w-100 mb-3 p-5 text-center copy" style={{maxWidth: `90%`, margin: `0 auto`}}>
        
        <p>
          Understand how <AniLink paintDrip to="/about/" hex="#223275" duration={0.5}>That Guy From Marketing{" "}</AniLink> 
          can help you build a better brand and create enduring customer connections by narrowing focus to one of the three specialties below. 
           Or, to start a conversation, get in{" "}
         <AniLink paintDrip to="/contact/" hex="#080424" duration={0.5}>
          contact
          </AniLink>{" "}
            today.
          </p>
      </div>
      </Container>
    
     <StyledServiceContainer>   
        { width < breakpoint ? <ServicesMbl streams={streams} /> :  <Services streams={streams} /> }
  
      </StyledServiceContainer>
     
     
</StyledPageContainer>
     
   
  </Layout>
)
}


export const query = graphql` 
query streamsQueryAndQuestionsQueryAnd {
    streams: allSanityStreams(sort: {fields: name}) {
        nodes {
          id
          name
          definition
          why
          benefit
          slug
          event_key
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
    questions: allSanityQuestions{
      nodes {
        id 
        question1
        question2
        question3
        question4      
      }
    }
  } 
 `;       
