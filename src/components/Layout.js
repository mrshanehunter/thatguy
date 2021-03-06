import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import styled from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"

import Header from "./Header"

const ContentContainer = styled.div`
  width: 90vw;
  min-height: 100vh;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
`;

const StyledContentContainer = styled.div` 
  width: 90%;
  min-height: 90vh;
  margin: 2rem auto;
  background: transparent;
  flex: 1;
  align-items: center;

`;

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
      <Container fluid className="d-flex m-1 justify-content-center align-content-center">
      <ContentContainer>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <StyledContentContainer> 
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
