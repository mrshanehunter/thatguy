import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout"
import ServiceLink from "../../components/ServiceLink"
import ServiceLinkMbl from "../../components/ServiceLinkMbl"
import SEOComp from "../../components/SEOComp"
import Webs from "../../components/Webs"
import WebsMbl from "../../components/WebsMbl"
import WebsiteSummary from "../../components/WebsiteSummary"

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto 2rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledServicesContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-template-rows: auto;
    grid-gap: 1rem;
    justify-content: center;
  }
`

export default function WebsitePage(props) {
  const [width, setWidth] = useState()
  const breakpoint = 1024
  const webs = props.data.webs.nodes
  const wsummarys = props.data.wsummarys.nodes

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return (
    <Layout>
      <SEOComp title="Website Design / Development" />
      {width < breakpoint ? (
        <ServiceLinkMbl id={"web"} />
      ) : (
        <ServiceLink id={"web"} />
      )}
      <StyledContainer>
        <WebsiteSummary wsummarys={wsummarys} />
      </StyledContainer>
      <StyledServicesContainer>
        {width < breakpoint ? <WebsMbl webs={webs} /> : <Webs webs={webs} />}
      </StyledServicesContainer>
    </Layout>
  )
}

export const query = graphql`
  query websQuery {
    webs: allSanityWebs(sort: { fields: sequence }) {
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
              width: 400
              height: 400
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [WEBP, AVIF, AUTO]
            )
          }
        }
      }
    }
    wsummarys: allSanityWsummarys {
      nodes {
        id
        description
        image {
          asset {
            gatsbyImageData(
              width: 650
              height: 175
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
