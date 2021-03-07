import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/Layout";
import SEO from "../../components/SEOComp";
import Brands from "../../components/Brands";


const StyledContainer = styled.div` 
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function BrandingPage({ data }) {
  const brands = data.brands.nodes;

  return( 
    <Layout>
      <SEO title="Branding & Brand Development" />
    <StyledContainer>
      <Brands brands={brands}/>
    </StyledContainer>
    </Layout>
  )
}

export const query = graphql` 
query brandingsQuery {
    brands: allSanityBrands {
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
  }

`;