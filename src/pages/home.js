import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Zoom from "react-reveal/Zoom"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import Seo from "../components/SeoComp"
import Services from "../components/Services"
import ServicesMbl from "../components/ServicesMbl"
import HomePageVisual from "../components/HPViz"

const StyledPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

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
`

const StyledHPVISContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export default function HomePage(props) {
  const [width, setWidth] = useState()
  const breakpoint = 1400

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  const streams = props.data.streams.nodes

  return (
    <Layout>
      <Seo title="Home" />

      <StyledPageContainer>
        <StyledHPVISContainer>
          <HomePageVisual props={props} />
        </StyledHPVISContainer>

        <Container
          className="d-flex-column align-items-center justify-content-center mx-auto logomark"
          style={{ width: `100%` }}
        >
          <Zoom delay={2000} duration={2500}>
            <div
              className="w-100 p-3 text-center copy"
              style={{ maxWidth: `90%`, margin: `0 auto` }}
            >
              <p>
                In any competitive market true innovation, sharper products and
                better services come from the challenger brands.{" "}
                <AniLink paintDrip to="/about/" hex="#223275" duration={0.25}>
                  That Guy From Marketing&reg;{" "}
                </AniLink>
                offers support across three critical elements of the mix to help
                ensure they're fit for purpose and not obstacles to reaching the tipping point.
              </p>
              <p>
                The links below offer more information or, to reach the tipping
                point sooner, get in{" "}
                <AniLink paintDrip to="/contact/" hex="#080424" duration={0.25}>
                  contact
                </AniLink>{" "}
                today.
              </p>
            </div>
          </Zoom>
        </Container>
        <Zoom delay={1500} duration={2500}>
          <StyledServiceContainer>
            {width < breakpoint ? (
              <ServicesMbl streams={streams} />
            ) : (
              <Services streams={streams} />
            )}
          </StyledServiceContainer>
        </Zoom>
      </StyledPageContainer>
    </Layout>
  )
}

export const query = graphql`
  query streamsQueryAndQuestionsQueryAnd {
    streams: allSanityStreams(sort: { fields: name }) {
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
            gatsbyImageData(width: 500, height: 150, layout: CONSTRAINED, fit: SCALE, placeholder: BLURRED, formats: [WEBP, AVIF, AUTO])
            }
          }
        }
      }
    
    questions: allSanityQuestions {
      nodes {
        id
        question1
        question2
        question3
        question4
      }
    }
  }
`
