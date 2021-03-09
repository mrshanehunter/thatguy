import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import SEO from "../../components/SEOComp";
import Webs from "../../components/Webs";
import WebsiteSummary from "../../components/WebsiteSummary"


const StyledContainer = styled.div` 
    width: 100%;
    margin: 0 auto 2rem ;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledServicesContainer = styled.div` 
    width: 100%;
    margin: 0 auto;
    padding: 0;
`;

export default function WebsitePage(props) {
  const webs = props.data.webs.nodes;
  const wsummarys = props.data.wsummarys.nodes;

  return( 
    <Layout>
      <SEO title="Website Design & Development" />
      <StyledContainer>
      <WebsiteSummary wsummarys={wsummarys} />
      </StyledContainer>  
      <StyledServicesContainer>
      <Webs webs={webs}/>
      </StyledServicesContainer>
     
    </Layout>
  )
}

export const query = graphql` 
query websQuery {
    webs: allSanityWebs {
      nodes {
        id
        inclusion1
        inclusion2
        inclusion3
        inclusion4
        inclusion5
        inclusion6
        name
        description
        image {
          asset {
              fixed(width: 300, height: 300) {
                  ...GatsbySanityImageFixed
              }
              fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
              }

          }
        }
      }
    }
    wsummarys : allSanityWsummarys {
      nodes {
        id
        description
        image {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }

    }
  }

`;