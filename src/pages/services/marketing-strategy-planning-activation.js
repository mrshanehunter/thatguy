import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import ServiceLink from "../../components/ServiceLink"
import ServiceLinkMbl from "../../components/ServiceLinkMbl"
import SeO from "../../components/SeoComp"
import Markets from "../../components/Markets"
import MarketsMbl from "../../components/MarketsMbl"
import MarketingSummary from "../../components/MarketingSummary"


const StyledContainer = styled.div` 
    width: 95%;
    margin: 0  auto 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledServicesContainer = styled.div` 
    width: 100%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: center;
    @media (min-width: 1024px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
      grid-auto-rows: auto;
      grid-gap: 1rem;


    }
`;

export default function MarketingPage(props) {
  const [width, setWidth] = useState();
  const breakpoint = 1024;
  const markets = props.data.markets.nodes;
  const msummarys = props.data.msummarys.nodes;

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);




  return (
    <Layout>
      <SeO title="Marketing Strategy, Planning, Activation" />
      {width < breakpoint ?  <ServiceLinkMbl id={"mktg"} /> :
        <ServiceLink id={"mktg"} />
      }
      <StyledContainer>
        <MarketingSummary msummarys={msummarys} />
      </StyledContainer>
      <StyledServicesContainer>
        {width < breakpoint ?   <MarketsMbl markets={markets} />
         : <Markets markets={markets} />
        }
      </StyledServicesContainer>
    </Layout>
  )
}

export const query = graphql`
  query marketsQuery {
    markets: allSanityMarkets(sort: { fields: sequence }) {
      nodes {
        id
        sequence
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
            gatsbyImageData(
              width: 500
              height: 500
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [WEBP, AVIF, AUTO]
            )
          }
        }
      }
    }
    msummarys: allSanityMsummarys {
      nodes {
        id
        description
        image {
          asset {
            gatsbyImageData(
              width: 500
              height: 500
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