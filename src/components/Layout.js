import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"
import Logo from "./Logo"

import Header from "./header"

const ContentContainer = styled.div`
  width: 90vw;
  min-height: 90vh;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
`

const StyledContentContainer = styled.div`
  width: 97.5%;
  min-height: 90vh;
  margin: 1rem auto;
  background: transparent;
  flex: 1;
  align-items: center;
`

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Container
        fluid
        className="d-flex m-1 justify-content-center align-content-center"
      >
        <ContentContainer>
          <AniLink paintDrip to="/home/" hex="#0f4c81" duration={0.5}>
            <Logo />
          </AniLink>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <StyledContentContainer>
            {
              <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-MTN9NP7"
                  height="0"
                  width="0"
                  style="display:none;visibility:hidden"
                ></iframe>
              </noscript>
            }
            {children}
          </StyledContentContainer>
          <Footer />
        </ContentContainer>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
