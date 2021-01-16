import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import Footer from "./Footer"

import Header from "./Header"

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

  const ContentContainer = styled.div`
    margin: 0;
    padding: 0;
  `

  return (
    <>
      <GlobalStyles />
      <ContentContainer>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

        {children}
        <Footer />
      </ContentContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


