import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import SEO from "../../components/SEOComp";
import Brands from "../../components/Brands";
import BrandSummary from "../../components/BrandSummary";


const StyledContainer = styled.div` 
    width: 95%;
    margin: 0 auto 2rem;
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

export default function BrandingPage(props) {
  const brands = props.data.brands.nodes;
  const bsummarys = props.data.bsummarys.nodes;

  return( 
    <Layout>
      <SEO title="Branding & Brand Development" />
    <StyledContainer>
            <BrandSummary bsummarys={bsummarys} />
            </StyledContainer>
            <StyledServicesContainer>
      <Brands brands={brands}/>
      </StyledServicesContainer>
    </Layout>
  )
}

export const query = graphql` 
query brandingsQuery {
    brands: allSanityBrands(sort: {fields: name}) {
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
    bsummarys : allSanityBsummarys {
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

