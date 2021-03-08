import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import SEO from "../../components/SEOComp"
import Markets from "../../components/Markets"
import MarketingSummary from "../../components/MarketingSummary"


const StyledContainer = styled.div` 
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function MarketingPage(props) {
  const markets = props.data.markets.nodes;
  const msummarys = props.data.msummarys.nodes;

  return( 
    <Layout>
      <SEO title="Marketing Strategy, Planning, Activation" />
    <StyledContainer>
      <MarketingSummary msummarys={msummarys} />
      <Markets markets={markets}/>
    </StyledContainer>
    </Layout>
  )
}

export const query = graphql` 
query marketsQuery {
    markets: allSanityMarkets {
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
    msummarys : allSanityMsummarys {
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